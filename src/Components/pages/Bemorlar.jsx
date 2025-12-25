import React, { useState } from "react";
import { Menu, Search, Bell, Pencil, Trash2 } from "lucide-react";

export default function Bemorlar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const data = [
    {
      id: 1,
      name: "Karimova Nodira",
      email: "karimova@gmail.com",
      phone: "+998 99 111-44-56",
      lastVisit: "24–Yan.2025",
      age: 34,
      status: "Faol",
      visits: 3,
      doctor: "Dr. Aliyev Jamshid",
      initials: "KN",
      color: "bg-indigo-500",
    },
    {
      id: 2,
      name: "Toshmatov Sardor",
      email: "toshmatov@gmail.com",
      phone: "+998 99 111-44-56",
      lastVisit: "22–Dek.2025",
      age: 24,
      status: "Faol",
      visits: 10,
      doctor: "Dr. Karimova Malika",
      initials: "TS",
      color: "bg-purple-500",
    },
    {
      id: 3,
      name: "Abdullayeva Dilnoza",
      email: "abdullayeva@gmail.com",
      phone: "+998 99 111-44-56",
      lastVisit: "11–Sen.2025",
      age: 48,
      status: "Faol",
      visits: 7,
      doctor: "Dr. Rustamov Abbos",
      initials: "AD",
      color: "bg-blue-500",
    },
    {
      id: 4,
      name: "Rahimov Jasur",
      email: "rahimov@gmail.com",
      phone: "+998 99 111-44-56",
      lastVisit: "10–Sen.2025",
      age: 36,
      status: "Faol",
      visits: 5,
      doctor: "Dr. Aliyev Jamshid",
      initials: "RJ",
      color: "bg-pink-500",
    },
    {
      id: 5,
      name: "Nazarova Madina",
      email: "nazarova@gmail.com",
      phone: "+998 99 111-44-56",
      lastVisit: "2–Avg.2025",
      age: 22,
      status: "Nofaol",
      visits: 15,
      doctor: "Dr. Nazarova Dilnoza",
      initials: "NM",
      color: "bg-indigo-400",
    },
    {
      id: 6,
      name: "Yusupov Otabek",
      email: "otabek@gmail.com",
      phone: "+998 99 111-44-56",
      lastVisit: "1–Avg.2025",
      age: 16,
      status: "Faol",
      visits: 8,
      doctor: "Dr. Karimova Malika",
      initials: "YO",
      color: "bg-violet-500",
    },
  ];

  return (
    <div className="min-h-screen">

      {/* ================= HEADER ================= */}
      <header className="px-6 py-5 flex items-center justify-between sticky top-0 z-40 ">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden text-[#2B3674]"
          >
            <Menu />
          </button>

          <div>
            <p className="text-sm text-[#707EAE]">
              Tizim statistikasi va umumiy ma'lumotlar
            </p>
            <h2 className="text-3xl font-bold text-[#2B3674]">
              Bildirishnomalar
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-full shadow-sm">
          <div className="relative hidden md:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#A3AED0]" />
            <input
              placeholder="Search"
              className="pl-12 pr-4 py-2 w-48 rounded-full bg-[#F4F7FE] outline-none text-sm"
            />
          </div>
          <Bell className="text-[#A3AED0]" />
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#4318FF] to-[#9F7AEA] ring-4 ring-[#E0E7FF]" />
        </div>
      </header>

      {/* ================= CARDS ================= */}
      <div className="px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { title: "Jami bemorlar", value: "1 234" },
          { title: "Faol bemorlar", value: "1 187" },
          { title: "Nofaol (30+ kun)", value: "47" },
          { title: "Yangi (ushbu oy)", value: "89" },
        ].map((c, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm p-5"
          >
            <p className="text-sm text-[#A3AED0]">{c.title}</p>
            <p className="text-3xl font-bold text-[#2B3674]">{c.value}</p>
          </div>
        ))}
      </div>

      {/* ================= TABLE ================= */}
      <div className="px-6 pb-10">
        <div className="bg-white rounded-2xl shadow-sm p-6">

          <div className="grid grid-cols-[2.5fr_1.5fr_1.3fr_0.7fr_0.8fr_1fr_1.5fr_0.7fr] text-sm text-[#A3AED0] mb-4">
            <span>Ism familiya</span>
            <span>Tel. raqam</span>
            <span>So‘nggi tashrif</span>
            <span>Yosh</span>
            <span>Holat</span>
            <span>Tashriflar</span>
            <span>Shifokor</span>
            <span></span>
          </div>

          <div className="space-y-4">
            {data.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[2.5fr_1.5fr_1.3fr_0.7fr_0.8fr_1fr_1.5fr_0.7fr] items-center"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full text-white flex items-center justify-center text-sm font-semibold ${item.color}`}>
                    {item.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#2B3674]">{item.name}</p>
                    <p className="text-xs text-[#A3AED0]">{item.email}</p>
                  </div>
                </div>

                <p className="text-sm text-[#2B3674]">{item.phone}</p>
                <p className="text-sm font-medium text-[#2B3674]">{item.lastVisit}</p>
                <p className="text-sm text-[#2B3674]">{item.age}</p>

                <span className={`text-sm font-semibold ${item.status === "Faol" ? "text-[#4318FF]" : "text-[#A3AED0]"}`}>
                  {item.status}
                </span>

                <p className="text-sm text-[#2B3674]">{item.visits}</p>
                <p className="text-sm text-[#2B3674]">{item.doctor}</p>

                <div className="flex justify-end gap-2">
                  <button className="w-8 h-8 border border-blue-200 rounded-md flex items-center justify-center text-blue-600 hover:bg-blue-50">
                    <Pencil size={15} />
                  </button>
                  <button className="w-8 h-8 border border-red-200 rounded-md flex items-center justify-center text-red-600 hover:bg-red-50">
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
