// src/Components/Home/AdminLayout.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { FaCalendarDays } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RxExit, RxHamburgerMenu } from "react-icons/rx";
import { X } from "lucide-react";
import { LuHandshake } from "react-icons/lu";

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mainMenuItems = [
    { id: 'home', icon: IoMdHome, label: 'Bosh Sahifa', path: '/dashboard' },
    { id: 'market', icon: SlBasket, label: 'Asbob uskunalar bozori', path: '/asbobuskunalar' },
    { id: 'appointments', icon: FaCalendarDays, label: 'Qabullar', path: '/qabullar' },
    { id: 'dentists', icon: FaUserAlt, label: 'Stomatolog', path: '/zubtexnik' },
    { id: 'patients', icon: FaUserFriends, label: 'Bemorlar', path: '/bemorlar' },
    { id: 'shartnoma', icon: LuHandshake, label: 'Shartnoma', path: '/shartnoma' },
  ];

  const bottomMenuItems = [
    { id: 'settings', icon: IoSettingsOutline, label: 'Sozlamalar', path: '/settings' },
    { id: 'exit', icon: RxExit, label: 'Chiqish', path: '/chiqish' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const renderMenuItem = (item) => {
    const Icon = item.icon;
    const isActive = currentPath === item.path;

    return (
      <button
        key={item.id}
        onClick={() => handleNavigation(item.path)}
        className={`
          w-full h-[45px] flex items-center gap-3 px-6 rounded-[4px] transition-all
          ${isActive 
            ? 'bg-blue-50 text-blue-600 border-r-4 border-blue-500' 
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
          }
        `}
      >
        <Icon className={`text-[24px] ${isActive ? 'text-blue-600' : 'text-[#A3AED0]'}`} />
        <p className="font-medium text-sm">{item.label}</p>
      </button>
    );
  };

  return (
    <div className="flex min-h-screen bg-indigo-50/50">
      {/* Sidebar - chapda qotib turadi */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-[280px] bg-white shadow-lg transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          <div className="ml-[70px] mt-[40px] mb-10 hidden lg:block">
            <h1 className="text-[29px] text-[#2B3674] font-bold">Admin Panel</h1>
            <h3 className="text-[27px] text-[#2B3674] font-extralight mt-[-12px]">Zubtexnik</h3>
          </div>
          <div className="px-6 mt-20 mb-10 lg:hidden">
            <h1 className="text-2xl text-[#2B3674] font-bold">Admin Panel</h1>
            <h3 className="text-xl text-[#2B3674] font-extralight">Stomatolog</h3>
          </div>
          <nav className="flex-1 px-4 overflow-y-auto">
            {mainMenuItems.map(renderMenuItem)}
          </nav>
          <div className="mb-20 px-4">
            {bottomMenuItems.map(renderMenuItem)}
          </div>
        </div>
      </aside>

      {/* Mobil overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40" 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
      )}

      {/* Content - scroll bo'ladi */}
      <main className="flex-1 overflow-y-auto">
        {/* Mobil header */}
        <div className="lg:hidden fixed top-0 left-0 right-0 bg-white shadow-md z-40 flex items-center justify-between p-4">
          <h1 className="text-xl font-bold text-[#2B3674]">Admin Panel</h1>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={32} /> : <RxHamburgerMenu size={32} />}
          </button>
        </div>

        {/* Page content */}
        <div className="pt-16 lg:pt-0">
          <Outlet />
        </div>
      </main>
    </div>
  );
}