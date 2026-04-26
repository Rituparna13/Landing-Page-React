import React from 'react'

const testimonials = [
  { quote:"eGov's platform transformed how we deliver services to 3 million citizens in our city.", name:'District Collector', role:'Government of Odisha', img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face' },
  { quote:"The DIGIT platform gave us a foundation to build real-time dashboards for public health.", name:'Health Secretary', role:'State Government', img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face' },
]

export default function SustainingChange() {
  return (
    <section style={{ padding:'80px 24px', background:'#f8fafc' }}>
      <style>{`.tcard{background:#fff;border-radius:20px;padding:32px 28px;box-shadow:0 4px 24px rgba(0,0,0,.06);border:1px solid #e2e8f0;}.btn-outline-o{background:transparent;border:2px solid #f97316;color:#f97316;border-radius:8px;padding:12px 32px;font-size:14px;font-weight:600;cursor:pointer;transition:all .2s;}.btn-outline-o:hover{background:#f97316;color:#fff;}`}</style>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:56 }}>
          <p style={{ fontSize:12, fontWeight:600, color:'#64748b', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:8 }}>Our Story</p>
          <h2 style={{ fontWeight:300, fontSize:'clamp(24px,3vw,36px)', color:'#1e293b', marginBottom:4 }}>20 years of reimagining for citizens and</h2>
          <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'clamp(24px,3vw,36px)', color:'#f97316' }}>sustaining change</div>
          <p style={{ maxWidth:640, margin:'20px auto 0', fontSize:15, color:'#64748b', lineHeight:1.8 }}>
            Technology is powerful but is only one piece of the puzzle, when it comes to enhancing the quality of life for every citizen. To have sustainable impact at scale, the collective energy of local networks to solve local problems needs to be tapped into. Our partners and networks bring this collective energy to life. For 20 years, we've been turning small steps into lasting, meaningful change, so that no citizen is left behind.
          </p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:24, marginBottom:36 }}>
          {testimonials.map(t => (
            <div key={t.name} className="tcard">
              <div style={{ fontSize:48, color:'#f97316', lineHeight:1, marginBottom:12, fontFamily:'serif' }}>"</div>
              <p style={{ fontSize:15, color:'#374151', lineHeight:1.75, marginBottom:24, fontStyle:'italic' }}>{t.quote}</p>
              <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                <img src={t.img} alt={t.name} style={{ width:44, height:44, borderRadius:'50%', objectFit:'cover' }} />
                <div>
                  <div style={{ fontWeight:600, fontSize:14, color:'#1e293b' }}>{t.name}</div>
                  <div style={{ fontSize:12, color:'#64748b' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign:'center' }}>
          <button className="btn-outline-o">About Us</button>
        </div>
      </div>
    </section>
  )
}
