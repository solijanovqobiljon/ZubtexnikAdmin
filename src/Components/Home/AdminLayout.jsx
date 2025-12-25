import React, { useState } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
// FaUserAlt va FaUserFriends o'rniga FaUser va FaUsers ishlatamiz
import { FaCalendarDays, FaUser, FaUsers } from "react-icons/fa6"; 
import { RxHamburgerMenu } from "react-icons/rx";
import { X, Handshake } from "lucide-react"; // LuHandshake o'rniga Handshake

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mainMenuItems = [
    { id: 'home', icon: IoMdHome, label: 'Bosh Sahifa', path: '/dashboard' },
    { id: 'market', icon: SlBasket, label: 'Asbob uskunalar bozori', path: '/asbobuskunalar' },
    { id: 'appointments', icon: FaCalendarDays, label: 'Qabullar', path: '/qabullar' },
    { id: 'dentists', icon: FaUser, label: 'Stomatolog', path: '/zubtexnik' },
    { id: 'patients', icon: FaUsers, label: 'Bemorlar', path: '/bemorlar' },
    { id: 'shartnoma', icon: Handshake, label: 'Shartnoma', path: '/shartnoma' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex h-screen bg-[#F4F7FE] overflow-hidden font-sans text-[#2B3674]">
      {/* SIDEBAR */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-[285px] bg-white shadow-xl transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          <div className="p-8 flex justify-between items-center border-b border-gray-50">
            <div>
              <h1 className="text-[26px] font-bold uppercase tracking-tight">Admin Panel</h1>
              <p className="text-[20px] text-[#A3AED0] font-medium">Zubtexnik</p>
            </div>
            <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {mainMenuItems.map((item) => {
              const isActive = currentPath === item.path;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                    isActive 
                      ? 'bg-[#4318FF] text-white shadow-lg shadow-indigo-100' 
                      : 'text-[#A3AED0] hover:bg-gray-50 hover:text-[#2B3674]'
                  }`}
                >
                  <Icon size={22} />
                  <span className="font-semibold">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* TOP NAVBAR */}
        <header className="flex items-center justify-between p-4 lg:p-6 bg-transparent">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 bg-white rounded-lg shadow-md" onClick={() => setIsMobileMenuOpen(true)}>
              <RxHamburgerMenu size={24} />
            </button>
            <div className="hidden lg:block">
               <h2 className="text-[#707EAE] text-sm font-medium">Pages / Dashboard</h2>
               <h1 className="text-3xl font-bold capitalize">Main Dashboard</h1>
            </div>
          </div>

          <div className="flex items-center bg-white rounded-full shadow-sm p-2 gap-3 border border-gray-50">
            <div className="flex items-center bg-[#F4F7FE] rounded-full px-4 py-2 flex-1 min-w-[150px] md:min-w-[200px]">
              <svg className="w-4 h-4 text-[#2B3674]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.65 11a5.65 5.65 0 11-11.3 0 5.65 5.65 0 0111.3 0z" />
              </svg>
              <input type="text" placeholder="Search..." className="bg-transparent outline-none text-sm px-2 w-full placeholder-[#8F9BBA]" />
            </div>
            <img 
              src="https://i.pravatar.cc/100?img=12" 
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm" 
              alt="avatar" 
            />
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-8 pt-2">
          <Outlet />
        </div>
      </main>
    </div>
  );
}