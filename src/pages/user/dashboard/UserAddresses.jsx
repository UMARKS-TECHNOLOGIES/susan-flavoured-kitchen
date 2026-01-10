import React, { useState, useEffect } from "react";
import api from "@/lib/api";
import { API } from "@/lib/endpoints";
import { Button } from "@/components/ui/button";
import Modal from "../modals/Modal";
import { useAuth } from "@/store/useAuth";
// import UserNavbar from "./UserNavbar";
import { MdEdit, MdDelete, MdStarBorder, MdStar } from "react-icons/md";

const AddressForm = ({ address, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    label: address?.label || "",
    street: address?.street || "",
    city: address?.city || "",
    state: address?.state || "",
    postalCode: address?.postalCode || "",
    phone: address?.phone || "",
    isDefault: address?.isDefault || false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md space-y-2">
      {["label", "street", "city", "state", "postalCode", "phone"].map((field) => (
        <div key={field}>
          <label className="block text-sm font-semibold capitalize">{field}</label>
          <input
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            className="w-full p-2 border rounded-md border-gray-300"
            required={field !== "phone"}
          />
        </div>
      ))}

      <div className="flex items-center space-x-2">
        <input type="checkbox" name="isDefault" checked={formData.isDefault} onChange={handleChange} />
        <label className="text-sm font-medium">Set as default</label>
      </div>

      <div className="flex gap-3 mt-2">
        <Button type="submit">Save</Button>
        <Button type="button" onClick={onCancel} className="bg-gray-300">
          Cancel
        </Button>
      </div>
    </form>
  );
};

const UserAddresses = () => {
  const { user, setUser } = useAuth();
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingAddress, setEditingAddress] = useState(null);
  const [modal, setModal] = useState({ visible: false, message: "", type: "" });

  const fetchAddresses = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const { data } = await api.get(API.ADDRESSES);
      setAddresses(data?.data || data || []);
    } catch (err) {
      console.error(err);
      setModal({
        visible: true,
        type: "error",
        message: err.response?.data?.message || "Failed to fetch addresses",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, [user]);

  const handleAddOrUpdate = async (formData) => {
    try {
      let updatedAddresses;

      if (editingAddress?._id) {
        const { data } = await api.put(API.EDIT_ADDRESS(editingAddress._id), formData);
        updatedAddresses = data?.data || data;
        setModal({ visible: true, type: "success", message: "Address updated successfully!" });
      } else {
        const { data } = await api.post(API.ADDRESSES, formData);
        updatedAddresses = data?.data || data;
        setModal({ visible: true, type: "success", message: "Address added successfully!" });
      }

      setAddresses(updatedAddresses);
      setUser({ ...user, addresses: updatedAddresses });
      setEditingAddress(null);
    } catch (err) {
      console.error(err);
      setModal({
        visible: true,
        type: "error",
        message: err.response?.data?.message || "Failed to save address",
      });
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this address?")) return;
    try {
      const { data } = await api.delete(API.DELETE_ADDRESS(id));
      const updatedAddresses = data?.data || data;
      setAddresses(updatedAddresses);
      setUser({ ...user, addresses: updatedAddresses });
      setModal({ visible: true, type: "success", message: "Address deleted successfully!" });
    } catch (err) {
      console.error(err);
      setModal({
        visible: true,
        type: "error",
        message: err.response?.data?.message || "Failed to delete address",
      });
    }
  };

  const handleSetDefault = async (id) => {
    try {
      const { data } = await api.patch(API.SET_DEFAULT(id));
      const updatedAddresses = data?.data || data;
      setAddresses(updatedAddresses);
      setUser({ ...user, addresses: updatedAddresses });
      setModal({ visible: true, type: "success", message: "Default address set successfully!" });
    } catch (err) {
      console.error(err);
      setModal({
        visible: true,
        type: "error",
        message: err.response?.data?.message || "Failed to set default address",
      });
    }
  };

  if (!user) return <p>Please log in to see your addresses.</p>;

  return (
    <section className="max-w-3xl mx-auto mt-10 space-y-6">
    <section className="flex justify-between mb-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">My Addresses</h1>
      <p className="text-gray-600">Manage your saved addresses</p>
      </div>
      {/* <UserNavbar /> */}
    </section>
      {/* <h2 className="text-xl font-semibold text-gray-800">My Addresses</h2> */}

      {modal.visible && (
        <Modal
          type={modal.type}
          message={modal.message}
          onClose={() => setModal((m) => ({ ...m, visible: false }))}
        />
      )}

      {!editingAddress && <Button onClick={() => setEditingAddress({})}>Add New Address</Button>}

      {editingAddress && (
        <AddressForm
          address={editingAddress}
          onSubmit={handleAddOrUpdate}
          onCancel={() => setEditingAddress(null)}
        />
      )}

      {loading ? (
        <p>Loading addresses...</p>
      ) : (
        <div className="space-y-4">
          {addresses.map((addr) => (
            <div
  key={addr._id}
  className="bg-white p-4 rounded-md shadow flex flex-col gap-4 md:flex-row md:justify-between md:items-center"
>
  {/* Address Info */}
  <div>
    <p className="font-semibold text-gray-800 flex items-center gap-2">
      {addr.label}
      {addr.isDefault && (
        <span className="text-sm text-green-600">(Default)</span>
      )}
    </p>

    <p className="text-gray-600">
      {addr.street}, {addr.city}, {addr.state}, {addr.postalCode}
    </p>

    {addr.phone && (
      <p className="text-gray-600 text-sm">Phone: {addr.phone}</p>
    )}
  </div>

  <div className="flex justify-end gap-4 md:gap-3">
    {!addr.isDefault && (
      <button
        onClick={() => handleSetDefault(addr._id)}
        title="Set as default"
        className="p-2 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition cursor-pointer"
      >
        <MdStarBorder size={22} />
      </button>
    )}

    {/* Default  (non-clickable) */}
    {addr.isDefault && (
      <span
        title="Default address"
        className="p-2 rounded-full bg-green-100 text-green-600"
      >
        <MdStar size={22} />
      </span>
    )}

    {/* Edit */}
    <button
      onClick={() => setEditingAddress(addr)}
      title="Edit address"
      className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition cursor-pointer"
    >
      <MdEdit size={22} />
    </button>

    {/* Delete */}
    <button
      onClick={() => handleDelete(addr._id)}
      title="Delete address"
      className="p-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition cursor-pointer"
    >
      <MdDelete size={22} />
    </button>
  </div>
</div>
          ))}
        </div>
      )}
    </section>
  );
};

export default UserAddresses;