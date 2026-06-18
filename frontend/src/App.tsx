import React, { useState } from 'react';
import { ShieldAlert, BarChart3, TrendingUp, AlertTriangle, CheckCircle2, Clock } from 'lucide-react';
import { ResponsiveContainer, XAxis, YAxis, Tooltip, LineChart, Line } from 'recharts';

// --- MOCK KSP DATA ENGINE ---
const kspCrimeData = [
  { id: "FIR/2026/0891", district: "Bengaluru South", type: "Cyber Fraud", severity: "High", date: "2026-06-15", status: "Active" },
  { id: "FIR/2026/1042", district: "Mysuru", type: "Burglary", severity: "Medium", date: "2026-06-16", status: "Resolved" },
  { id: "FIR/2026/0314", district: "Bengaluru South", type: "Chain Snatching", severity: "High", date: "2026-06-16", status: "Active" },
  { id: "FIR/2026/1105", district: "Hubballi", type: "Vehicle Theft", severity: "Low", date: "2026-06-17", status: "Active" },
  { id: "FIR/2026/0743", district: "Mangaluru", type: "Cyber Fraud", severity: "Medium", date: "2026-06-17", status: "Pending" },
  { id: "FIR/2026/1521", district: "Belagavi", type: "Narcotics", severity: "Critical", date: "2026-06-18", status: "Active" },
];

const crimeTrendData = [
  { name: 'Jan', Cases: 400 },
  { name: 'Feb', Cases: 450 },
  { name: 'Mar', Cases: 510 },
  { name: 'Apr', Cases: 480 },
  { name: 'May', Cases: 620 },
  { name: 'Jun', Cases: 740 }, // June 2026 current spike
];

function App() {
  const [filterType, setFilterType] = useState('All');

  const filteredData = filterType === 'All' 
    ? kspCrimeData 
    : kspCrimeData.filter(item => item.type === filterType);

  return (
    <div style={{ backgroundColor: '#0b0f19', minHeight: '100vh', color: '#f1f5f9', fontFamily: 'system-ui, sans-serif', padding: '16px' }}>
      
      {/* HEADER SECTION */}
      <header style={{ borderBottom: '1px solid #1e293b', paddingBottom: '12px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ShieldAlert size={28} color="#ef4444" />
          <h1 style={{ fontSize: '22px', margin: 0, fontWeight: 'bold', color: '#38bdf8', letterSpacing: '0.5px' }}>
            Maha CrimeLens AI
          </h1>
        </div>
        <p style={{ color: '#64748b', fontSize: '12px', margin: '4px 0 0 0', fontWeight: 500 }}>
          KARNATAKA STATE POLICE • DATATHON 2026 PROTOTYPE
        </p>
      </header>

      {/* EXECUTIVE SUMMARY CARDS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '20px' }}>
        <div style={{ backgroundColor: '#111827', padding: '12px', borderRadius: '8px', border: '1px solid #1e293b', borderLeft: '4px solid #ef4444' }}>
          <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 'bold' }}>CRITICAL ALERTS</span>
          <p style={{ fontSize: '22px', fontWeight: 'bold', margin: '4px 0 0 0', color: '#f3f4f6' }}>24</p>
        </div>
        <div style={{ backgroundColor: '#111827', padding: '12px', borderRadius: '8px', border: '1px solid #1e293b', borderLeft: '4px solid #38bdf8' }}>
          <span style={{ fontSize: '11px', color: '#64748b', fontWeight: 'bold' }}>TOTAL FIRs</span>
          <p style={{ fontSize: '22px', fontWeight: 'bold', margin: '4px 0 0 0', color: '#f3f4f6' }}>1,402</p>
        </div>
      </div>

      {/* AI PREDICTIVE ANALYTICS CHART */}
      <div style={{ backgroundColor: '#111827', padding: '16px', borderRadius: '8px', border: '1px solid #1e293b', marginBottom: '20px' }}>
        <h3 style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <TrendingUp size={16} color="#38bdf8" /> AI Trend & Early Warning Forecasting
        </h3>
        <div style={{ width: '100%', height: 160 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={crimeTrendData}>
              <XAxis dataKey="name" stroke="#475569" fontSize={11} />
              <YAxis stroke="#475569" fontSize={11} />
              <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#1e293b', color: '#fff' }} />
              <Line type="monotone" dataKey="Cases" stroke="#38bdf8" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* INTERACTIVE DATA MONITOR & RADAR */}
      <div style={{ backgroundColor: '#111827', padding: '16px', borderRadius: '8px', border: '1px solid #1e293b' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
          <h3 style={{ margin: 0, fontSize: '14px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <BarChart3 size={16} color="#a855f7" /> Real-time FIR Intelligence Feed
          </h3>
          
          {/* Quick Filter Controls */}
          <select 
            value={filterType} 
            onChange={(e) => setFilterType(e.target.value)}
            style={{ backgroundColor: '#1f2937', color: '#fff', border: '1px solid #374151', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}
          >
            <option value="All">All Crimes</option>
            <option value="Cyber Fraud">Cyber Fraud</option>
            <option value="Vehicle Theft">Vehicle Theft</option>
            <option value="Narcotics">Narcotics</option>
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {filteredData.map((fir) => (
            <div key={fir.id} style={{ backgroundColor: '#1f2937', padding: '10px', borderRadius: '6px', border: '1px solid #374151' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#38bdf8' }}>{fir.id}</span>
                <span style={{ 
                  fontSize: '10px', padding: '2px 6px', borderRadius: '10px', 
                  backgroundColor: fir.severity === 'Critical' || fir.severity === 'High' ? '#7f1d1d' : '#374151',
                  color: fir.severity === 'Critical' || fir.severity === 'High' ? '#fecaca' : '#94a3b8'
                }}>{fir.severity}</span>
              </div>
              <div style={{ marginTop: '6px', fontSize: '13px', color: '#e2e8f0' }}>
                <strong>{fir.type}</strong> — {fir.district}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
