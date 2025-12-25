import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import {
    Eye, Trash2, Edit2, CheckCircle, XCircle 
} from 'lucide-react';

function AdminBody() {
    const lineData = [
        { name: 'Sentabr', Qabullar: 80, YangiBemorlar: 60 },
        { name: 'Oktabr', Qabullar: 95, YangiBemorlar: 70 },
        { name: 'Noyabr', Qabullar: 85, YangiBemorlar: 65 },
        { name: 'Dekabr', Qabullar: 110, YangiBemorlar: 80 },
        { name: 'Yanvar', Qabullar: 120, YangiBemorlar: 90 },
        { name: 'Fevral', Qabullar: 105, YangiBemorlar: 85 },
    ];

    const pieData = [
        { name: 'Sotilgan', value: 63 },
        { name: 'Yangi', value: 25 },
    ];

    const advertisementData = [
        { name: "Stomatologik kreslo Premium 2024", manufacturer: "DentalSupply LLC", category: "Kreslo", price: "45 000 UZS", condition: "Yangi", views: 2122, status: "Faol", date: "24-Yan.2025" },
        { name: "Rentgen apparati Panoramik", manufacturer: "MedTech Solutions", category: "Rentgen", price: "550 000 UZS", condition: "Ishlagan", views: 1100, status: "Faol", date: "22-Dek.2025" },
        { name: "Ultratovushli tozalagich", manufacturer: "Dr. Aliyev Jamshid", category: "Asboblar", price: "220 000 UZS", condition: "Ishlagan", views: 500, status: "Faol", date: "11-Sen.2025" },
        { name: "Avtoklavl sterilizatori", manufacturer: "Health Equip Uz", category: "Sterilizatsiya", price: "92 000 UZS", condition: "Yangi", views: 455, status: "Kutilmoqda", date: "10-Sen.2025" },
        { name: "LED operatsion chiroq", manufacturer: "LightMed Pro", category: "Yoritish", price: "135 000 UZS", condition: "Yangi", views: 420, status: "Nofaol", date: "2-Avg.2025" },
        { name: "Kompressor havo nasosi", manufacturer: "Dr. Karimova Malika", category: "Uskunalar", price: "155 000 UZS", condition: "Ishlagan", views: 120, status: "Faol", date: "1-Avg.2025" },
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case 'Faol': return 'text-[#05CD99]';
            case 'Kutilmoqda': return 'text-[#FFB543]';
            case 'Nofaol': return 'text-[#A3AED0]';
            default: return 'text-[#2B3674]';
        }
    };

    return (
        <div className='w-full h-auto px-4 lg:px-10 py-6'>
            {/* Header Section */}
            <div className='flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4'>
                <div>
                    <p className='text-[#707EAE] text-[14px] md:text-[16px]'>Tizim statistikasi va umumiy ma'lumotlar</p>
                    <p className='text-[#2B3674] text-[22px] md:text-[26px] font-bold'>Asbob uskunalar bozori</p>
                </div>
                
                <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2 gap-4 w-full md:w-[350px] h-[50px]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-[#707EAE]" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m1.68-5.03a6.72 6.72 0 11-13.44 0 6.72 6.72 0 0113.44 0z" />
                    </svg>
                    <input type="text" placeholder="Search" className="flex-1 bg-transparent outline-none text-[#707EAE] placeholder-[#A3AED0]" />
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-[#A3AED0] cursor-pointer" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405C18.21 14.79 18 14.298 18 13.757V11a6 6 0 00-5-5.917V4a2 2 0 10-4 0v1.083A6 6 0 004 11v2.757c0 .541-.21 1.033-.595 1.838L2 17h5m8 0a3 3 0 11-6 0m6 0H9" />
                    </svg>
                    <img src="https://i.pravatar.cc/100" alt="user" className="w-[36px] h-[36px] rounded-full object-cover" />
                </div>
            </div>

            {/* Stat Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
                {[
                    { label: "Jami mahsulotlari", val: "225", trend: "+23 ta" },
                    { label: "Faol", val: "156" },
                    { label: "Qolgan mahsulotlar", val: "34" },
                    { label: "Nofaol", val: "35" }
                ].map((s, i) => (
                    <div key={i} className='rounded-2xl bg-white shadow-sm p-5'>
                        <p className='text-[#A3AED0] text-[15px]'>{s.label}</p>
                        <p className='text-[#2B3674] text-[24px] font-bold'>{s.val}</p>
                        {s.trend && <p className='text-[#A3AED0] text-[12px]'><span className='text-[#05CD99]'>{s.trend}</span></p>}
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8'>
                <div className='xl:col-span-2 bg-white rounded-2xl shadow-sm p-6'>
                    <div className='flex items-center justify-between mb-4'>
                        <div>
                            <p className='text-[#2B3674] text-[18px] font-semibold'>120 mln</p>
                            <p className='text-[#A3AED0] text-[14px]'>UZS Kirim</p>
                        </div>
                        <button className='bg-[#F4F7FE] text-[#2B3674] px-4 py-2 rounded-lg text-sm'>Ushbu oyda</button>
                    </div>
                    <div className='h-[300px] w-full'>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={lineData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="name" tick={{ fill: '#A3AED0', fontSize: 12 }} />
                                <Tooltip />
                                <Line type="monotone" dataKey="Qabullar" stroke="#4318FF" strokeWidth={3} dot={{ fill: '#4318FF' }} />
                                <Line type="monotone" dataKey="YangiBemorlar" stroke="#05CD99" strokeWidth={3} dot={{ fill: '#05CD99' }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className='bg-white rounded-2xl shadow-sm p-6'>
                    <div className='flex items-start justify-between mb-8'>
                        <div>
                            <h3 className='text-[#A3AED0] text-[18px]'>Haftalik qabullar</h3>
                            <p className='text-[#2B3674] text-[28px] font-bold mt-1'>432</p>
                            <span className='text-[#A3AED0] text-[14px]'>tashriflar soni</span>
                        </div>
                        <div className='text-[#05CD99] text-[16px] font-medium'>↑ +2.45%</div>
                    </div>
                    <div className='flex items-end justify-between h-[200px] gap-1 px-2'>
                        {[
                            { day: 'Du', value: 52 }, { day: 'Se', value: 32 }, { day: 'Ch', value: 45 },
                            { day: 'Pa', value: 47 }, { day: 'Ju', value: 32 }, { day: 'Sh', value: 33 }, { day: 'Ya', value: 29 },
                        ].map((item, index) => (
                            <div key={index} className='flex flex-col items-center gap-1 flex-1'>
                                <div className='w-full max-w-[20px] bg-gradient-to-t from-[#A37CFB] to-[#4318FF] rounded-t-lg h-full' style={{ height: `${item.value * 2}px` }}></div>
                                <span className='text-[#A3AED0] text-[10px] md:text-[12px]'>{item.day}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Notifications and Equipment Stats */}
            <div className='grid grid-cols-1 xl:grid-cols-5 gap-6 mb-8'>
                <div className='xl:col-span-3 bg-white rounded-2xl shadow-sm p-6'>
                    <h2 className='text-[#2B3674] text-[20px] font-semibold mb-4'>Bildirishnomalar</h2>
                    <div className='space-y-4 overflow-x-auto'>
                        {/* Table Header */}
                        <div className='grid grid-cols-3 text-[#A3AED0] text-[14px] border-b pb-2 min-w-[400px]'>
                            <span>Mavzu</span><span>Holat</span><span>Vaqti</span>
                        </div>
                        {/* Items */}
                        {[
                            { title: "Yangi Zubtexnik ro‘yxatdan o‘tdi", name: "Dr Aliyev Azamjon", status: "Yangi", time: "24–Yan.2025", new: true },
                            { title: "Yangi asbob e‘loni qo‘shildi", name: "DentalSupply LLC", status: "Yangi", time: "24–Yan.2025", new: true },
                            { title: "Qabul qilindi", name: "Karimova Nodira", status: "Yangi", time: "24–Yan.2025", new: true },
                        ].map((item, idx) => (
                            <div key={idx} className='grid grid-cols-3 items-center py-2 min-w-[400px]'>
                                <div>
                                    <p className='text-[#2B3674] font-medium text-sm'>{item.title}</p>
                                    <p className='text-[#A3AED0] text-xs'>{item.name}</p>
                                </div>
                                <span className={`text-[14px] font-semibold ${item.new ? "text-[#05CD99]" : "text-[#A3AED0]"}`}>{item.status}</span>
                                <span className='text-[#2B3674] text-[14px]'>{item.time}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='xl:col-span-2 bg-white rounded-2xl shadow-sm p-6'>
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className='text-[#2B3674] text-[18px] font-semibold'>Asbob uskunalar statistikasi</h2>
                        <span className='text-[#A3AED0] text-sm'>Oylik ▼</span>
                    </div>
                    <div className='h-[200px]'>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                                    <Cell fill="#4318FF" /><Cell fill="#67C7FF" />
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className='flex justify-center gap-6 mt-4'>
                        <div className='text-center'><p className='text-[#A3AED0] text-xs'>Sotilgan</p><p className='font-bold text-[#2B3674]'>63%</p></div>
                        <div className='text-center'><p className='text-[#A3AED0] text-xs'>Yangi</p><p className='font-bold text-[#2B3674]'>25%</p></div>
                    </div>
                </div>
            </div>

            {/* Big Advertisement Table */}
            <div className='bg-white rounded-2xl shadow-sm p-6 overflow-x-auto'>
                <h2 className='text-[#2B3674] text-[22px] font-bold mb-6'>E'lonlar Ro'yxati</h2>
                <div className='min-w-[1000px]'>
                    <div className='grid grid-cols-[3fr_1fr_1.2fr_1fr_1fr_1fr_1.5fr] gap-4 text-[#A3AED0] text-[14px] mb-4 border-b pb-2'>
                        <span>Nomi va ishlab chiqaruvchi</span><span>Toifa</span><span>Narxi</span><span>Holati</span><span>Ko'rishlar</span><span>Holat</span><span>Qo'yilgan sana</span>
                    </div>
                    {advertisementData.map((item, index) => (
                        <div key={index} className='grid grid-cols-[3fr_1fr_1.2fr_1fr_1fr_1fr_1.5fr] gap-4 items-center py-4 border-b last:border-b-0'>
                            <div>
                                <p className='text-[#2B3674] font-medium text-[15px]'>{item.name}</p>
                                <p className='text-[#A3AED0] text-xs'>{item.manufacturer}</p>
                            </div>
                            <span className='text-[#2B3674] text-[14px]'>{item.category}</span>
                            <span className='text-[#2B3674] text-[14px] font-semibold'>{item.price}</span>
                            <span className='text-[#2B3674] text-[14px]'>{item.condition}</span>
                            <span className='text-[#2B3674] text-[14px]'>{item.views}</span>
                            <span className={`text-[14px] font-semibold ${getStatusClass(item.status)}`}>{item.status}</span>
                            <span className='text-[#2B3674] text-[14px]'>{item.date}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AdminBody;