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

  /* ========= MOBILE RESPONSIVENESS (INLINE ONLY) ========= */
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ========= CLOSE DROPDOWN ========= */
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
      <div
        style={{
          ...styles.card,
          padding: isMobile ? "20px 15px" : "30px 25px",
        }}
      >
        <h2 style={styles.title}>
          <FaUtensils /> Catering Quote Request
        </h2>

        <form onSubmit={submitRequest} style={styles.form}>
          {/* Event Type & Date */}
          <div
            style={{
              ...styles.row,
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            <div style={{ ...styles.col, minWidth: isMobile ? "100%" : 250 }}>
              <label style={styles.label}>Event Type</label>
              <select
                name="eventType"
                onChange={handleChange}
                style={{
                  ...styles.input,
                  fontSize: isMobile ? 16 : 14,
                  padding: isMobile ? "14px 12px" : "12px 10px",
                }}
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

            <div style={{ ...styles.col, minWidth: isMobile ? "100%" : 250 }}>
              <label style={styles.label}>Event Date & Time</label>
              <Input
                icon={<FaCalendarAlt />}
                type="datetime-local"
                name="dateTime"
                onChange={handleChange}
                isMobile={isMobile}
              />
            </div>
          </div>

          {/* Guests & Venue */}
          <div
            style={{
              ...styles.row,
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            <div style={{ ...styles.col, minWidth: isMobile ? "100%" : 250 }}>
              <label style={styles.label}>Number of Guests</label>
              <Input
                icon={<FaUsers />}
                type="number"
                name="numberOfGuests"
                placeholder="e.g. 120"
                onChange={handleChange}
                isMobile={isMobile}
              />
            </div>

            <div style={{ ...styles.col, minWidth: isMobile ? "100%" : 250 }}>
              <label style={styles.label}>Event Venue</label>
              <Input
                icon={<FaMapMarkerAlt />}
                type="text"
                name="venue"
                placeholder="Event location"
                onChange={handleChange}
                isMobile={isMobile}
              />
            </div>
          </div>

          {/* Notes */}
          <label style={styles.label}>Additional Notes</label>
          <textarea
            name="additionalNotes"
            onChange={handleChange}
            placeholder="Outdoor event, special requests, timing, etc."
            style={{
              ...styles.textarea,
              fontSize: isMobile ? 16 : 14,
              padding: isMobile ? 14 : 12,
            }}
          />

          {/* Preferred Dishes */}
          <label style={styles.label}>Preferred Dishes</label>
          <div style={{ position: "relative" }} ref={dropdownRef}>
            <input
              readOnly
              onClick={() => setShowDropdown(!showDropdown)}
              value={form.preferredDishes.join(", ")}
              placeholder="Click to select dishes"
              style={{
                ...styles.input,
                fontSize: isMobile ? 16 : 14,
                padding: isMobile ? "14px 12px" : "12px 10px",
              }}
            />

            {showDropdown && (
              <div style={styles.dropdown}>
                {nigerianFoods.map((food) => (
                  <div
                    key={food}
                    style={styles.dropdownItem}
                    onClick={() =>
                      !form.preferredDishes.includes(food) &&
                      setForm({
                        ...form,
                        preferredDishes: [...form.preferredDishes, food],
                      })
                    }
                  >
                    {food}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Contact Info */}
          <h3 style={styles.sectionLabel}>Contact Information</h3>

          <div
            style={{
              ...styles.row,
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            <div style={{ ...styles.col, minWidth: isMobile ? "100%" : 250 }}>
              <label style={styles.label}>Full Name</label>
              <Input
                icon={<FaUser />}
                type="text"
                name="name"
                placeholder="Your full name"
                onChange={handleChange}
                isMobile={isMobile}
              />
            </div>

            <div style={{ ...styles.col, minWidth: isMobile ? "100%" : 250 }}>
              <label style={styles.label}>Email</label>
              <Input
                icon={<FaEnvelope />}
                type="email"
                name="email"
                placeholder="e.g. yourname@example.com"
                onChange={handleChange}
                isMobile={isMobile}
              />
            </div>
          </div>

          <label style={styles.label}>Phone</label>
          <Input
            icon={<FaPhone />}
            type="tel"
            name="phone"
            placeholder="e.g. +448012345678"
            onChange={handleChange}
            isMobile={isMobile}
          />

          <button
            style={{
              ...styles.button,
              padding: isMobile ? 16 : 14,
              fontSize: isMobile ? 16 : 15,
            }}
            disabled={loading}
          >
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

      {showSuccessModal && (
        <Modal onClose={() => setShowSuccessModal(false)}>
          <FaCheckCircle size={40} color="green" />
          <h3>Request Submitted</h3>
          <strong>{requestId}</strong>
        </Modal>
      )}

      {showStatusModal && (
        <Modal onClose={() => setShowStatusModal(false)}>
          <h3>Status</h3>
          <strong>{status}</strong>
        </Modal>
      )}
    </div>
  );
}

/* ========= INPUT ========= */
const Input = ({ icon, isMobile, ...props }) => (
  <div style={styles.inputGroup}>
    <span style={styles.icon}>{icon}</span>
    <input
      {...props}
      required
      style={{
        ...styles.input,
        fontSize: isMobile ? 16 : 14,
        padding: isMobile ? "14px 12px" : "12px 10px",
      }}
    />
  </div>
);

/* ========= MODAL ========= */
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

/* ========= STYLES ========= */
const styles = {
  page: {
    background: "#f5f7fa",
    minHeight: "100vh",
    padding: 20,
  },
  card: {
    maxWidth: 700,
    margin: "auto",
    background: "#fff",
    borderRadius: 16,
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  },
  title: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: 25,
    fontSize: 24,
  },
  form: {
    display: "grid",
    gap: 16,
  },
  row: {
    display: "flex",
    gap: 16,
  },
  col: {
    flex: 1,
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
    borderRadius: 8,
    border: "1px solid #ccc",
  },
  textarea: {
    borderRadius: 8,
    border: "1px solid #ccc",
    minHeight: 100,
  },
  button: {
    background: "#F97316",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
    fontWeight: 600,
  },
  secondaryBtn: {
    marginTop: 16,
    border: "1px solid #111827",
    background: "transparent",
    padding: 12,
    borderRadius: 8,
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: 10,
  },
  sectionLabel: {
    fontWeight: 700,
    color: "#F97316",
    marginTop: 20,
  },
  dropdown: {
    position: "absolute",
    width: "100%",
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: 6,
    maxHeight: 200,
    overflowY: "auto",
    zIndex: 10,
  },
  dropdownItem: {
    padding: 10,
    cursor: "pointer",
  },
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "#fff",
    padding: 30,
    borderRadius: 12,
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
  },
};
