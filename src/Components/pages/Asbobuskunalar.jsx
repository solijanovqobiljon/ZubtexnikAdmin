// src/Components/pages/Asbobuskunalar.jsx
import React from 'react';
import { Search, Bell, Eye, Edit2, Trash2, CheckCircle, XCircle } from 'lucide-react';

export default function Asbobuskunalar() {
  const notifications = [
    {
      id: 1,
      title: "Stomatologik kreslo Premium 2024",
      company: "DentalSupply LLC",
      type: "Kreslo",
      price: "45 000 UZS",
      status: "Yangi",
      views: 2122,
      holat: "Faol",
      date: "24-Yan.2025",
    },
    {
      id: 2,
      title: "Rentgen apparati Panoramik",
      company: "MedTech Solutions",
      type: "Rentgen",
      price: "550 000 UZS",
      status: "Ishlagan",
      views: 1100,
      holat: "Faol",
      date: "22-Dek.2025",
    },
    {
      id: 3,
      title: "Ultratovushli tozalagich",
      company: "Dr. Aliyev Jamshid",
      type: "Asboblar",
      price: "220 000 UZS",
      status: "Ishlagan",
      views: 500,
      holat: "Faol",
      date: "11-Sen.2025",
    },
    {
      id: 4,
      title: "Avtoklav sterilizatorlari",
      company: "Health Equip Uz",
      type: "Sterilizatsiya",
      price: "92 000 UZS",
      status: "Yangi",
      views: 455,
      holat: "Kutilmoqda",
      date: "10-Sen.2025",
    },
    {
      id: 5,
      title: "LED operatsion chiroq",
      company: "LightMed Pro",
      type: "Yoritish",
      price: "135 000 UZS",
      status: "Yangi",
      views: 420,
      holat: "Nofaol",
      date: "2-Avg.2025",
    },
    {
      id: 6,
      title: "Kompressor havo nasosi",
      company: "Dr. Karimova Malika",
      type: "Uskunalar",
      price: "155 000 UZS",
      status: "Ishlagan",
      views: 120,
      holat: "Faol",
      date: "1-Avg.2025",
    },
  ];

  const getStatusColor = (holat) => {
    if (holat === "Faol") return "text-green-700 bg-green-100";
    if (holat === "Kutilmoqda") return "text-yellow-700 bg-yellow-100";
    if (holat === "Nofaol") return "text-red-700 bg-red-100";
    return "text-gray-700 bg-gray-100";
  };

  return (
    <div className="bg-indigo-50/50 min-h-screen p-4 lg:p-8">
      {/* Header */}
      <header className="bg-white rounded-2xl shadow-sm mb-6 sticky top-0 z-40 lg:relative lg:top-auto">
        <div className="px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Tizim statistikasi va umumiy ma'lumotlar</p>
            <h2 className="text-3xl font-bold text-gray-800">Asbob uskunalar bozori</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Qidiruv..."
                className="pl-10 pr-4 py-2 w-64 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full ring-4 ring-indigo-100"></div>
          </div>
        </div>
      </header>

      {/* Statistika kartalari (bosh sahifa bilan bir xil) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <p className="text-sm text-gray-500 mb-1">Jami mahsulotlar</p>
          <p className="text-4xl font-bold text-gray-800">225</p>
          <p className="text-sm text-green-600 font-medium">+23% o'tgan oyga nisbatan</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <p className="text-sm text-gray-500 mb-1">Faol mahsulotlar</p>
          <p className="text-4xl font-bold text-gray-800">156</p>
          <p className="text-sm text-green-600 font-medium">+13% o'tgan oyga nisbatan</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <p className="text-sm text-gray-500 mb-1">Qolgan mahsulotlar</p>
          <p className="text-4xl font-bold text-gray-800">34</p>
          <p className="text-sm text-red-600 font-medium">-1.2% o'tgan oyga nisbatan</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <p className="text-sm text-gray-500 mb-1">Nofaol</p>
          <p className="text-4xl font-bold text-gray-800">35</p>
          <p className="text-sm text-gray-500 font-medium">O'zgarmadi</p>
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
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600">Nomi va ishlab chiqaruvchi</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600">Toifa</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600">Narxi</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600">Holati</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600">Ko'rishlar</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600">Holat</th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-600">Qo'yilgan sana</th>
                <th className="px-6 py-4 text-right text-xs font-medium text-gray-600"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {notifications.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.company}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.type}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">{item.price}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.status}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">{item.views}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.holat)}`}>
                      {item.holat}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{item.date}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      {item.holat === "Kutilmoqda" && (
                        <>
                          <button className="text-red-600 hover:text-red-800">
                            <XCircle className="w-5 h-5" />
                          </button>
                          <button className="text-green-600 hover:text-green-800">
                            <CheckCircle className="w-5 h-5" />
                          </button>
                        </>
                      )}
                      <button className="text-blue-600 hover:text-blue-800">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="text-indigo-600 hover:text-indigo-800">
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