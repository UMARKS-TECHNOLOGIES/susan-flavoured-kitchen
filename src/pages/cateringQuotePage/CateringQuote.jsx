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

  const [screen, setScreen] = useState({
    isMobile: window.innerWidth <= 600,
    isTablet: window.innerWidth > 600 && window.innerWidth <= 1024,
    isDesktop: window.innerWidth > 1024,
  });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setScreen({
        isMobile: w <= 600,
        isTablet: w > 600 && w <= 1024,
        isDesktop: w > 1024,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const close = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
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
          padding: screen.isMobile
            ? 16
            : screen.isTablet
            ? 24
            : 32,
          maxWidth: screen.isDesktop ? 820 : 720,
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
              flexDirection: screen.isMobile ? "column" : "row",
            }}
          >
            <div style={styles.col}>
              <label style={styles.label}>Event Type</label>
              <select
                name="eventType"
                onChange={handleChange}
                style={{
                  ...styles.input,
                  fontSize: screen.isMobile ? 16 : 15,
                  height: screen.isMobile ? 48 : 44,
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

            <div style={styles.col}>
              <label style={styles.label}>Event Date & Time</label>
              <Input
                icon={<FaCalendarAlt />}
                type="datetime-local"
                name="dateTime"
                onChange={handleChange}
                isMobile={screen.isMobile}
              />
            </div>
          </div>

          {/* Guests & Venue */}
          <div
            style={{
              ...styles.row,
              flexDirection: screen.isMobile ? "column" : "row",
            }}
          >
            <div style={styles.col}>
              <label style={styles.label}>Number of Guests</label>
              <Input
                icon={<FaUsers />}
                type="number"
                name="numberOfGuests"
                placeholder="eg 200"
                onChange={handleChange}
                isMobile={screen.isMobile}
              />
            </div>

            <div style={styles.col}>
              <label style={styles.label}>Event Venue</label>
              <Input
                icon={<FaMapMarkerAlt />}
                type="text"
                name="venue"
                placeholder="Event Venue"
                onChange={handleChange}
                isMobile={screen.isMobile}
              />
            </div>
          </div>

          {/* Notes */}
          <label style={styles.label}>Additional Notes</label>
          <textarea
            name="additionalNotes"
            placeholder="Any additional details about your event..."
            onChange={handleChange}
            style={{
              ...styles.textarea,
              fontSize: screen.isMobile ? 16 : 15,
            }}
          />

          {/* Preferred Dishes */}
          <label style={styles.label}>Preferred Dishes</label>
          <div ref={dropdownRef} style={{ position: "relative" }}>
            <input
              readOnly
              value={form.preferredDishes.join(", ")}
              onClick={() => setShowDropdown(!showDropdown)}
              placeholder="Click to select dishes"
              style={{
                ...styles.input,
                height: screen.isMobile ? 48 : 44,
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

          {/* Contact */}
          <h3 style={styles.sectionLabel}>Contact Information</h3>

          <div
            style={{
              ...styles.row,
              flexDirection: screen.isMobile ? "column" : "row",
            }}
          >
            <div style={styles.col}>
              <label style={styles.label}>Full Name</label>
              <Input
                icon={<FaUser />}
                name="name"
                placeholder="Your Full Name"
                onChange={handleChange}
                isMobile={screen.isMobile}
              />
            </div>

            <div style={styles.col}>
              <label style={styles.label}>Email</label>
              <Input
                icon={<FaEnvelope />}
                type="email"
                name="email"
                placeholder="Your Email Address"
                onChange={handleChange}
                isMobile={screen.isMobile}
              />
            </div>
          </div>

          <label style={styles.label}>Phone</label>
          <Input
            icon={<FaPhone />}
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            onChange={handleChange}
            isMobile={screen.isMobile}
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

const Input = ({ icon, isMobile, ...props }) => (
  <div style={styles.inputGroup}>
    <span style={styles.icon}>{icon}</span>
    <input
      {...props}
      required
      style={{
        ...styles.input,
        height: isMobile ? 48 : 44,
        fontSize: isMobile ? 16 : 15,
      }}
    />
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

const styles = {
  page: {
    background: "#f5f7fa",
    minHeight: "100vh",
    padding: 20,
  },
  card: {
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
    minWidth: 0,
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
    width: "100%",
    borderRadius: 8,
    border: "1px solid #ccc",
    padding: "0 12px",
  },
  textarea: {
    borderRadius: 8,
    border: "1px solid #ccc",
    minHeight: 100,
    padding: 12,
  },
  button: {
    background: "#F97316",
    color: "#fff",
    border: "none",
    borderRadius: 12,
    padding: 14,
    fontWeight: 600,
    cursor: "pointer",
    width: "100%",
  },
  secondaryBtn: {
    marginTop: 16,
    width: "100%",
    border: "1px solid #111827",
    background: "transparent",
    padding: 12,
    borderRadius: 10,
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
    borderRadius: 8,
    maxHeight: 220,
    overflowY: "auto",
    zIndex: 20,
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  dropdownItem: {
    padding: "12px 14px",
    cursor: "pointer",
  },
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    background: "#fff",
    padding: 24,
    borderRadius: 14,
    width: "90%",
    maxWidth: 420,
    textAlign: "center",
    position: "relative",
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
