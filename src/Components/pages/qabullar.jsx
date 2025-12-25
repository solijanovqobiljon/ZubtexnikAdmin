// src/Components/pages/Qabullar.jsx
import React from 'react';
import { Search, Bell, Edit2, Trash2 } from 'lucide-react';

export default function Qabullar() {
  const appointments = [
    {
      id: 1,
      initials: "KN",
      name: "Karimova Nodira",
      doctor: "Stomatolog: Dr. Aliyev Jamshid",
      service: "Profilaktika",
      date: "24-Yan.2025",
      time: "09:10",
      status: "Rejalashtirilgan",
      note: "",
    },
    {
      id: 2,
      initials: "TS",
      name: "Toshmatov Sardor",
      doctor: "Stomatolog: Dr. Karimova Malika",
      service: "Ortodontiya",
      date: "22-Dek.2025",
      time: "09:30",
      status: "Yakunlandi",
      note: "",
    },
    {
      id: 3,
      initials: "AD",
      name: "Abdullayeva Dinoza",
      doctor: "Stomatolog: Dr. Rustamov Abbos",
      service: "Jarrohlik",
      date: "11-Sen.2025",
      time: "09:40",
      status: "Kelmadi",
      note: "Bemor kelmadi",
    },
    {
      id: 4,
      initials: "RJ",
      name: "Rahimov Jasur",
      doctor: "Stomatolog: Dr. Aliyev Jamshid",
      service: "Davolash",
      date: "10-Sen.2025",
      time: "10:35",
      status: "Yakunlandi",
      note: "",
    },
    {
      id: 5,
      initials: "NM",
      name: "Nazarova Madina",
      doctor: "Stomatolog: Dr. Nazarova Dinoza",
      service: "Konsultatsiya",
      date: "2-Avg.2025",
      time: "13:00",
      status: "Bekor qilindi",
      note: "Bemor bekor qildi",
    },
    {
      id: 6,
      initials: "YO",
      name: "Yusupov Otabek",
      doctor: "Stomatolog: Dr. Karimova Malika",
      service: "Profilaktika",
      date: "1-Avg.2025",
      time: "14:00",
      status: "Rejalashtirilgan",
      note: "",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Rejalashtirilgan":
        return "text-blue-700";
      case "Yakunlandi":
        return "text-green-700";
      case "Kelmadi":
        return "text-yellow-700";
      case "Bekor qilindi":
        return "text-gray-700";
      default:
        return "text-gray-700";
    }
  };

  return (
    <div className="bg-indigo-50/50 min-h-screen p-4 lg:p-8">
      {/* Header */}
      <header className="bg-white rounded-2xl shadow-sm mb-6 sticky top-0 z-40 lg:relative lg:top-auto">
        <div className="px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Tizim statistikasi va umumiy ma'lumotlar</p>
            <h2 className="text-3xl font-bold text-gray-800">Qabullar</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Qidirish"
                className="pl-10 pr-4 py-2 w-64 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
            <div className="w-10 h-10 rounded-full overflow-hidden ring-4 ring-indigo-100">
              <img src="https://placehold.co/40x40" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* Statistika kartalari */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <p className="text-sm text-gray-500 mb-1">Bugun</p>
          <p className="text-4xl font-bold text-gray-800">89</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <p className="text-sm text-gray-500 mb-1">Rejalashtirilgan</p>
          <p className="text-4xl font-bold text-gray-800">35</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <p className="text-sm text-gray-500 mb-1">Yakunlangan</p>
          <p className="text-4xl font-bold text-gray-800">34</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <p className="text-sm text-gray-500 mb-1">Bekor qilingan</p>
          <p className="text-4xl font-bold text-gray-800">6</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <p className="text-sm text-gray-500 mb-1">Kelmagan</p>
          <p className="text-4xl font-bold text-gray-800">4</p>
        </div>
      </div>

      {/* Bildirishnomalar jadvali */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-800">Bildirishnomalar</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600">Ism familiya</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600">Xizmat turi</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600">Sana</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600">Vaqt</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600">Holat</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600">Izoh</th>
                <th className="px-6 py-4 text-right text-xs font-medium text-gray-600"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {appointments.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-medium">
                        {item.initials}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.doctor}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.service}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.time}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={getStatusColor(item.status)}>{item.status}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.note}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-800">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}