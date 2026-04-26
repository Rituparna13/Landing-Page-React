import React from 'react'

export default function Hero() {
  return (
    <section style={{ paddingTop:64, background:'linear-gradient(135deg,#ffffff 0%,#f0f9ff 50%,#fef3c7 100%)', minHeight:'90vh', display:'flex', alignItems:'center', position:'relative', overflow:'hidden' }}>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes floatUp { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        .hero-left { animation: fadeUp .7s ease both; }
        .hero-right { animation: fadeUp .7s .2s ease both; }
        .stat-float-1 { animation: floatUp 3s ease-in-out infinite; }
        .stat-float-2 { animation: floatUp 3s 1.5s ease-in-out infinite; }
        .btn-primary { background:#f97316; color:#fff; border:none; border-radius:8px; padding:13px 28px; font-size:14px; font-weight:600; box-shadow:0 4px 16px rgba(249,115,22,.4); transition:all .2s; cursor:pointer; }
        .btn-primary:hover { background:#ea6c0a; transform:translateY(-2px); box-shadow:0 8px 24px rgba(249,115,22,.5); }
        .btn-outline { background:transparent; color:#374151; border:1.5px solid #cbd5e1; border-radius:8px; padding:13px 28px; font-size:14px; font-weight:600; transition:all .2s; cursor:pointer; }
        .btn-outline:hover { border-color:#f97316; color:#f97316; }
        @media(max-width:768px){ .hero-grid{ flex-direction:column !important; } .hero-right-wrap{ display:none !important; } }
      `}</style>

      {/* BG shapes */}
      <div style={{ position:'absolute', top:0, right:0, width:'52%', height:'100%', background:'linear-gradient(135deg,#dbeafe 0%,#e0f2fe 50%,#cffafe 100%)', clipPath:'polygon(15% 0,100% 0,100% 100%,0% 100%)', zIndex:0 }} />
      <div style={{ position:'absolute', top:'10%', right:'5%', width:320, height:320, background:'radial-gradient(circle,rgba(249,115,22,.12) 0%,transparent 70%)', borderRadius:'50%', zIndex:0 }} />

      <div className="hero-grid" style={{ maxWidth:1200, margin:'0 auto', padding:'60px 24px', display:'flex', alignItems:'center', gap:60, width:'100%', position:'relative', zIndex:1 }}>
        {/* Left */}
        <div className="hero-left" style={{ flex:1 }}>
          <div style={{ display:'inline-block', background:'rgba(249,115,22,.1)', border:'1px solid rgba(249,115,22,.3)', borderRadius:20, padding:'4px 14px', fontSize:12, fontWeight:600, color:'#ea580c', marginBottom:16, letterSpacing:'0.05em', textTransform:'uppercase' }}>
            20 Years of Digital Transformation
          </div>
          <h1 style={{ fontSize:'clamp(30px,4vw,50px)', fontWeight:400, lineHeight:1.25, color:'#1e293b', marginBottom:6 }}>
            20 years of digital<br />transformation in<br />public service delivery
          </h1>
          <div style={{ fontSize:'clamp(30px,4vw,50px)', fontFamily:'var(--font-display)', fontWeight:700, color:'#f97316', marginBottom:22, lineHeight:1.2 }}>
            It's possible.
          </div>
          <p style={{ fontSize:15, color:'#64748b', lineHeight:1.75, maxWidth:480, marginBottom:36 }}>
            Catalysts. Ecosystem enablers. Problem Solvers. At eGov, we're driven by the power of open digital infrastructure and ecosystems to enable governments deliver accessible, inclusive and transparent services to every citizen.
          </p>
          <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
            <button className="btn-primary">Our Approach</button>
            <button className="btn-outline">Our Impact</button>
          </div>
        </div>

        {/* Right */}
        <div className="hero-right hero-right-wrap" style={{ flex:1, display:'flex', justifyContent:'center' }}>
          <div style={{ position:'relative', width:'100%', maxWidth:460 }}>
            <div style={{ borderRadius:24, overflow:'hidden', boxShadow:'0 24px 64px rgba(0,0,0,.15)', background:'linear-gradient(135deg,#1e40af 0%,#0d9488 100%)', height:380, position:'relative' }}>
              <img src="https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?w=500&h=380&fit=crop" alt="Citizens" style={{ width:'100%', height:'100%', objectFit:'cover', mixBlendMode:'luminosity', opacity:.65 }} />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg,rgba(30,64,175,.55) 0%,rgba(13,148,136,.35) 100%)' }} />
              <div style={{ position:'absolute', bottom:24, left:24, right:24, background:'rgba(255,255,255,.13)', backdropFilter:'blur(12px)', borderRadius:12, padding:'16px 20px', border:'1px solid rgba(255,255,255,.2)' }}>
                <div style={{ fontSize:26, fontWeight:800, color:'#fff' }}>1,000,000,100+</div>
                <div style={{ fontSize:12, color:'rgba(255,255,255,.8)' }}>Citizens availing public services through eGov's Digital Public Goods (DPG)</div>
              </div>
            </div>

            <div className="stat-float-1" style={{ position:'absolute', top:-20, right:-20, background:'#fff', borderRadius:12, padding:'12px 18px', boxShadow:'0 8px 24px rgba(0,0,0,.12)' }}>
              <div style={{ fontSize:20, fontWeight:800, color:'#f97316' }}>1.1 Billion+</div>
              <div style={{ fontSize:11, color:'#64748b' }}>Public services delivered</div>
            </div>
            <div className="stat-float-2" style={{ position:'absolute', bottom:-20, left:-20, background:'#fff', borderRadius:12, padding:'12px 18px', boxShadow:'0 8px 24px rgba(0,0,0,.12)' }}>
              <div style={{ fontSize:20, fontWeight:800, color:'#1e40af' }}>50+ partners</div>
              <div style={{ fontSize:11, color:'#64748b' }}>From technology & governments</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
