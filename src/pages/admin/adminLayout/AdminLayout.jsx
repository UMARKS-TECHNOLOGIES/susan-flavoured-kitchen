import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuth } from '@/store/useAuth';
import SideBar from './SideBar';
import Navbar from '@/components/layout/Navbar/Navbar';

export default function AdminLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-16">
      {/* 1. Global Navbar (Fixed top: 0, height 16) */}
      <Navbar />

      {/* 2. Mobile Mini-Dashboard Header - (Transparent bar with minimalist floating-style button) */}
      <div className="md:hidden sticky top-16 z-[70] bg-transparent px-4 py-3 flex justify-end items-center pointer-events-none">
        <button
          className="pointer-events-auto p-2.5 rounded-2xl bg-black/70 backdrop-blur-md text-white shadow-2xl active:scale-95 transition-all border border-white/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
        </button>
      </div>

      <div className="flex flex-1 relative overflow-hidden">
        <SideBar 
          logout={logout} 
          navigate={navigate} 
          isOpen={isOpen} 
          setIsOpen={setIsOpen} 
        />
        
        <main className="flex-1 w-full min-w-0 px-4 py-6 md:p-8 lg:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
