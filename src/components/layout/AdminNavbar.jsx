import { Bell, User } from 'lucide-react'
import React from 'react'
import Logo from '../../assets/Logo.jpeg'

const AdminNavbar = ({ title }) => {
    return (
        <div className="bg-[#fffcfa] fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto w-[95%] lg:w-[85%] py-4">
                {/* Desktop view */}
                <div className="hidden lg:flex justify-between items-center">
                    <img src={Logo} alt="Logo" className="w-13" />
                    <div className="flex items-center gap-8">
                        <button className="p-2 bg-gray-100 rounded-full">
                            <User className="w-5 h-5 text-gray-400" />
                        </button>
                        <span className="text-sm text-gray-600">30/03/2025</span>
                        <button className="p-2 hover:bg-gray-100 rounded-full">
                            <Bell className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar