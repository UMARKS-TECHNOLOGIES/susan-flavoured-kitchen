import AdminNavbar from '@/components/layout/AdminNavbar';
import React, { useState } from 'react'
import AdminSidebar from './components/AdminSidebar';
import AdminDashboardLayout from './components/AdminDashboardLayout';
import OrderManagement from './components/OrderManagement';

const AdminDashboard = () => {
    const [activePage, setActivePage] = useState('dashboard');

  return (
      <div className="flex min-h-screen bg-gray-50">
          <AdminSidebar activePage={activePage} setActivePage={setActivePage} />

          <div className="flex-1 ml-64 p-8">
              {activePage === 'dashboard' && <AdminDashboardLayout />}
              {activePage === 'orders' && <OrderManagement />}
              {activePage === 'menu' && (
                  <div>
                      <AdminNavbar title="Menu Management" />
                      <p className="text-gray-600">Menu Management content coming soon...</p>
                  </div>
              )}
              {activePage === 'catering' && (
                  <div>
                      <AdminNavbar title="Catering Requests" />
                      <p className="text-gray-600">Catering Requests content coming soon...</p>
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
  )
}

export default AdminDashboard