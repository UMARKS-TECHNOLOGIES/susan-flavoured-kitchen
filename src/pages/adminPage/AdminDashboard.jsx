import AdminNavbar from '@/components/layout/AdminNavbar';
import React, { useState } from 'react';
import AdminSidebar from './components/AdminSidebar';
import AdminDashboardLayout from './components/AdminDashboardLayout';
import OrderManagement from './components/OrderManagement';
import MenuManagement from './components/MenuManagement';

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar activePage={activePage} setActivePage={setActivePage} />

      <div className="flex-1 ml-64 p-8">
        {activePage === 'dashboard' && <AdminDashboardLayout />}
        {activePage === 'orders' && <OrderManagement />}
        {activePage === 'menu' && <MenuManagement />}
        {activePage === 'catering' && (
          <div>
            <AdminNavbar title="Catering Requests" />
            <p className="text-gray-600">
              Catering Requests content coming soon...
            </p>
          </div>
        )}
        {activePage === 'settings' && (
          <div>
            <AdminNavbar title="Settings" />
            <p className="text-gray-600">Settings content coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
