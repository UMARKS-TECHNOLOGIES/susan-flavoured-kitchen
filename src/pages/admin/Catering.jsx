import React, { useState, useEffect } from 'react';
import { FaSearch, FaTrash, FaTimesCircle, FaDollarSign } from 'react-icons/fa';

const API_BASE = "https://susanfalvoredkitchen-backend-oz62.onrender.com/api/v1/catering";

export default function Catering() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Fetch all requests
  const fetchRequests = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_BASE}/admin/catering/requests`);
      const json = await res.json();

      if (!res.ok) throw new Error(json.message || 'Failed to fetch requests');

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
  const handleDelete = async id => {
    if (!window.confirm('Are you sure you want to delete this request?'))
      return;

    try {
      const res = await fetch(`${API_BASE}/admin/catering/requests/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to delete request');

      setRequests(prev => prev.filter(r => r._id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Catering Requests</h2>

      {loading && <p>Loading requests...</p>}
      {error && <p style={styles.error}>{error}</p>}
      {!loading && requests.length === 0 && <p>No requests found.</p>}

      {Array.isArray(requests) && requests.length > 0 && (
        <div style={styles.table}>
          {/* Table Header */}
          <div style={styles.tableHeader}>
            <span>Event</span>
            <span>Date</span>
            <span>Guests</span>
            <span>Status</span>
            <span>Actions</span>
          </div>

          {/* Table Rows */}
          {requests.map(req => (
            <div
              key={req._id}
              style={styles.tableRow}
              onClick={() => setSelectedRequest(req)}
            >
              <span>{req.eventType}</span>
              <span>{new Date(req.dateTime).toLocaleString()}</span>
              <span>{req.numberOfGuests}</span>
              <span style={{ textTransform: 'capitalize' }}>{req.status}</span>
              <span style={styles.actions}>
                <button
                  style={styles.actionBtn}
                  onClick={e => {
                    e.stopPropagation();
                    handleDelete(req._id);
                  }}
                  title="Delete Request"
                >
                  <FaTrash color="red" />
                </button>
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Modal for selected request */}
      {selectedRequest && (
        <Modal onClose={() => setSelectedRequest(null)}>
          <h3>{selectedRequest.eventType} - Details</h3>
          <p>
            <strong>Date & Time:</strong>{' '}
            {new Date(selectedRequest.dateTime).toLocaleString()}
          </p>
          <p>
            <strong>Guests:</strong> {selectedRequest.numberOfGuests}
          </p>
          <p>
            <strong>Venue:</strong> {selectedRequest.venue}
          </p>
          <p>
            <strong>Contact:</strong> {selectedRequest.name} |{' '}
            {selectedRequest.email} | {selectedRequest.phone}
          </p>
          <p>
            <strong>Additional Notes:</strong>{' '}
            {selectedRequest.additionalNotes || 'N/A'}
          </p>
          <p>
            <strong>Preferred Dishes:</strong>{' '}
            {Array.isArray(selectedRequest.preferredDishes)
              ? selectedRequest.preferredDishes.join(', ')
              : selectedRequest.preferredDishes || 'N/A'}
          </p>
          <p>
            <strong>Status:</strong>{' '}
            <span style={{ textTransform: 'capitalize' }}>
              {selectedRequest.status}
            </span>
          </p>

          {/* Quote */}
          {selectedRequest.quote && selectedRequest.quote.items?.length > 0 && (
            <div style={styles.quote}>
              <h4>
                <FaDollarSign /> Quote
              </h4>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th>Dish</th>
                    <th>Qty</th>
                    <th>Unit Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedRequest.quote.items.map((item, idx) => (
                    <tr key={idx}>
                      <td>{item.name}</td>
                      <td>{item.qty}</td>
                      <td>£{item.unitPrice.toLocaleString()}</td>
                      <td>£{(item.unitPrice * item.qty).toLocaleString()}</td>
                    </tr>
                  ))}
                  <tr>
                    <td
                      colSpan={3}
                      style={{ textAlign: 'right', fontWeight: 'bold' }}
                    >
                      Total:
                    </td>
                    <td style={{ fontWeight: 'bold' }}>
                      £{selectedRequest.quote.total?.toLocaleString() || 0}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
}

const Modal = ({ children, onClose }) => (
  <div style={styles.overlay}>
    <div style={styles.modal}>
      <button style={styles.closeBtn} onClick={onClose}>
        <FaTimesCircle size={20} />
      </button>
      {children}
    </div>
  </div>
);

/* ================= STYLES ================= */
const styles = {
  page: { padding: 30, fontFamily: 'sans-serif' },
  title: { fontSize: 24, marginBottom: 20 },
  error: { color: 'red' },
  table: { display: 'grid', border: '1px solid #ddd', borderRadius: 8 },
  tableHeader: {
    display: 'grid',
    gridTemplateColumns: '2fr 2fr 1fr 1fr 1fr',
    padding: 10,
    background: '#f0f0f0',
    fontWeight: 'bold',
    borderBottom: '1px solid #ddd',
  },
  tableRow: {
    display: 'grid',
    gridTemplateColumns: '2fr 2fr 1fr 1fr 1fr',
    padding: 10,
    borderBottom: '1px solid #eee',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
  actions: { display: 'flex', justifyContent: 'center', gap: 5 },
  actionBtn: { background: 'transparent', border: 'none', cursor: 'pointer' },
  overlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    background: '#fff',
    padding: 30,
    borderRadius: 12,
    width: '80%',
    maxWidth: 700,
    position: 'relative',
    maxHeight: '90vh',
    overflowY: 'auto',
  },
  closeBtn: {
    position: 'absolute',
    top: 15,
    right: 15,
    border: 'none',
    cursor: 'pointer',
  },
  quote: { marginTop: 20 },
};
