import React, { useState, useEffect, useRef } from "react";
import {
  FaUtensils,
  FaCalendarAlt,
  FaUsers,
  FaMapMarkerAlt,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaCheckCircle,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import nigerianFoods from "./nigerianFoods";

const API_BASE = "https://susanfalvoredkitchen-backend-oz62.onrender.com/api/v1/catering";

export default function CateringQuote() {
  const [form, setForm] = useState({
    eventType: "Wedding",
    dateTime: "",
    numberOfGuests: "",
    venue: "",
    additionalNotes: "",
    preferredDishes: [],
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [requestId, setRequestId] = useState("");
  const [status, setStatus] = useState(null);
  const [error, setError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submitRequest = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${API_BASE}/catering/requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          numberOfGuests: Number(form.numberOfGuests),
          preferredDishes: form.preferredDishes,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Submission failed");

      setRequestId(data._id);
      setShowSuccessModal(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const checkStatus = async () => {
    try {
      const res = await fetch(`${API_BASE}/requests/${requestId}/status`);
      const data = await res.json();
      if (!res.ok) throw new Error("Failed to fetch status");
      setStatus(data.status);
      setShowStatusModal(true);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="bg-orange-600 py-6 px-8 text-white flex items-center gap-4">
          <FaUtensils className="text-2xl" />
          <h2 className="text-xl sm:text-2xl font-bold">Catering Quote Request</h2>
        </div>

        <form onSubmit={submitRequest} className="p-6 sm:p-10 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700">Event Type</label>
              <select
                name="eventType"
                onChange={handleChange}
                className="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 text-sm focus:ring-2 focus:ring-orange-500/20 outline-none transition"
              >
                <option>Wedding</option>
                <option>Corporate Event</option>
                <option>Birthday Party</option>
                <option>Anniversary</option>
                <option>Conference</option>
                <option>Private Party</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700">Event Date & Time</label>
              <Input
                icon={<FaCalendarAlt />}
                type="datetime-local"
                name="dateTime"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700">Number of Guests</label>
              <Input
                icon={<FaUsers />}
                type="number"
                name="numberOfGuests"
                placeholder="e.g. 120"
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700">Event Venue</label>
              <Input
                icon={<FaMapMarkerAlt />}
                type="text"
                name="venue"
                placeholder="Event location"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">Additional Notes (Optional)</label>
            <textarea
              name="additionalNotes"
              placeholder="Outdoor event, special requests, timing, etc."
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm min-h-[120px] focus:ring-2 focus:ring-orange-500/20 outline-none transition"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">Preferred Dishes</label>
            <div className="relative" ref={dropdownRef}>
              <div
                className="w-full h-12 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm cursor-pointer flex items-center justify-between"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <span className="truncate">
                  {form.preferredDishes.length > 0 
                    ? form.preferredDishes.join(", ") 
                    : "Select your favorites..."}
                </span>
                <FaSearch className="text-gray-400" />
              </div>
              
              {showDropdown && (
                <div className="absolute z-10 top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-2xl shadow-2xl max-h-60 overflow-y-auto animate-in slide-in-from-top-2 duration-200">
                  {nigerianFoods.map((food) => (
                    <div
                      key={food}
                      className={`px-4 py-3 cursor-pointer text-sm transition border-b border-gray-50 last:border-0 hover:bg-orange-50 ${
                        form.preferredDishes.includes(food) ? "bg-orange-100 font-bold text-orange-600" : ""
                      }`}
                      onClick={() => {
                        if (!form.preferredDishes.includes(food)) {
                          setForm({
                            ...form,
                            preferredDishes: [...form.preferredDishes, food],
                          });
                        } else {
                          setForm({
                            ...form,
                            preferredDishes: form.preferredDishes.filter(f => f !== food),
                          });
                        }
                      }}
                    >
                      {food}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="pt-6 border-t border-gray-100">
            <h3 className="text-lg font-bold text-orange-600 mb-6">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">Full Name</label>
                <Input
                  icon={<FaUser />}
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">Email Address</label>
                <Input
                  icon={<FaEnvelope />}
                  type="email"
                  name="email"
                  placeholder="you@email.com"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-bold text-gray-700">Phone Number</label>
              <Input
                icon={<FaPhone />}
                type="tel"
                name="phone"
                placeholder="08012345678"
                onChange={handleChange}
              />
            </div>
          </div>

          <button 
            className="w-full bg-orange-600 text-white rounded-2xl py-4 font-bold text-lg hover:bg-orange-700 transform transition active:scale-95 disabled:opacity-50 shadow-lg shadow-orange-500/30"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Catering Request"}
          </button>
        </form>

        {requestId && (
          <div className="px-6 pb-6">
            <button 
              className="w-full border-2 border-gray-900 rounded-2xl py-3 flex items-center justify-center gap-2 font-bold text-sm hover:bg-gray-900 hover:text-white transition"
              onClick={checkStatus}
            >
              <FaSearch /> Check Request Status
            </button>
          </div>
        )}

        {error && <p className="text-center text-red-500 font-bold p-4 bg-red-50 mx-6 mb-6 rounded-xl">{error}</p>}
      </div>

      {/* MODALS */}
      {showSuccessModal && (
        <Modal onClose={() => setShowSuccessModal(false)}>
          <div className="flex flex-col items-center gap-4">
            <FaCheckCircle className="text-5xl text-green-500" />
            <h3 className="text-xl font-bold">Request Submitted</h3>
            <p className="text-gray-500 text-sm">Your unique request ID is:</p>
            <div className="bg-gray-100 p-4 rounded-xl border border-gray-200 font-mono font-bold text-indigo-600 select-all">
              {requestId}
            </div>
            <p className="text-xs text-gray-400 mt-2 italic px-8">Save this ID to check your status later!</p>
          </div>
        </Modal>
      )}

      {showStatusModal && (
        <Modal onClose={() => setShowStatusModal(false)}>
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-xl font-bold">Request Status</h3>
            <div className="flex items-center gap-3">
              <span className="text-gray-500 uppercase tracking-widest text-xs font-bold">Current State:</span>
              <span className={`px-4 py-1 rounded-full text-sm font-bold uppercase ${
                status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
              }`}>
                {status}
              </span>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

const Input = ({ icon, ...props }) => (
  <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl px-4 focus-within:ring-2 focus-within:ring-orange-500/20 transition group">
    <span className="text-orange-600 shrink-0 group-focus-within:scale-110 transition">{icon}</span>
    <input 
      {...props} 
      required 
      className="w-full bg-transparent border-none py-3 px-3 text-sm focus:outline-none" 
    />
  </div>
);

const Modal = ({ children, onClose }) => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
    <div className="relative bg-white w-full max-w-sm p-8 rounded-3xl shadow-2xl animate-in zoom-in duration-300 text-center">
      <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition" onClick={onClose}>
        <FaTimes size={20} />
      </button>
      {children}
    </div>
  </div>
);
