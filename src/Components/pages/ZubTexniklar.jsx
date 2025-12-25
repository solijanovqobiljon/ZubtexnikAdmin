import React, { useState } from "react";
import {
  Search,
  Bell,
  Edit2,
  Trash2,
  Menu,
} from "lucide-react";

export default function Zubtexniklar() {
  const technicians = [
    {
      id: 1,
      name: "Dr. Aliyev Jamshid",
      email: "j.aliyev@example.com",
      specialty: "Protezchi",
      phone: "+998 99 111-44-56",
      patients: 128,
      rating: 4.9,
      status: "Faol",
      date: "24-Yan.2025",
      comDate: "12-Dek.2025",
      color: "indigo",
    },
    {
      id: 2,
      name: "Dr. Karimova Malika",
      email: "m.karimova@example.com",
      specialty: "Ortodont",
      phone: "+998 91 234-56-78",
      patients: 205,
      rating: 4.2,
      status: "Faol",
      date: "22-Dek.2025",
      comDate: "12-Dek.2025",
      color: "purple",
    },
    {
      id: 3,
      name: "Dr. Rustamov Abbos",
      email: "a.rustamov@example.com",
      specialty: "Breketchi",
      phone: "+998 99 111-44-56",
      patients: 89,
      rating: 3.9,
      status: "Faol",
      date: "11-Sen.2025",
      comDate: "12-Dek.2025",
      color: "blue",
    },
    {
      id: 4,
      name: "Dr. Nazarova Dilnoza",
      email: "d.nazarova@example.com",
      specialty: "Vinir",
      phone: "+998 99 111-44-56",
      patients: 78,
      rating: 3.8,
      status: "Kutilmoqda",
      date: "10-Sen.2025",
      comDate: "12-Dek.2025",
      color: "pink",
    },
    {
      id: 5,
      name: "Dr. Tursunov Otabek",
      email: "o.tursunov@example.com",
      specialty: "Protezchi",
      phone: "+998 99 111-44-56",
      patients: 112,
      rating: 4.9,
      status: "Nofaol",
      date: "2-Avg.2025",
      comDate: "12-Dek.2025",
      color: "green",
    },
    {
      id: 6,
      name: "Dr. Aliyev Jamshid",
      email: "j.aliyev@example.com",
      specialty: "Breketchi",
      phone: "+998 99 111-44-56",
      patients: 225,
      rating: 4.7,
      status: "Faol",
      date: "1-Avg.2025",
      comDate: "12-Dek.2025",
      color: "yellow",
    },
  ];

  const colorMap = {
    indigo: {
      bg: "bg-indigo-100",
      ring: "ring-indigo-100/60",
      dot: "bg-indigo-500",
    },
    purple: {
      bg: "bg-purple-100",
      ring: "ring-purple-100/60",
      dot: "bg-purple-500",
    },
    blue: {
      bg: "bg-blue-100",
      ring: "ring-blue-100/60",
      dot: "bg-blue-500",
    },
    pink: {
      bg: "bg-pink-100",
      ring: "ring-pink-100/60",
      dot: "bg-pink-500",
    },
    green: {
      bg: "bg-green-100",
      ring: "ring-green-100/60",
      dot: "bg-green-500",
    },
    yellow: {
      bg: "bg-yellow-100",
      ring: "ring-yellow-100/60",
      dot: "bg-yellow-500",
    },
  };

  const statusStyle = {
    Faol: "text-green-600",
    Kutilmoqda: "text-yellow-500",
    Nofaol: "text-gray-400",
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans">
      {/* HEADER */}
      <header className="px-4 md:px-8 py-6 flex items-center justify-between">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden text-gray-600"
        >
          <Menu />
        </button>

        <div>
          <p className="text-sm text-gray-500">
            Tizim statistikasi va umumiy ma'lumotlar
          </p>
          <h1 className="text-3xl font-bold text-gray-900">
            Stomatologlar
          </h1>
        </div>

        <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-full shadow-sm">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              placeholder="Search"
              className="pl-10 pr-4 py-2 w-48 bg-gray-50 border border-gray-200 rounded-full focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
          <Bell className="text-gray-400" />
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 ring-4 ring-indigo-100" />
        </div>
      </header>

      {/* STATS */}
      <div className="px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
        {[
          ["Jami stomatologlar", "225", "+23 ta"],
          ["Faol", "156"],
          ["Kutilmoqda", "34"],
          ["Nofaol", "35"],
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
          >
            <p className="text-sm text-gray-500">{item[0]}</p>
            <p className="text-4xl font-bold text-gray-900">
              {item[1]}
            </p>
            {item[2] && (
              <p className="text-sm text-green-600 font-medium">
                {item[2]}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* TABLE */}
      <div className="px-4 md:px-8 pb-10">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-5">
            <h2 className="text-2xl font-semibold text-gray-900">
              Stamotologlar Ro'yxati
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="">
                <tr>
                  {[
                    "Mavzu",
                    "Mutaxassisligi",
                    "Tel raqami",
                    "Bemorlar",
                    "Baho",
                    "Holat",
                    "Ro'yxatdan o'tgan sana",
                    "Yakunlangan sana",
                    "Amallar",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="">
                {technicians.map((tech) => (
                  <tr
                    key={tech.id}
                    className=""
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center ring-4 ${colorMap[tech.color].bg} ${colorMap[tech.color].ring}`}
                        >
                          <div
                            className={`w-3 h-3 rounded-full ${colorMap[tech.color].dot}`}
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">
                            {tech.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {tech.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {tech.specialty}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {tech.phone}
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-800">
                      {tech.patients}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="font-semibold">
                        {tech.rating}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`text-xs font-semibold ${statusStyle[tech.status]}`}
                      >
                        {tech.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {tech.date}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {tech.comDate}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-3">
                        <Edit2 className="w-4 h-4 text-indigo-600 hover:text-indigo-800 cursor-pointer" />
                        <Trash2 className="w-4 h-4 text-red-600 hover:text-red-800 cursor-pointer" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
