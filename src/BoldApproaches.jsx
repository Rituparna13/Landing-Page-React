import React, { useState } from 'react'

const areas = ['Public Health','Public Finance','Local Governance','Water & Sanitation']

export default function BoldApproaches() {
  const [active, setActive] = useState(0)
  return (
    <section style={{ padding:'80px 24px', background:'#fff' }}>
      <style>{`
        .area-btn{padding:14px 20px;border-radius:10px;border:2px solid #e2e8f0;background:#fff;color:#475569;font-weight:400;font-size:15px;text-align:left;transition:all .2s;cursor:pointer;display:flex;align-items:center;gap:10px;width:100%;}
        .area-btn.active{border-color:#f97316;background:#fff7ed;color:#f97316;font-weight:600;}
        @media(max-width:768px){.bold-grid{grid-template-columns:1fr !important;}}
      `}</style>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <div className="bold-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }}>
          <div>
            <p style={{ fontSize:12, fontWeight:600, color:'#64748b', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:12 }}>Our Focus Areas</p>
            <h2 style={{ fontWeight:300, fontSize:'clamp(26px,3vw,38px)', color:'#1e293b', marginBottom:4 }}>Big problems need</h2>
            <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'clamp(26px,3vw,38px)', color:'#f97316', marginBottom:36 }}>bold approaches</div>
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {areas.map((a, i) => (
                <button key={a} className={`area-btn${active===i?' active':''}`} onClick={() => setActive(i)}>
                  <span style={{ width:8, height:8, borderRadius:'50%', background:active===i?'#f97316':'#cbd5e1', flexShrink:0, transition:'all .2s' }} />
                  {a}
                </button>
              ))}
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }}>
            <div style={{ background:'linear-gradient(135deg,#1e40af 0%,#1d4ed8 100%)', borderRadius:20, padding:'28px 24px', color:'#fff', boxShadow:'0 12px 40px rgba(30,64,175,.3)' }}>
              <div style={{ fontSize:38, fontWeight:900, marginBottom:8 }}>210+</div>
              <div style={{ fontSize:13, opacity:.8, lineHeight:1.5 }}>Cities live with DIGIT across India</div>
              <div style={{ marginTop:20, borderRadius:10, overflow:'hidden', height:90, background:'rgba(255,255,255,.1)' }}>
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=90&fit=crop" alt="" style={{ width:'100%', height:'100%', objectFit:'cover', opacity:.5 }} />
              </div>
            </div>
            <div style={{ background:'linear-gradient(135deg,#0d9488 0%,#14b8a6 100%)', borderRadius:20, padding:'28px 24px', color:'#fff', boxShadow:'0 12px 40px rgba(13,148,136,.3)' }}>
              <div style={{ fontSize:38, fontWeight:900, marginBottom:8 }}>2 Bn</div>
              <div style={{ fontSize:13, opacity:.8, lineHeight:1.5 }}>Citizens enabled on solutions</div>
              <div style={{ marginTop:20, borderRadius:10, overflow:'hidden', height:90, background:'rgba(255,255,255,.1)' }}>
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=90&fit=crop" alt="" style={{ width:'100%', height:'100%', objectFit:'cover', opacity:.5 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
