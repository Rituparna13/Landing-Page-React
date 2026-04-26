import React from 'react'

const stats = [
  { value:'1.1 Billion+', label:'Public services delivered', color:'#f97316' },
  { value:'50+', label:'Partners from technology, governments and NGOs', color:'#3b82f6' },
  { value:'210+', label:'Cities integrated with DIGIT platform', color:'#10b981' },
  { value:'2 Bn', label:'Citizens enabled on non-platform solutions', color:'#8b5cf6' },
]

export default function StatsSection() {
  return (
    <section style={{ background:'linear-gradient(135deg,#0f172a 0%,#1e293b 100%)', padding:'80px 24px', position:'relative', overflow:'hidden' }}>
      <style>{`.stat-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:28px 24px;transition:all .3s;}.stat-card:hover{background:rgba(255,255,255,.1);transform:translateY(-4px);}`}</style>
      <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle at 20% 50%,rgba(249,115,22,.08) 0%,transparent 50%),radial-gradient(circle at 80% 20%,rgba(30,64,175,.1) 0%,transparent 50%)' }} />
      <div style={{ maxWidth:1200, margin:'0 auto', position:'relative', zIndex:1 }}>
        <div style={{ fontSize:'clamp(44px,7vw,90px)', fontWeight:900, textAlign:'center', marginBottom:8, background:'linear-gradient(135deg,#fff 0%,rgba(255,255,255,.65) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', letterSpacing:'-2px', lineHeight:1 }}>
          1,000,000,100+
        </div>
        <p style={{ textAlign:'center', color:'rgba(255,255,255,.5)', fontSize:15, marginBottom:60 }}>Citizens availing public services through eGov's Digital Public Goods (DPG)</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:24 }}>
          {stats.map(s => (
            <div key={s.value} className="stat-card">
              <div style={{ fontSize:34, fontWeight:800, color:s.color, marginBottom:8 }}>{s.value}</div>
              <div style={{ fontSize:13, color:'rgba(255,255,255,.55)', lineHeight:1.6 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
