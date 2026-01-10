import React, { useEffect, useMemo, useState } from 'react';
import { useAuth } from '../../../store/useAuth';
import { MdOutlineModeEdit } from 'react-icons/md';
import Footer from '@/components/layout/Footer';
import api from '@/lib/api';
import { API } from '@/lib/endpoints';
import Modal from '../modals/Modal';
import UserAccountCreated from './UserAccountCreated';

const InputField = ({
  label,
  name,
  value,
  editable,
  onEdit,
  onChange,
  type = 'text',
  readOnly,
  error,
  hideEditIcon = false,
}) => (
  <div className="flex flex-col gap-2 mt-6 sm:ml-[82px] ml-0">
    <label className="font-bold text-gray-700">{label}:</label>

    <div className="relative w-full max-w-[596px]">
      <input
        type={type}
        name={name}
        value={value || ''}
        readOnly={readOnly || !editable}
        onChange={onChange}
        className={`w-full p-2 pr-10 border rounded-md
          ${editable ? 'border-blue-400' : 'border-gray-300 bg-gray-100'}
          ${error ? 'border-red-500' : ''}
        `}
      />

      {!hideEditIcon && !readOnly && !editable && (
        <button
          type="button"
          onClick={() => onEdit(name)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-xl text-gray-600 hover:text-orange-600"
        >
          <MdOutlineModeEdit />
        </button>
      )}
    </div>

    {error && <p className="text-sm text-red-500">{error}</p>}
  </div>
);

const Section = ({ title, children }) => (
  <section className="mb-8 border rounded-md px-6 py-6">
    <h2 className="text-xl font-bold mb-6">{title}</h2>
    {children}
  </section>
);

const AccountSettings = () => {
  const { user, setUser } = useAuth();

  const [modal, setModal] = useState({ visible: false, type: '', message: '' });
  const [errors, setErrors] = useState({});

  const [editableFields, setEditableFields] = useState({
    name: false,
    phone: false,
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });


  const defaultAddress = useMemo(
    () => user?.addresses?.find(a => a.isDefault),
    [user]
  );

  useEffect(() => {
    if (!user) return;

    setFormData(prev => ({
      ...prev,
      name: user.name || '',
      phone: user.phone || '',
      email: user.email || '',
      address: defaultAddress
        ? `${defaultAddress.street}, ${defaultAddress.city}, ${defaultAddress.state}`
        : '',
    }));
  }, [user, defaultAddress]);


  const toggleEdit = field =>
    setEditableFields(prev => ({ ...prev, [field]: true }));

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: null }));
  };

  const hasProfileChanges = useMemo(
    () => ['name', 'phone'].some(f => editableFields[f]),
    [editableFields]
  );

  const hasPasswordChanges = useMemo(
    () =>
      ['currentPassword', 'newPassword', 'confirmPassword'].some(
        f => editableFields[f]
      ),
    [editableFields]
  );

  const saveProfile = async () => {
    try {
      const payload = {};
      if (editableFields.name) payload.name = formData.name;
      if (editableFields.phone) payload.phone = formData.phone;

      const res = await api.put(`${API.AUTH}/profile`, payload);

      setUser({
        ...user,
        ...(res?.data?.data || payload),
      });

      setModal({
        visible: true,
        type: 'success',
        message: res?.data?.message || 'Profile updated successfully',
      });

      setEditableFields(prev => ({ ...prev, name: false, phone: false }));
    } catch (err) {
      setModal({
        visible: true,
        type: 'error',
        message:
          err?.response?.data?.message ||
          err?.message ||
          'Failed to update profile',
      });
    }
  };

  const changePassword = async () => {
    if (formData.newPassword !== formData.confirmPassword) {
      setErrors({ confirmPassword: 'Passwords do not match' });
      return;
    }

    try {
      await api.put(`${API.AUTH}/change-password`, {
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword,
      });

      setModal({
        visible: true,
        type: 'success',
        message: 'Password changed successfully',
      });

      setFormData(prev => ({
        ...prev,
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      }));

      setEditableFields(prev => ({
        ...prev,
        currentPassword: false,
        newPassword: false,
        confirmPassword: false,
      }));
    } catch (err) {
      setModal({
        visible: true,
        type: 'error',
        message: err?.response?.data?.message || 'Failed to change password',
      });
    }
  };


  useEffect(() => {
    if (!modal.visible) return;
    const timer = setTimeout(
      () => setModal(m => ({ ...m, visible: false })),
      2000
    );
    return () => clearTimeout(timer);
  }, [modal.visible]);


  if (!user) return null;

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <section className="mb-6">
          <h1 className="text-3xl font-semibold">My Profile</h1>
          <p className="text-gray-600">Manage your account</p>
        </section>

        <Section title="Personal Information">
          {[
            { label: 'Full Name', name: 'name' },
            { label: 'Phone Number', name: 'phone' },
            { label: 'Email Address', name: 'email', readOnly: true },
          ].map(f => (
            <InputField
              key={f.name}
              {...f}
              value={formData[f.name]}
              editable={editableFields[f.name]}
              onEdit={toggleEdit}
              onChange={handleChange}
              readOnly={f.readOnly}
              error={errors[f.name]}
            />
          ))}
        </Section>

        <Section title="Default Address">
          <InputField
            label="Address"
            name="address"
            value={formData.address || 'No default address set'}
            editable={false}
            readOnly
            hideEditIcon
          />
        </Section>

        <Section title="Security">
          {[
            { label: 'Current Password', name: 'currentPassword', type: 'password' },
            { label: 'New Password', name: 'newPassword', type: 'password' },
            { label: 'Confirm New Password', name: 'confirmPassword', type: 'password' },
          ].map(f => (
            <InputField
              key={f.name}
              {...f}
              value={formData[f.name]}
              editable={editableFields[f.name]}
              onEdit={toggleEdit}
              onChange={handleChange}
              error={errors[f.name]}
            />
          ))}
        </Section>

        <div className="flex justify-center gap-6">
          <button
            disabled={!hasProfileChanges}
            onClick={saveProfile}
            className="px-6 py-2 bg-orange-600 text-white rounded disabled:bg-gray-400"
          >
            Save Profile
          </button>

          <button
            disabled={!hasPasswordChanges}
            onClick={changePassword}
            className="px-6 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
          >
            Change Password
          </button>
        </div>
      </div>

      <UserAccountCreated user={user} />
      <Footer />

      {modal.visible && (
        <Modal
          type={modal.type}
          message={modal.message}
          onClose={() => setModal(m => ({ ...m, visible: false }))}
        />
      )}
    </>
  );
};

export default AccountSettings;
