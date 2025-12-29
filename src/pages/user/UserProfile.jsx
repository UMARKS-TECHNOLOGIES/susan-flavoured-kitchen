import React, { useState } from 'react';
import { useAuth } from '../../store/useAuth';
import UserNavbar from './UserNavbar';
import { MdOutlineModeEdit } from "react-icons/md";
import Footer from '@/components/layout/Footer';

const UserProfile = () => {
  const { user } = useAuth();

  const [editableFields, setEditableFields] = useState({
    name: false,
    phone: false,
    email: false,
    address: false,
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    email: user?.email || '',
    address: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const toggleEdit = (field) => {
    setEditableFields((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log('Send this data to backend:', formData);
    setEditableFields({
      name: false,
      phone: false,
      email: false,
      address: false,
      currentPassword: false,
      newPassword: false,
      confirmPassword: false,
    });
  };

  return (
    <>
    <div className="max-w-4xl mx-auto p-6 bg-white-50 rounded-lg shadow-md">
      {/* Header */}
      <section className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="mb-4">
          <h1 className="text-3xl font-semibold text-gray-800">My Profile</h1>
          <p className="text-gray-600">Manage your personal information and delivery details</p>
        </div>
        <div>
          <UserNavbar />
        </div>
      </section>

      <hr className="my-6 border-gray-300" />

      {/* Personal Information */}
      <section className="mb-8 border border-black rounded-md px-4 sm:px-6 md:px-10 py-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-6">Personal Information</h2>
        <form className="space-y-4">
          {[
            { label: 'Full Name', name: 'name', type: 'text' },
            { label: 'Phone Number', name: 'phone', type: 'text' },
            { label: 'Email Address', name: 'email', type: 'email' },
          ].map((field) => (
            <div key={field.name} className=" relative flex flex-col ml-[82px] mt-[32px] items-start gap-3">
              <label className="w-36 font-bold text-gray-700">{field.label}:</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                readOnly={field.name === 'email' ? true : !editableFields[field.name]}
                onChange={handleChange}
                className={`w-full max-w-[596px] text-1xl font-medium h-15 sm-h-[56px] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  editableFields[field.name] ? 'border-blue-400' : 'border-gray-300 bg-gray-100'
                }`}
              />
              {field.name !== 'email' && !editableFields[field.name] && (
  <MdOutlineModeEdit
  onClick={() => toggleEdit(field.name)}
  className="
    absolute 
    top-1/2 
    -translate-y-1/2 
    right-2
    text-xl md:text-2xl  
    text-gray-500 
    hover:text-blue-500 
    cursor-pointer
    md:mr-[40px]  
  "
/>

)}
            </div>
          ))}
        </form>
      </section>

      {/* Delivery Address */}
      <section className="mb-8 border border-black rounded-md px-4 sm:px-6 md:px-10 py-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-6">Delivery Address</h2>
        <form className="space-y-4">
          <div className="flex items-center gap-3">
            <label className="w-36 text-gray-700 font-medium">Address Line:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              readOnly={!editableFields.address}
              onChange={handleChange}
              className={`flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                editableFields.address ? 'border-blue-400' : 'border-gray-300 bg-gray-100'
              }`}
            />
            {!editableFields.address && (
              <MdOutlineModeEdit
                onClick={() => toggleEdit('address')}
                className="text-gray-500 hover:text-blue-500 cursor-pointer"
              />
            )}
          </div>
        </form>
      </section>

      {/* Security */}
      <section className="mb-8 border border-black rounded-md px-4 sm:px-6 md:px-10 py-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-700 mb-6">Security</h2>
        <form className="space-y-4">
          {[
            { label: 'Current Password', name: 'currentPassword', type: 'password' },
            { label: 'New Password', name: 'newPassword', type: 'password' },
            { label: 'Confirm New Password', name: 'confirmPassword', type: 'password' },
          ].map((field) => (
            <div key={field.name} className="flex items-center gap-3">
              <label className="w-36 text-gray-700 font-medium">{field.label}:</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                readOnly={!editableFields[field.name]}
                onChange={handleChange}
                className={`flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  editableFields[field.name] ? 'border-blue-400' : 'border-gray-300 bg-gray-100'
                }`}
              />
              {!editableFields[field.name] && (
                <MdOutlineModeEdit
                  onClick={() => toggleEdit(field.name)}
                  className="text-gray-500 hover:text-blue-500 cursor-pointer"
                />
              )}
            </div>
          ))}
        </form>
      </section>

      {/* Save Button */}
      <div className="text-center">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-orange-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
        >
          Save Changes
        </button>
      </div>

    </div>
    <Footer />
    </>
  );
};

export default UserProfile;
