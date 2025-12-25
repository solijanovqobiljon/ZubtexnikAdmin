import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import {
    Eye, Trash2, Edit2, CheckCircle, XCircle // Iconlar uchun qo'shildi
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

    // RASMDAGI JADVAL UCHUN YANGI MA'LUMOTLAR
    const advertisementData = [
        {
            name: "Stomatologik kreslo Premium 2024",
            manufacturer: "DentalSupply LLC",
            category: "Kreslo",
            price: "45 000 UZS",
            condition: "Yangi",
            views: 2122,
            status: "Faol",
            date: "24-Yan.2025"
        },
        {
            name: "Rentgen apparati Panoramik",
            manufacturer: "MedTech Solutions",
            category: "Rentgen",
            price: "550 000 UZS",
            condition: "Ishlagan",
            views: 1100,
            status: "Faol",
            date: "22-Dek.2025"
        },
        {
            name: "Ultratovushli tozalagich",
            manufacturer: "Dr. Aliyev Jamshid",
            category: "Asboblar",
            price: "220 000 UZS",
            condition: "Ishlagan",
            views: 500,
            status: "Faol",
            date: "11-Sen.2025"
        },
        {
            name: "Avtoklavl sterilizatori",
            manufacturer: "Health Equip Uz",
            category: "Sterilizatsiya",
            price: "92 000 UZS",
            condition: "Yangi",
            views: 455,
            status: "Kutilmoqda",
            date: "10-Sen.2025"
        },
        {
            name: "LED operatsion chiroq",
            manufacturer: "LightMed Pro",
            category: "Yoritish",
            price: "135 000 UZS",
            condition: "Yangi",
            views: 420,
            status: "Nofaol",
            date: "2-Avg.2025"
        },
        {
            name: "Kompressor havo nasosi",
            manufacturer: "Dr. Karimova Malika",
            category: "Uskunalar",
            price: "155 000 UZS",
            condition: "Ishlagan",
            views: 120,
            status: "Faol",
            date: "1-Avg.2025"
        },
    ];

    // Status ranglarini aniqlovchi yordamchi funksiya
    const getStatusClass = (status) => {
        switch (status) {
            case 'Faol':
                return 'text-[#05CD99]';
            case 'Kutilmoqda':
                return 'text-[#FFB543]'; // Sariq rang (yoki rasmga yaqinroq)
            case 'Nofaol':
                return 'text-[#A3AED0]'; // Kulrang
            default:
                return 'text-[#2B3674]';
        }
    };

    return (
        <div className='w-[73%] h-auto  ml-[40px] p-6'>
            <div>
                <div>
                    <p className='text-[#707EAE] text-[16px]'>Tizim statistikasi va ummumiy ma'lumotlar</p>
                    <p className='text-[#2B3674] text-[26px] font-bold mb-6'>Asbob uskunalar bozori</p>
                </div>
                <div className="w-full flex justify-end mt-4">
                    <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2 gap-4 
                    w-[350px] h-[50px] mt-[-80px]">

                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="text-[#707EAE]"
                            width="18" height="18"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M21 21l-4.35-4.35m1.68-5.03a6.72 6.72 0 11-13.44 0 6.72 6.72 0 0113.44 0z" />
                        </svg>

                        <input
                            type="text"
                            placeholder="Search"
                            className="flex-1 bg-transparent outline-none text-[#707EAE] placeholder-[#A3AED0]"
                        />

                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="text-[#A3AED0] cursor-pointer"
                            width="20" height="20"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M15 17h5l-1.405-1.405C18.21 14.79
                                18 14.298 18 13.757V11a6 6 0 00-5-5.917V4a2 2
                                0 10-4 0v1.083A6 6 0 004 11v2.757c0 .541-.21
                                1.033-.595 1.838L2 17h5m8 0a3 3 0 11-6
                                0m6 0H9" />
                        </svg>

                        <img
                            src="https://i.pravatar.cc/100"
                            alt="user"
                            className="w-[36px] h-[36px] rounded-full object-cover"
                        />
                    </div>
                </div>

            </div>

            <div className='flex gap-[20px] flex-wrap mb-8'>
                <div className='w-[230px] h-[110px] rounded-2xl bg-white shadow-sm p-5'>
                    <p className='text-[#A3AED0] text-[15px]'>Jami mahsulotlari</p>
                    <p className='text-[#2B3674] text-[24px] font-bold'>225</p>
                    <p className='text-[#A3AED0] text-[12px]'><span className='text-[#05CD99]'>+23 ta</span> </p>
                </div>
                <div className='w-[230px] h-[110px] rounded-2xl bg-white shadow-sm p-5'>
                    <p className='text-[#A3AED0] text-[15px]'>Faol</p>
                    <p className='text-[#2B3674] text-[24px] font-bold'>156</p>
                </div>
                <div className='w-[230px] h-[110px] rounded-2xl bg-white shadow-sm p-5'>
                    <p className='text-[#A3AED0] text-[15px]'>Qolgan mahsulotlar</p>
                    <p className='text-[#2B3674] text-[24px] font-bold'>34</p>
                </div>
                <div className='w-[230px] h-[110px] rounded-2xl bg-white shadow-sm p-5'>
                    <p className='text-[#A3AED0] text-[15px]'>Nofaol</p>
                    <p className='text-[#2B3674] text-[24px] font-bold'>35</p>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='bg-white rounded-2xl shadow-sm p-6 w-[650px]'>
                    <div className='flex items-center justify-between mb-4'>
                        <div>
                            <p className='text-[#2B3674] text-[18px] font-semibold'>120 mln</p>
                            <p className='text-[#A3AED0] text-[14px]'>UZS Kirim</p>
                        </div>
                        <button className='bg-[#F4F7FE] text-[#2B3674] px-4 py-2 rounded-lg text-sm'>
                            Ushbu oyda
                        </button>
                    </div>

                    <div className='h-[300px]'>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={lineData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="name" tick={{ fill: '#A3AED0' }} />
                                <Tooltip />
                                <Line type="monotone" dataKey="Qabullar" stroke="#4318FF" strokeWidth={3} dot={{ fill: '#4318FF' }} />
                                <Line type="monotone" dataKey="YangiBemorlar" stroke="#05CD99" strokeWidth={3} dot={{ fill: '#05CD99' }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <div className='flex justify-center gap-8 mt-4 text-sm'>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 bg-[#4318FF] rounded-full'></div>
                            <span className='text-[#707EAE]'>Qabullar</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 bg-[#05CD99] rounded-full'></div>
                            <span className='text-[#707EAE]'>Yangi bemorlar</span>
                        </div>
                    </div>
                </div>

                <div className='bg-white rounded-2xl shadow-sm p-7 w-[400px] ml-[140px]'>
                    <div className='flex items-start justify-between mb-8'>
                        <div>
                            <h3 className='text-[#A3AED0] text-[18px]'>Haftalik qabullar</h3>
                            <p className='text-[#2B3674] text-[32px] font-bold mt-1'>
                                432 <span className='text-[#A3AED0] text-[16px] font-normal ml-2'>tashriflar soni</span>
                            </p>

                        </div>
                        <div className='text-[#05CD99] text-[16px] font-medium flex items-center gap-1 '>
                            <span>↑</span> +2.45%

                        </div>
                    </div>

                    <div className='flex items-end justify-between h-[280px] px-4'>
                        {[
                            { day: 'Du', value: 52 },
                            { day: 'Se', value: 32 },
                            { day: 'Ch', value: 45 },
                            { day: 'Pa', value: 47 },
                            { day: 'Ju', value: 32 },
                            { day: 'Sh', value: 33 },
                            { day: 'Ya', value: 29 },
                        ].map((item, index) => (
                            <div key={index} className='flex flex-col items-center gap-3'>


                                <div
                                    className='w-7 bg-gradient-to-t from-[#A37CFB] to-[#4318FF] rounded-t-2xl shadow-lg relative overflow-hidden'
                                    style={{ height: `${item.value * 4.8}px` }}
                                >
                                    <div className='absolute inset-0 bg-white opacity-20 rounded-t-2xl'></div>
                                </div>

                                <span className='text-[#A3AED0] text-[14px] font-medium mt-[-10px]'>{item.day}</span>

                                <span className='text-[#4318FF] text-[15px] font-bold mt-[-15px] z-10'>
                                    {item.value}
                                </span>
                            </div>
                        ))}


                    </div>

                </div>

            </div>
            <div className='flex gap-6 mt-10'>

                <div className='w-[60%] bg-white rounded-2xl shadow-sm p-6 '>
                    <h2 className='text-[#2B3674] text-[22px] font-semibold mb-4 '>Bildirishnomalar</h2>

                    <div className='grid grid-cols-3 text-[#A3AED0] text-[14px] mb-4'>
                        <span>Mavzu</span>
                        <span>Holat</span>
                        <span>Vaqti</span>
                    </div>

                    {[
                        { title: "Yangi Zubtexnik ro‘yxatdan o‘tdi", name: "Dr Aliyev Azamjon", status: "Yangi", time: "24–Yan.2025", new: true },
                        { title: "Yangi asbob e‘loni qo‘shildi", name: "DentalSupply LLC", status: "Yangi", time: "24–Yan.2025", new: true },
                        { title: "Qabul qilindi", name: "  Karimova Nodira", status: "Yangi", time: "24–Yan.2025", new: true },
                        { title: "Yetkazildi", name: "Toshmatov Sardor", status: "Ko‘rildi", time: "24–Yan.2025" },
                        { title: "Hisobot", name: "Stomatologik kreslo #12345", status: "Ko‘rildi", time: "24–Yan.2025" }
                    ].map((item, idx) => (
                        <div key={idx} className='grid grid-cols-3 items-center py-3 h-[100px]'>

                            <div>
                                <div className='flex items-center gap-3'>
                                    <input type="checkbox" className='w-4 h-4 cursor-pointer' />
                                    <p className='text-[#2B3674] font-medium'>{item.title}</p>
                                </div>
                                <p className='text-[#A3AED0] text-sm ml-7'>{item.name}</p>
                            </div>

                            <span className={`text-[15px] font-semibold ${item.new ? "text-[#05CD99]" : "text-[#A3AED0]"}`}>
                                {item.status}
                            </span>

                            <span className='text-[#2B3674] text-[15px] font-medium'>{item.time}</span>
                        </div>
                    ))}
                </div>

                <div className='w-[40%] bg-white rounded-2xl shadow-sm h-[350px] p-6'>
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className='text-[#2B3674] text-[18px] font-semibold'>Asbob uskunalar statistikasi</h2>
                        <span className='text-[#A3AED0]'>Oylik ▼</span>
                    </div>

                    <div className='w-full h-[200px] flex justify-center items-center'>
                        <ResponsiveContainer width="70%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={70}
                                    fill="#4318FF"
                                    dataKey="value"
                                >
                                    <Cell fill="#4318FF" />
                                    <Cell fill="#67C7FF" />
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <div className='flex justify-around mt-5'>
                        <div className='flex items-center gap-2'>
                            <span className='w-3 h-3 bg-[#4318FF] rounded-full'></span>
                            <p className='text-[#707EAE]'>Sotilgan <strong className='text-[#2B3674]'>63%</strong></p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='w-3 h-3 bg-[#67C7FF] rounded-full'></span>
                            <p className='text-[#707EAE]'>Yangi <strong className='text-[#2B3674]'>25%</strong></p>
                        </div>
                    </div>
                </div>

            </div>

            {/* YANGILANGAN JADVAL QISMI: E'lonlar Ro'yxati */}
            <div className='mt-10 bg-white rounded-2xl shadow-sm p-6 pl-[100px]  '>
                <h2 className='text-[#2B3674] text-[22px] font-bold mb-6'>Bildirishnomalar</h2>

                {/* Jadval Sarlavhalari - Kengliklar rasmga va matnni sig'dirishga moslashtirildi */}
                <div className='grid grid-cols-[3fr_1fr_1fr_1fr_1fr_1fr_1.5fr_1.5fr] gap-4 text-[#A3AED0] text-[14px] min-w-[1000px]'>
                    <span className='font-medium'>Nomi va ishlab chiqaruvchi</span>
                    <span className='font-medium'>Toifa</span>
                    <span className='font-medium'>Narxi</span>
                    <span className='font-medium'>Holati</span>
                    <span className='font-medium'>Ko'rishlar</span>
                    <span className='font-medium'>Holat</span>
                    <span className='font-medium whitespace-nowrap'>Qo'yilgan sana</span>
                </div>

                {/* Jadval Qatorlari */}
                {advertisementData.map((item, index) => (
                    <div key={index} className='grid grid-cols-[3fr_1fr_1fr_1fr_1fr_1fr_1.5fr_1.5fr] gap-[20px] items-center py-4   last:border-b-0 min-w-[1000px]'>

                        {/* Nomi va ishlab chiqaruvchi - Bir qatorga joylash uchun whitespace-nowrap va max-w qo'shildi */}
                        <div className='min-w-[200px]'>
                            <p className='text-[#2B3674] font-medium text-[15px] whitespace-nowrap overflow-hidden text-ellipsis'>{item.name}</p>
                            <p className='text-[#A3AED0] text-xs whitespace-nowrap overflow-hidden text-ellipsis'>{item.manufacturer}</p>
                        </div>

                        {/* Boshqa ustunlar (whitespace-nowrap qo'shildi) */}
                        <span className='text-[#2B3674] text-[14px] whitespace-nowrap'>{item.category}</span>
                        <span className='text-[#2B3674] text-[14px] font-semibold whitespace-nowrap'>{item.price}</span>
                        <span className='text-[#2B3674] text-[14px] whitespace-nowrap'>{item.condition}</span>
                        <span className='text-[#2B3674] text-[14px] whitespace-nowrap'>{item.views}</span>

                        {/* Holat - Rang va font-weight aniqlandi */}
                        <span className={`text-[14px] font-semibold whitespace-nowrap ${getStatusClass(item.status)}`}>{item.status}</span>

                        {/* Qo'yilgan sana - Bir qatorga joylashtirildi */}
                        <span className='text-[#2B3674] text-[14px] whitespace-nowrap'>{item.date}</span>


                    </div>
                ))}
            </div>


        </div>
    );
}

export default AdminBody;