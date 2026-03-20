import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaTrash,
  FaTimesCircle,
  FaDollarSign,
} from "react-icons/fa";

const API_BASE = "https://susanfalvoredkitchen-backend-oz62.onrender.com/api/v1/catering";

export default function Catering() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Fetch all requests
  const fetchRequests = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE}/admin/catering/requests`);
      const json = await res.json();

      if (!res.ok) throw new Error(json.message || "Failed to fetch requests");

      // Ensure we get an array
      setRequests(Array.isArray(json.data) ? json.data : []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  // Delete request
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this request?")) return;

    try {
      const res = await fetch(`${API_BASE}/admin/catering/requests/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete request");

      setRequests((prev) => prev.filter((r) => r._id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Catering Requests</h2>

      {loading && <p className="text-gray-500">Loading requests...</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {!loading && requests.length === 0 && <p className="text-gray-500">No requests found.</p>}

      {Array.isArray(requests) && requests.length > 0 && (
        <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-bold text-gray-700">Event</th>
                <th className="px-4 py-3 text-left font-bold text-gray-700">Date</th>
                <th className="px-4 py-3 text-left font-bold text-gray-700">Guests</th>
                <th className="px-4 py-3 text-left font-bold text-gray-700">Status</th>
                <th className="px-4 py-3 text-center font-bold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {requests.map((req) => (
                <tr
                  key={req._id}
                  className="hover:bg-gray-50 transition cursor-pointer"
                  onClick={() => setSelectedRequest(req)}
                >
                  <td className="px-4 py-3 whitespace-nowrap text-gray-700 font-medium">{req.eventType}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-600">
                    {new Date(req.dateTime).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-600">{req.numberOfGuests}</td>
                  <td className="px-4 py-3 whitespace-nowrap capitalize">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      req.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {req.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(req._id);
                      }}
                      className="p-1.5 hover:bg-red-50 rounded-lg text-red-500 transition"
                      title="Delete Request"
                    >
                      <FaTrash size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal for selected request */}
      {selectedRequest && (
        <Modal onClose={() => setSelectedRequest(null)}>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 border-b pb-2">
              {selectedRequest.eventType} Details
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <p>
                <strong className="block text-gray-500 uppercase text-[10px] tracking-wider">Date & Time</strong>
                {new Date(selectedRequest.dateTime).toLocaleString()}
              </p>
              <p>
                <strong className="block text-gray-500 uppercase text-[10px] tracking-wider">Guests</strong> 
                {selectedRequest.numberOfGuests}
              </p>
              <p className="sm:col-span-2">
                <strong className="block text-gray-500 uppercase text-[10px] tracking-wider">Venue</strong> 
                {selectedRequest.venue}
              </p>
              <p className="sm:col-span-2">
                <strong className="block text-gray-500 uppercase text-[10px] tracking-wider">Contact Info</strong> 
                {selectedRequest.name} • {selectedRequest.email} • {selectedRequest.phone}
              </p>
              <p className="sm:col-span-2">
                <strong className="block text-gray-500 uppercase text-[10px] tracking-wider">Additional Notes</strong> 
                {selectedRequest.additionalNotes || "N/A"}
              </p>
              <p className="sm:col-span-2">
                <strong className="block text-gray-500 uppercase text-[10px] tracking-wider">Preferred Dishes</strong> 
                {Array.isArray(selectedRequest.preferredDishes)
                  ? selectedRequest.preferredDishes.join(", ")
                  : selectedRequest.preferredDishes || "N/A"}
              </p>
              <div>
                <strong className="block text-gray-500 uppercase text-[10px] tracking-wider">Status</strong> 
                <span className="capitalize px-2 py-0.5 bg-gray-100 rounded text-gray-700 text-xs font-semibold">
                  {selectedRequest.status}
                </span>
              </div>
            </div>

            {/* Quote */}
            {selectedRequest.quote && selectedRequest.quote.items?.length > 0 && (
              <div className="mt-6 pt-6 border-t">
                <h4 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4">
                  <FaDollarSign className="text-green-600" /> Quote
                </h4>
                <div className="overflow-x-auto rounded-lg border border-gray-100">
                  <table className="min-w-full divide-y divide-gray-200 text-xs">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-3 py-2 text-left text-gray-600">Dish</th>
                        <th className="px-3 py-2 text-center text-gray-600">Qty</th>
                        <th className="px-3 py-2 text-right text-gray-600">Price</th>
                        <th className="px-3 py-2 text-right text-gray-600">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {selectedRequest.quote.items.map((item, idx) => (
                        <tr key={idx}>
                          <td className="px-3 py-2 text-gray-800">{item.name}</td>
                          <td className="px-3 py-2 text-center text-gray-600">{item.qty}</td>
                          <td className="px-3 py-2 text-right text-gray-600">£{item.unitPrice.toLocaleString()}</td>
                          <td className="px-3 py-2 text-right font-medium text-gray-900">£{(item.unitPrice * item.qty).toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-gray-50 font-bold">
                      <tr>
                        <td colSpan={3} className="px-3 py-2 text-right text-gray-700 uppercase tracking-wider">Grand Total</td>
                        <td className="px-3 py-2 text-right text-indigo-700 text-sm">
                          £{selectedRequest.quote.total?.toLocaleString() || 0}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
}

const Modal = ({ children, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-6 backdrop-blur-sm animate-in fade-in duration-200">
    <div className="bg-white p-6 sm:p-8 rounded-2xl w-full max-w-2xl relative shadow-2xl max-h-[90vh] overflow-y-auto animate-in zoom-in duration-300">
      <button 
        className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition" 
        onClick={onClose}
      >
        <FaTimesCircle size={24} />
      </button>
      {children}
    </div>
  </div>
);
