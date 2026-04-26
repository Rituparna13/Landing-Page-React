import React, { useState, useEffect, useMemo } from 'react'
import { PRODUCTS, CATEGORIES } from './data'

function SkeletonCard() {
  return (
    <div style={{ background:'#fff', borderRadius:16, border:'1px solid #e2e8f0', overflow:'hidden' }}>
      <div style={{ height:180, background:'linear-gradient(90deg,#f1f5f9 25%,#e2e8f0 50%,#f1f5f9 75%)', backgroundSize:'400px 100%', animation:'shimmer 1.4s ease-in-out infinite' }} />
      <div style={{ padding:'20px 16px' }}>
        {[80,55,90].map((w,i) => (
          <div key={i} style={{ height:i===0?18:12, width:`${w}%`, borderRadius:6, background:'linear-gradient(90deg,#f1f5f9 25%,#e2e8f0 50%,#f1f5f9 75%)', backgroundSize:'400px 100%', animation:'shimmer 1.4s ease-in-out infinite', marginBottom:10 }} />
        ))}
      </div>
    </div>
  )
}

function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false)
  const isFree = product.priceValue === 0
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:'#fff', borderRadius:16,
        border:`1.5px solid ${hovered?'#f97316':'#e2e8f0'}`,
        overflow:'hidden', cursor:'pointer',
        transition:'all .3s ease',
        transform:hovered?'translateY(-6px)':'none',
        boxShadow:hovered?'0 16px 48px rgba(249,115,22,.14)':'0 2px 8px rgba(0,0,0,.04)',
        animation:`fadeUp .5s ${index*.08}s ease both`,
        display:'flex', flexDirection:'column',
      }}
    >
      <div style={{ position:'relative', height:180, overflow:'hidden' }}>
        <img src={product.image} alt={product.name} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform .4s ease', transform:hovered?'scale(1.06)':'scale(1)' }} />
        <div style={{ position:'absolute', top:12, left:12, background:isFree?'#10b981':'#f97316', color:'#fff', borderRadius:20, padding:'3px 12px', fontSize:12, fontWeight:700 }}>
          {product.price}
        </div>
        <div style={{ position:'absolute', top:12, right:12, background:'rgba(255,255,255,.92)', borderRadius:20, padding:'3px 10px', fontSize:11, fontWeight:500, color:'#64748b' }}>
          {product.category}
        </div>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(0,0,0,.25) 0%,transparent 60%)' }} />
      </div>

      <div style={{ padding:'20px 20px 24px', flex:1, display:'flex', flexDirection:'column' }}>
        <h3 style={{ fontSize:15, fontWeight:600, color:'#1e293b', lineHeight:1.45, marginBottom:10, display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden' }}>{product.name}</h3>
        <p style={{ fontSize:13, color:'#64748b', lineHeight:1.65, marginBottom:14, display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden', flex:1 }}>{product.description}</p>

        {product.tags?.length > 0 && (
          <div style={{ display:'flex', flexWrap:'wrap', gap:5, marginBottom:14 }}>
            {product.tags.slice(0,3).map(tag => (
              <span key={tag} style={{ background:'#f1f5f9', color:'#475569', borderRadius:4, padding:'2px 8px', fontSize:11, fontWeight:500 }}>• {tag}</span>
            ))}
          </div>
        )}

        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', paddingTop:14, borderTop:'1px solid #f1f5f9' }}>
          <div>
            <div style={{ fontSize:11, color:'#94a3b8' }}>{product.author} · {product.date}</div>
            <div style={{ fontSize:11, color:'#94a3b8' }}>{product.readTime}</div>
          </div>
          <div style={{ fontSize:17, fontWeight:800, color:isFree?'#10b981':'#f97316' }}>{product.price}</div>
        </div>
      </div>
    </div>
  )
}

export default function LatestAtEGov() {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchFocused, setSearchFocused] = useState(false)

  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => { setProducts(PRODUCTS); setLoading(false) }, 1600)
    return () => clearTimeout(t)
  }, [])

  const filtered = useMemo(() => products.filter(p => {
    const q = search.toLowerCase()
    const matchSearch = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.tags.some(t => t.toLowerCase().includes(q))
    const matchCat = activeCategory==='All' || p.category===activeCategory
    return matchSearch && matchCat
  }), [products, search, activeCategory])

  return (
    <section style={{ padding:'80px 24px', background:'#fafafa' }}>
      <style>{`
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        @keyframes shimmer{0%{background-position:-400px 0}100%{background-position:400px 0}}
        .cat-btn{padding:7px 18px;border-radius:24px;font-size:13px;font-weight:500;border:1.5px solid #e2e8f0;background:#fff;color:#64748b;cursor:pointer;transition:all .2s;white-space:nowrap;}
        .cat-btn:hover{border-color:#f97316;color:#f97316;}
        .cat-btn.active{border-color:#f97316;background:#f97316;color:#fff;}
        .see-all-btn{padding:13px 40px;background:transparent;border:2px solid #f97316;color:#f97316;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;transition:all .2s;}
        .see-all-btn:hover{background:#f97316;color:#fff;}
        .reset-btn{padding:10px 20px;background:#f97316;color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;}
        .clear-btn{padding:10px 20px;background:#f1f5f9;color:#475569;border:none;border-radius:8px;font-size:13px;font-weight:500;cursor:pointer;}
      `}</style>

      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        {/* Heading */}
        <div style={{ marginBottom:36 }}>
          <div style={{ display:'flex', alignItems:'baseline', gap:8, flexWrap:'wrap' }}>
            <h2 style={{ fontWeight:300, fontSize:'clamp(22px,3vw,34px)', color:'#1e293b' }}>Latest at</h2>
            <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'clamp(22px,3vw,34px)', background:'linear-gradient(135deg,#f97316,#ea580c)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>eGov</span>
          </div>
          <p style={{ fontSize:14, color:'#64748b', marginTop:6 }}>Insights, research, and resources from our 20-year journey</p>
        </div>

        {/* Search */}
        <div style={{ position:'relative', marginBottom:20 }}>
          <span style={{ position:'absolute', left:16, top:'50%', transform:'translateY(-50%)', fontSize:16, color:'#94a3b8' }}>🔍</span>
          <input
            type="text" placeholder="Search by name, topic, or tag..."
            value={search} onChange={e => setSearch(e.target.value)}
            onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)}
            style={{ width:'100%', padding:'13px 16px 13px 46px', border:`2px solid ${searchFocused?'#f97316':'#e2e8f0'}`, borderRadius:12, fontSize:14, outline:'none', background:'#fff', color:'#1e293b', transition:'all .2s', boxShadow:searchFocused?'0 0 0 4px rgba(249,115,22,.1)':'none' }}
          />
          {search && (
            <button onClick={() => setSearch('')} style={{ position:'absolute', right:12, top:'50%', transform:'translateY(-50%)', background:'#f1f5f9', border:'none', borderRadius:'50%', width:24, height:24, cursor:'pointer', fontSize:14, color:'#64748b' }}>×</button>
          )}
        </div>

        {/* Category filters */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:36, borderBottom:'1px solid #e2e8f0', paddingBottom:24 }}>
          {CATEGORIES.map(cat => (
            <button key={cat} className={`cat-btn${activeCategory===cat?' active':''}`} onClick={() => setActiveCategory(cat)}>{cat}</button>
          ))}
        </div>

        {/* Result count */}
        {!loading && (
          <div style={{ marginBottom:18, fontSize:13, color:'#94a3b8' }}>
            <strong style={{ color:'#475569' }}>{filtered.length}</strong> result{filtered.length!==1?'s':''} found
            {search && <> for "<strong style={{ color:'#f97316' }}>{search}</strong>"</>}
            {activeCategory!=='All' && <> in <strong style={{ color:'#1e40af' }}>{activeCategory}</strong></>}
          </div>
        )}

        {/* Skeleton loading */}
        {loading && (
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(290px,1fr))', gap:24 }}>
            {[1,2,3,4,5,6].map(i => <SkeletonCard key={i} />)}
          </div>
        )}

        {/* Product grid */}
        {!loading && filtered.length > 0 && (
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(290px,1fr))', gap:24 }}>
            {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        )}

        {/* No results */}
        {!loading && filtered.length === 0 && (
          <div style={{ textAlign:'center', padding:'80px 24px', background:'#fff', borderRadius:20, border:'2px dashed #e2e8f0' }}>
            <div style={{ fontSize:60, marginBottom:16 }}>🔍</div>
            <h3 style={{ fontSize:20, fontWeight:600, color:'#1e293b', marginBottom:8 }}>No results found</h3>
            <p style={{ fontSize:14, color:'#64748b', marginBottom:28 }}>We couldn't find anything matching your search. Try different keywords or clear your filters.</p>
            <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
              <button className="clear-btn" onClick={() => setSearch('')}>Clear Search</button>
              <button className="reset-btn" onClick={() => { setSearch(''); setActiveCategory('All') }}>Reset All Filters</button>
            </div>
          </div>
        )}

        {/* See all */}
        {!loading && filtered.length > 0 && (
          <div style={{ textAlign:'center', marginTop:48 }}>
            <button className="see-all-btn">See All</button>
          </div>
        )}
      </div>
    </section>
  )
}
