import React from 'react'

const AdminSidebar = ({activePage, setActivePage}) => {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard' },
        { id: 'orders', label: 'Order Management' },
        { id: 'menu', label: 'Menu Management' },
        { id: 'catering', label: 'Catering Requests' },
        { id: 'settings', label: 'Settings' }
    ];
  return (
      <div className="w-64 bg-orange-500 min-h-screen p-6 fixed left-0 top-0">
          {/* Logo */}
          {/* <div className="mb-12">
              <img
                  src="/api/placeholder/120/50"
                  alt="Logo"
                  className="h-10"
              />
          </div> */}

          {/* Menu Items */}
          <nav className="space-y-2 mt-20">
              {menuItems.map((item) => (
                  <button
                      key={item.id}
                      onClick={() => setActivePage(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${activePage === item.id
                              ? 'bg-white text-orange-500 font-semibold'
                              : 'text-white hover:bg-orange-400'
                          }`}
                  >
                      {item.label}
                  </button>
              ))}
          </nav>
      </div>
  )
}

export default AdminSidebar