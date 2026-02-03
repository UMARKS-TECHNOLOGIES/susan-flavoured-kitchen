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

const API_BASE =
  "https://susanfalvoredkitchen-backend-oz62.onrender.com/api/v1/catering";

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

  // Close dropdown when clicking outside
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
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>
          <FaUtensils /> Catering Quote Request
        </h2>

        <form onSubmit={submitRequest} style={styles.form}>
          {/* Event Type & Date */}
          <div style={styles.row}>
            <div style={styles.col}>
              <label style={styles.label}>Event Type</label>
              <select
                name="eventType"
                onChange={handleChange}
                style={styles.input}
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
            <div style={styles.col}>
              <label style={styles.label}>Event Date & Time</label>
              <Input
                icon={<FaCalendarAlt />}
                type="datetime-local"
                name="dateTime"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Guests & Venue */}
          <div style={styles.row}>
            <div style={styles.col}>
              <label style={styles.label}>Number of Guests</label>
              <Input
                icon={<FaUsers />}
                type="number"
                name="numberOfGuests"
                placeholder="e.g. 120"
                onChange={handleChange}
              />
            </div>
            <div style={styles.col}>
              <label style={styles.label}>Event Venue</label>
              <Input
                icon={<FaMapMarkerAlt />}
                type="text"
                name="venue"
                placeholder="Event location"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Notes */}
          <label style={styles.label}>Additional Notes (Optional)</label>
          <textarea
            name="additionalNotes"
            placeholder="Outdoor event, special requests, timing, etc."
            onChange={handleChange}
            style={styles.textarea}
          />

          {/* Preferred Dishes */}
          <label style={styles.label}>Preferred Dishes</label>
          <div style={{ position: "relative" }} ref={dropdownRef}>
            <input
              type="text"
              placeholder="Click to select dishes"
              value={form.preferredDishes.join(", ")}
              readOnly
              onClick={() => setShowDropdown(!showDropdown)}
              style={styles.input}
            />
            {showDropdown && (
              <div style={styles.dropdown}>
                {nigerianFoods.map((food) => (
                  <div
                    key={food}
                    style={styles.dropdownItem}
                    onClick={() => {
                      if (!form.preferredDishes.includes(food)) {
                        setForm({
                          ...form,
                          preferredDishes: [...form.preferredDishes, food],
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
          {form.preferredDishes.length > 0 && (
            <p style={{ fontSize: 12, marginTop: 4, color: "#555" }}>
              Selected: {form.preferredDishes.join(", ")}
            </p>
          )}

          {/* Contact Info */}
          <h3 style={styles.sectionLabel}>Contact Information</h3>
          <div style={styles.row}>
            <div style={styles.col}>
              <label style={styles.label}>Full Name</label>
              <Input
                icon={<FaUser />}
                type="text"
                name="name"
                placeholder="Your full name"
                onChange={handleChange}
              />
            </div>
            <div style={styles.col}>
              <label style={styles.label}>Email Address</label>
              <Input
                icon={<FaEnvelope />}
                type="email"
                name="email"
                placeholder="you@email.com"
                onChange={handleChange}
              />
            </div>
          </div>
          <label style={styles.label}>Phone Number</label>
          <Input
            icon={<FaPhone />}
            type="tel"
            name="phone"
            placeholder="08012345678"
            onChange={handleChange}
          />

          <button style={styles.button} disabled={loading}>
            {loading ? "Submitting..." : "Submit Catering Request"}
          </button>
        </form>

        {requestId && (
          <button style={styles.secondaryBtn} onClick={checkStatus}>
            <FaSearch /> Check Request Status
          </button>
        )}

        {error && <p style={styles.error}>{error}</p>}
      </div>

      {/* SUCCESS MODAL */}
      {showSuccessModal && (
        <Modal onClose={() => setShowSuccessModal(false)}>
          <FaCheckCircle size={40} color="green" />
          <h3>Request Submitted</h3>
          <p>Your request ID:</p>
          <strong>{requestId}</strong>
        </Modal>
      )}

      {/* STATUS MODAL */}
      {showStatusModal && (
        <Modal onClose={() => setShowStatusModal(false)}>
          <h3>Request Status</h3>
          <p>
            Status: <strong>{status}</strong>
          </p>
        </Modal>
      )}
    </div>
  );
}

const Input = ({ icon, ...props }) => (
  <div style={styles.inputGroup}>
    <span style={styles.icon}>{icon}</span>
    <input {...props} required style={styles.input} />
  </div>
);

const Modal = ({ children, onClose }) => (
  <div style={styles.overlay}>
    <div style={styles.modal}>
      <button style={styles.closeBtn} onClick={onClose}>
        <FaTimes />
      </button>
      {children}
    </div>
  </div>
);

/* ================= STYLES ================= */
const styles = {
  page: {
    background: "#f5f7fa",
    minHeight: "100vh",
    padding: "20px",
  },
  card: {
    maxWidth: 700,
    margin: "auto",
    background: "#fff",
    padding: "30px 25px",
    borderRadius: 16,
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  title: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 25,
    fontSize: 24,
  },
  form: {
    display: "grid",
    gap: 16,
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    gap: 16,
  },
  col: {
    flex: 1,
    minWidth: 250,
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  icon: {
    color: "#F97316",
  },
  input: {
    flex: 1,
    padding: "12px 10px",
    borderRadius: 8,
    border: "1px solid #ccc",
    fontSize: 14,
  },
  textarea: {
    padding: 12,
    borderRadius: 8,
    border: "1px solid #ccc",
    minHeight: 100,
    fontSize: 14,
  },
  button: {
    padding: 14,
    background: "#F97316",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 16,
  },
  secondaryBtn: {
    marginTop: 18,
    background: "transparent",
    border: "1px solid #111827",
    padding: 12,
    borderRadius: 8,
    cursor: "pointer",
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  },
  modal: {
    background: "#fff",
    padding: 30,
    borderRadius: 12,
    minWidth: 300,
    maxWidth: "90%",
    position: "relative",
    textAlign: "center",
  },
  closeBtn: {
    position: "absolute",
    top: 10,
    right: 10,
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 6,
    display: "block",
  },
  sectionLabel: {
    marginTop: 20,
    fontWeight: 700,
    fontSize: 16,
    color: "#F97316",
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: 6,
    maxHeight: 200,
    overflowY: "auto",
    zIndex: 10,
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  dropdownItem: {
    padding: 10,
    cursor: "pointer",
    borderBottom: "1px solid #eee",
    fontSize: 14,
  },

  // Responsive styles
  "@media(max-width:768px)": {
    card: {
      padding: "20px 15px",
    },
    row: {
      flexDirection: "column",
    },
    col: {
      minWidth: "100%",
    },
    input: {
      padding: "14px 12px",
      fontSize: 16,
    },
    textarea: {
      fontSize: 16,
    },
    button: {
      fontSize: 16,
      padding: 16,
    },
  },
};
