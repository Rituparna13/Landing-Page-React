import React from 'react'

const supporters = [
  { name:'Omidyar Network', logo:'◎' },
  { name:'Bill & Melinda Gates Foundation', logo:'⊕' },
  { name:'Tata Trusts', logo:'T' },
  { name:'The Rockefeller Foundation', logo:'◆' },
  { name:'National Health Authority', logo:'NH' },
]

const footerLinks = ['Home','Our People','Our Impact','Financials','DIGIT Sandbox','Contact Us']

export default function Footer() {
  return (
    <>
      <style>{`
        .supporter{display:flex;align-items:center;gap:10px;padding:12px 20px;border-radius:10px;border:1px solid #e2e8f0;color:#475569;font-size:14px;font-weight:500;transition:all .2s;cursor:pointer;}
        .supporter:hover{border-color:#f97316;color:#f97316;}
        .flink{display:block;font-size:13px;color:#64748b;margin-bottom:10px;background:none;border:none;text-align:left;cursor:pointer;transition:color .2s;}
        .flink:hover{color:#f97316;}
        .social{width:32px;height:32px;border-radius:50%;background:#e2e8f0;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#475569;cursor:pointer;transition:all .2s;border:none;}
        .social:hover{background:#f97316;color:#fff;}
        .email-input{flex:1;padding:10px 14px;border-radius:8px;border:1.5px solid #e2e8f0;font-size:13px;outline:none;transition:border-color .2s;}
        .email-input:focus{border-color:#f97316;}
        @media(max-width:768px){.footer-grid{grid-template-columns:1fr !important;}}
      `}</style>

      {/* Supporters */}
      <section style={{ padding:'60px 24px', background:'#fff', borderTop:'1px solid #e2e8f0' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <h3 style={{ fontSize:22, fontWeight:300, color:'#1e293b', marginBottom:2 }}>Our</h3>
          <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:22, color:'#1e293b', marginBottom:32 }}>Supporters</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:16, alignItems:'center' }}>
            {supporters.map(s => (
              <div key={s.name} className="supporter">
                <span style={{ fontSize:18, color:'#94a3b8' }}>{s.logo}</span>
                {s.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background:'#f8fafc', padding:'48px 24px 24px', borderTop:'1px solid #e2e8f0' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div className="footer-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:40, marginBottom:40 }}>
            {/* Brand */}
            <div>
              <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:16 }}>
                <div style={{ background:'linear-gradient(135deg,#f97316,#ea580c)', borderRadius:6, padding:'4px 8px', fontWeight:800, fontSize:14, color:'#fff' }}>eGOV</div>
                <span style={{ fontSize:10, color:'#94a3b8', fontWeight:500, textTransform:'uppercase', letterSpacing:'0.05em' }}>Foundation</span>
              </div>
              <p style={{ fontSize:13, color:'#64748b', lineHeight:1.75, marginBottom:20 }}>Catalyzing digital transformation in public service delivery at speed &amp; scale.</p>
              <div style={{ display:'flex', gap:8 }}>
                {['f','𝕏','in','▶'].map(icon => <button key={icon} className="social">{icon}</button>)}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 style={{ fontSize:14, fontWeight:600, color:'#1e293b', marginBottom:16 }}>Useful Links</h4>
              {footerLinks.map(l => <button key={l} className="flink">{l}</button>)}
            </div>

            {/* Subscribe */}
            <div>
              <h4 style={{ fontSize:14, fontWeight:600, color:'#1e293b', marginBottom:8 }}>Subscribe Now</h4>
              <p style={{ fontSize:13, color:'#64748b', marginBottom:16, lineHeight:1.65 }}>Receive regular updates of our monthly newsletter DOT – in your inbox.</p>
              <div style={{ display:'flex', gap:8 }}>
                <input type="email" placeholder="Your email address" className="email-input" />
                <button style={{ background:'#f97316', color:'#fff', border:'none', borderRadius:8, padding:'10px 16px', fontSize:18, cursor:'pointer' }}>→</button>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div style={{ borderTop:'1px solid #e2e8f0', paddingTop:20, display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:8 }}>
            <div style={{ fontSize:12, color:'#94a3b8' }}>© 2026 eGov. All Rights Reserved.</div>
            <div style={{ display:'flex', gap:20 }}>
              {['Privacy Policy','Terms and Conditions'].map(item => (
                <button key={item} className="flink" style={{ marginBottom:0, fontSize:12 }}>{item}</button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
