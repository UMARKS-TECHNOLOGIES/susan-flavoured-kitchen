import React, { useEffect, useState } from "react";
import axios from "axios";
import { Eye, Check, Trash2, X } from "lucide-react";

const Message = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [total, setTotal] = useState(0);

  const API_URL = "https://susanfalvoredkitchen-backend-23c5.onrender.com/api/v1/contact";

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}?page=${page}&limit=${limit}`);
      const msgArray = Array.isArray(res.data?.data?.messages)
        ? res.data.data.messages
        : [];
      setMessages(msgArray);
      setTotal(res.data?.data?.total || 0);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch messages");
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [page]);

  const handleView = async (id) => {
    try {
      const res = await axios.get(`${API_URL}/message/${id}`);
      const msgObj = res.data?.data || res.data?.message || null;
      setSelectedMessage(msgObj);
      setModalOpen(true);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch message details");
      setSelectedMessage(null);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    try {
      await axios.delete(`${API_URL}/message/${id}`);
      setMessages((prev) => prev.filter((msg) => msg._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete message");
    }
  };

  const handleMarkAsRead = async (id) => {
    try {
      await axios.patch(`${API_URL}/message/${id}/read`);
      setMessages((prev) =>
        prev.map((msg) => (msg._id === id ? { ...msg, read: true } : msg))
      );
    } catch (err) {
      console.error(err);
      alert("Failed to mark as read");
    }
  };

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="w-full">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">Messages</h1>

      {loading ? (
        <p>Loading...</p>
      ) : messages.length > 0 ? (
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full border-collapse border border-gray-300 text-sm sm:text-base">
            <thead className="bg-gray-100 sticky top-0 z-10">
              <tr>
                <th className="border px-3 sm:px-4 py-2 text-left">Name</th>
                <th className="border px-3 sm:px-4 py-2 text-left">Email</th>
                <th className="border px-3 sm:px-4 py-2 text-left">Read</th>
                <th className="border px-3 sm:px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg._id} className="hover:bg-gray-50">
                  <td className="border px-3 sm:px-4 py-2">{msg.fullName || msg.name}</td>
                  <td className="border px-3 sm:px-4 py-2 break-words">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&to=${msg.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      {msg.email}
                    </a>
                  </td>
                  <td className="border px-3 sm:px-4 py-2">{msg.read ? "Yes" : "No"}</td>
                  <td className="border px-3 sm:px-4 py-2 flex space-x-2">
                    <button
                      onClick={() => handleView(msg._id)}
                      className="p-2 sm:p-3 bg-blue-500 text-white rounded hover:bg-blue-600"
                      title="View"
                    >
                      <Eye size={16} />
                    </button>
                    {!msg.read && (
                      <button
                        onClick={() => handleMarkAsRead(msg._id)}
                        className="p-2 sm:p-3 bg-green-500 text-white rounded hover:bg-green-600"
                        title="Mark as Read"
                      >
                        <Check size={16} />
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(msg._id)}
                      className="p-2 sm:p-3 bg-red-500 text-white rounded hover:bg-red-600"
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No messages found</p>
      )}

      {/* Pagination */}
      <div className="mt-4 flex flex-wrap items-center space-x-2 sm:space-x-4">
        {page > 1 && (
          <button
            className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        )}
        <span className="ml-2 sm:ml-4">
          Page {page} of {totalPages}
        </span>
      </div>

      {/* Custom Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
          <div className="bg-white p-6 rounded-lg max-w-full sm:max-w-lg w-full relative shadow-lg">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setModalOpen(false)}
              title="Close"
            >
              <X size={20} />
            </button>
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Message Details</h2>
            {selectedMessage ? (
              <div className="space-y-2 text-sm sm:text-base break-words">
                <p><strong>Name:</strong> {selectedMessage.fullName}</p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`https://mail.google.com/mail/?view=cm&to=${selectedMessage.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline break-words"
                  >
                    {selectedMessage.email}
                  </a>
                </p>
                <p><strong>Message:</strong> {selectedMessage.message}</p>
                <p><strong>Read:</strong> {selectedMessage.read ? "Yes" : "No"}</p>
                <p><strong>Created At:</strong> {new Date(selectedMessage.createdAt).toLocaleString()}</p>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;
