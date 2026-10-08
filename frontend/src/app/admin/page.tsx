"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, Users, UserCheck, UserX, Settings, LogOut, Bell, Search, Mail, MapPin, Clock } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'Mon', rsvps: 12 },
  { name: 'Tue', rsvps: 28 },
  { name: 'Wed', rsvps: 45 },
  { name: 'Thu', rsvps: 38 },
  { name: 'Fri', rsvps: 65 },
  { name: 'Sat', rsvps: 85 },
  { name: 'Sun', rsvps: 112 },
];

const guestsList = [
  { id: 1, name: "Rahul & Neha Sharma", events: ["Mehendi", "Wedding"], status: "Attending", adults: 2, children: 0, email: "rahul@example.com" },
  { id: 2, name: "Ananya Patel Family", events: ["Wedding"], status: "Pending", adults: 2, children: 2, email: "ananya@example.com" },
  { id: 3, name: "Karan Singh", events: ["Sangeet", "Wedding"], status: "Declined", adults: 0, children: 0, email: "karan.s@example.com" },
  { id: 4, name: "Pooja & Amit Desai", events: ["Mehendi", "Sangeet", "Wedding"], status: "Attending", adults: 2, children: 1, email: "poojadesai@example.com" },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex font-sans text-slate-800">
      
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-72 bg-white border-r border-slate-200 fixed h-full z-20 flex flex-col"
      >
        <div className="h-24 flex items-center px-8 border-b border-slate-100">
          <h1 className="font-heading text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-amber-600 to-amber-400">My Invitation</h1>
        </div>
        
        <div className="p-6 flex flex-col gap-2 flex-1">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 px-4">Menu</div>
          
          <button onClick={() => setActiveTab("dashboard")} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'dashboard' ? 'bg-amber-50 text-amber-600 font-bold shadow-sm' : 'text-slate-500 hover:bg-slate-50'}`}>
            <LayoutDashboard className="w-5 h-5" /> Dashboard
          </button>
          
          <button onClick={() => setActiveTab("guests")} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'guests' ? 'bg-amber-50 text-amber-600 font-bold shadow-sm' : 'text-slate-500 hover:bg-slate-50'}`}>
            <Users className="w-5 h-5" /> Guest List <span className="ml-auto bg-amber-100 text-amber-600 py-0.5 px-2 rounded-full text-[10px] font-bold">142</span>
          </button>
          
          <button onClick={() => setActiveTab("settings")} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === 'settings' ? 'bg-amber-50 text-amber-600 font-bold shadow-sm' : 'text-slate-500 hover:bg-slate-50'}`}>
            <Settings className="w-5 h-5" /> Settings
          </button>
        </div>
        
        <div className="p-6 border-t border-slate-100">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-left text-slate-500 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors">
            <LogOut className="w-5 h-5" /> Sign Out
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="ml-72 flex-1 flex flex-col min-h-screen relative overflow-hidden">
        
        {/* Top Header */}
        <header className="h-24 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-10 flex items-center justify-between px-10">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-slate-800 font-heading capitalize">{activeTab.replace('-', ' ')}</h2>
            <p className="text-xs text-slate-500 tracking-wider">Welcome back, Aarav & Meera</p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input type="text" placeholder="Search guests..." className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-amber-400 outline-hidden w-64 transition-all" />
            </div>
            
            <button className="relative p-2 text-slate-400 hover:text-amber-500 transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center font-bold shadow-md cursor-pointer border-2 border-white">
              A
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-10 flex-1 overflow-y-auto pb-24">
          
          {activeTab === 'dashboard' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-4 gap-6 mb-10">
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <p className="text-sm text-slate-500 font-medium mb-1">Total Invited</p>
                  <h3 className="text-4xl font-bold font-heading text-slate-800">450</h3>
                </div>
                
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-500 flex items-center justify-center mb-4">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <p className="text-sm text-slate-500 font-medium mb-1">Attending</p>
                  <h3 className="text-4xl font-bold font-heading text-slate-800">312</h3>
                </div>
                
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <p className="text-sm text-slate-500 font-medium mb-1">Pending Responses</p>
                  <h3 className="text-4xl font-bold font-heading text-slate-800">105</h3>
                </div>
                
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col hover:-translate-y-1 transition-transform">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mb-4">
                    <UserX className="w-6 h-6" />
                  </div>
                  <p className="text-sm text-slate-500 font-medium mb-1">Declined</p>
                  <h3 className="text-4xl font-bold font-heading text-slate-800">33</h3>
                </div>
              </div>

              {/* Chart & Recent Activity */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                <div className="col-span-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h3 className="text-lg font-bold font-heading text-slate-800">RSVP Trends</h3>
                      <p className="text-xs text-slate-500">Responses over the last 7 days</p>
                    </div>
                    <select className="bg-slate-50 border-none text-sm font-medium rounded-lg px-4 py-2 text-slate-600 outline-hidden">
                      <option>Last 7 Days</option>
                      <option>Last 30 Days</option>
                    </select>
                  </div>
                  
                  <div className="h-72 w-full">
                    {isLoaded && (
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <defs>
                            <linearGradient id="colorRsvps" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#d97706" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="#d97706" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                          <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                          <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }} />
                          <Area type="monotone" dataKey="rsvps" stroke="#d97706" strokeWidth={3} fillOpacity={1} fill="url(#colorRsvps)" />
                        </AreaChart>
                      </ResponsiveContainer>
                    )}
                  </div>
                </div>

                <div className="col-span-1 bg-white p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
                  <h3 className="text-lg font-bold font-heading text-slate-800 mb-6">Recent RSVPs</h3>
                  <div className="space-y-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-sm">
                          {String.fromCharCode(64 + i)}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-slate-800">Guest Name {i}</p>
                          <p className="text-xs text-slate-400">Accepted for 2 adults</p>
                        </div>
                        <span className="text-[10px] text-slate-400 font-medium">2h ago</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-8 py-3 text-sm font-bold text-amber-600 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors">
                    View All Guests
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'guests' && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                  <div className="flex gap-4">
                    <button className="px-4 py-2 bg-white rounded-lg text-sm font-bold shadow-sm border border-slate-200">All Guests</button>
                    <button className="px-4 py-2 text-slate-500 hover:bg-slate-100 rounded-lg text-sm font-medium transition-colors">Attending</button>
                    <button className="px-4 py-2 text-slate-500 hover:bg-slate-100 rounded-lg text-sm font-medium transition-colors">Pending</button>
                  </div>
                  <button className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold shadow-md hover:bg-slate-800 transition-colors">
                    Export to CSV
                  </button>
                </div>
                
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-white border-b border-slate-100 text-xs uppercase tracking-wider text-slate-400">
                      <th className="p-6 font-semibold">Guest Name</th>
                      <th className="p-6 font-semibold">Status</th>
                      <th className="p-6 font-semibold">Events</th>
                      <th className="p-6 font-semibold">Party Size</th>
                      <th className="p-6 font-semibold">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {guestsList.map((guest) => (
                      <tr key={guest.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                        <td className="p-6">
                          <p className="font-bold text-slate-800">{guest.name}</p>
                          <p className="text-xs text-slate-400">ID: #GST{guest.id}00</p>
                        </td>
                        <td className="p-6">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            guest.status === 'Attending' ? 'bg-green-100 text-green-700' :
                            guest.status === 'Declined' ? 'bg-red-100 text-red-700' :
                            'bg-amber-100 text-amber-700'
                          }`}>
                            {guest.status}
                          </span>
                        </td>
                        <td className="p-6">
                          <div className="flex flex-wrap gap-1">
                            {guest.events.map((e, i) => (
                              <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">{e}</span>
                            ))}
                          </div>
                        </td>
                        <td className="p-6">
                          <div className="flex items-center gap-4 text-sm text-slate-600">
                            <span className="flex items-center gap-1.5"><Users className="w-3 h-3 text-slate-400" /> {guest.adults} A</span>
                            <span className="flex items-center gap-1.5 text-slate-400">|</span>
                            <span className="flex items-center gap-1.5"><Users className="w-3 h-3 text-slate-400" /> {guest.children} C</span>
                          </div>
                        </td>
                        <td className="p-6 text-sm text-slate-500">
                          <div className="flex items-center gap-2 hover:text-amber-600 cursor-pointer transition-colors">
                            <Mail className="w-4 h-4" /> Message
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

        </div>
      </main>
    </div>
  );
}

// Ensure lucide icon 'Clock' is used for the pending section. We'll reuse the imported icon.
