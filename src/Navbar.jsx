import React, { useState, useEffect } from 'react'

const navLinks = ['About Us', 'Areas of work', 'Products & Solutions', 'Our Platform', 'Ecosystem', 'Resources']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        .nav-link { padding:6px 12px; font-size:13px; font-weight:500; color:#374151; border-radius:6px; white-space:nowrap; transition:all .2s; background:transparent; border:none; }
        .nav-link:hover { background:#f1f5f9; color:#f97316; }
        .social-icon { width:32px; height:32px; border-radius:50%; background:#e2e8f0; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:700; color:#475569; cursor:pointer; transition:all .2s; border:none; }
        .social-icon:hover { background:#f97316; color:#fff; }
        @media(max-width:900px){ .desktop-nav{ display:none !important; } .menu-btn{ display:block !important; } }
        @keyframes slideDown { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      <nav style={{
        position:'fixed', top:0, left:0, right:0, zIndex:1000,
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.95)',
        backdropFilter:'blur(12px)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        transition:'all .3s ease',
        borderBottom: scrolled ? '1px solid #e2e8f0' : 'none',
      }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 24px', display:'flex', alignItems:'center', justifyContent:'space-between', height:64 }}>
          {/* Logo */}
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <div style={{ background:'linear-gradient(135deg,#f97316,#ea580c)', borderRadius:8, padding:'6px 10px', fontWeight:800, fontSize:16, color:'#fff', letterSpacing:'-0.5px' }}>eGOV</div>
            <span style={{ fontSize:10, color:'#64748b', fontWeight:500, letterSpacing:'0.05em', textTransform:'uppercase' }}>FOUNDATION</span>
          </div>

          {/* Desktop nav */}
          <div className="desktop-nav" style={{ display:'flex', alignItems:'center', gap:2 }}>
            {navLinks.map(link => <button key={link} className="nav-link">{link}</button>)}
          </div>

          {/* Right side */}
          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            <button className="nav-link">Events</button>
            <button className="nav-link">Contact us</button>
            <div style={{ background:'#f1f5f9', borderRadius:20, padding:'4px 10px', fontSize:12, fontWeight:600, color:'#374151' }}>ENG ▾</div>
            <button className="menu-btn" style={{ display:'none', background:'none', border:'none', fontSize:22, color:'#374151', padding:4 }} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background:'#fff', borderTop:'1px solid #e2e8f0', padding:'16px 24px', animation:'slideDown .2s ease' }}>
            {navLinks.map(link => (
              <button key={link} style={{ display:'block', width:'100%', textAlign:'left', padding:'10px 0', background:'none', border:'none', fontSize:14, color:'#374151', borderBottom:'1px solid #f1f5f9' }}>{link}</button>
            ))}
          </div>
        )}
      </nav>
    </>
  )
}
