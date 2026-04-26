import React from 'react'

export default function DigitSection() {
  return (
    <section style={{ background:'linear-gradient(135deg,#0f172a 0%,#1e293b 100%)', padding:'80px 24px', position:'relative', overflow:'hidden' }}>
      <style>{`
        .digit-btn{background:#f97316;color:#fff;border:none;border-radius:8px;padding:13px 28px;font-size:14px;font-weight:600;box-shadow:0 4px 16px rgba(249,115,22,.4);cursor:pointer;transition:all .2s;}
        .digit-btn:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(249,115,22,.5);}
        @media(max-width:768px){.digit-grid{grid-template-columns:1fr !important;} .digit-img{display:none !important;}}
      `}</style>
      <div style={{ position:'absolute', right:0, top:0, bottom:0, width:'45%', background:'radial-gradient(ellipse at right,rgba(249,115,22,.08) 0%,transparent 60%)' }} />
      <div className="digit-grid" style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center', position:'relative', zIndex:1 }}>
        <div>
          <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:24 }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:4, width:36 }}>
              {['#f97316','#3b82f6','#10b981','#8b5cf6'].map((c,i) => <div key={i} style={{ width:16, height:16, background:c, borderRadius:3 }} />)}
            </div>
            <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:26, color:'#fff' }}>DIGIT</span>
            <span style={{ fontSize:11, color:'rgba(255,255,255,.45)' }}>by eGov Foundation</span>
          </div>
          <p style={{ fontSize:13, fontWeight:500, color:'#f97316', letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:10 }}>Our open source</p>
          <h2 style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'clamp(26px,3.5vw,42px)', color:'#fff', lineHeight:1.2, marginBottom:22 }}>technology-for-good platform</h2>
          <p style={{ fontSize:15, color:'rgba(255,255,255,.6)', lineHeight:1.8, marginBottom:36 }}>
            DIGIT, short for Digital Infrastructure for Governance, Inclusion and Transformation is eGov's open-source platform with reusable building blocks and shared data registries that can be used to build solutions in multiple sectors.
          </p>
          <button className="digit-btn">Explore the platform</button>
        </div>
        <div className="digit-img" style={{ display:'flex', justifyContent:'center' }}>
          <div style={{ position:'relative', width:300, height:380, borderRadius:24, overflow:'hidden' }}>
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop" alt="Person using DIGIT" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(15,23,42,.7) 0%,transparent 60%)' }} />
            <div style={{ position:'absolute', bottom:24, left:16, right:16, background:'rgba(255,255,255,.12)', backdropFilter:'blur(12px)', border:'1px solid rgba(255,255,255,.2)', borderRadius:12, padding:'12px 14px', display:'flex', alignItems:'center', gap:10 }}>
              <div style={{ width:36, height:36, borderRadius:8, background:'#f97316', display:'flex', alignItems:'center', justifyContent:'center', fontSize:16 }}>📱</div>
              <div>
                <div style={{ color:'#fff', fontWeight:600, fontSize:12 }}>Accessible on any device</div>
                <div style={{ color:'rgba(255,255,255,.6)', fontSize:11 }}>Mobile-first for all citizens</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
