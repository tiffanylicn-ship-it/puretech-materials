'use client'

interface GradeData {
  grade: string; purity: string; metals: string
  particles: string; water: string; node: string
  color: string; barW: number
}

const GRADES: GradeData[] = [
  { grade:'G1', purity:'≥99.0%',    metals:'≤50 ppb',   particles:'≤500/mL', water:'≤500 ppm', node:'PCB / Display / Solar',  color:'#1E3A5F', barW:38 },
  { grade:'G2', purity:'≥99.9%',    metals:'≤10 ppb',   particles:'≤100/mL', water:'≤50 ppm',  node:'≥180nm Mature Node',     color:'#003DA5', barW:52 },
  { grade:'G3', purity:'≥99.99%',   metals:'≤2 ppb',    particles:'≤20/mL',  water:'≤20 ppm',  node:'45–180nm',               color:'#0050C8', barW:66 },
  { grade:'G4', purity:'≥99.999%',  metals:'≤0.5 ppb',  particles:'≤10/mL',  water:'≤10 ppm',  node:'7–45nm',                 color:'#0066CC', barW:80 },
  { grade:'G5', purity:'≥99.9999%', metals:'<0.1 ppb',  particles:'≤5/mL',   water:'≤5 ppm',   node:'<7nm / EUV / Marangoni', color:'#0099E8', barW:100 },
]

export function GradeCompareChart({ showG1 = true }: { showG1?: boolean }) {
  const grades = showG1 ? GRADES : GRADES.slice(1)
  return (
    <div className="overflow-hidden rounded-[14px] border border-[rgba(0,102,204,0.12)]"
      style={{ boxShadow:'0 1px 4px rgba(4,13,30,0.05)' }}>
      <div className="bg-[#0A1628] px-5 py-3 flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/65">
          Electronic Grade Purity Comparison — SEMI C1 Standard
        </span>
        <span className="text-[10px] font-mono text-[#4BAAF5]/60">G1 → G5</span>
      </div>
      <div className="grid text-[10px] font-semibold uppercase tracking-[0.09em] px-5 py-2.5 bg-[#F2F6FB]"
        style={{ gridTemplateColumns:'64px 1fr 100px 100px 90px 120px', color:'#8BA8C0', borderBottom:'1px solid rgba(0,102,204,0.1)' }}>
        <span>Grade</span><span>Purity (GC)</span><span>Metals (ICP)</span><span>Particles</span><span>Water (KF)</span><span>Process Node</span>
      </div>
      {grades.map((g, i) => (
        <div key={g.grade} className="grid items-center px-5 py-3.5 transition-colors hover:bg-[#F7FBFF]"
          style={{ gridTemplateColumns:'64px 1fr 100px 100px 90px 120px', borderBottom: i < grades.length-1 ? '1px solid rgba(0,102,204,0.07)' : 'none',
            background: g.grade==='G5' ? 'rgba(0,153,232,0.04)' : g.grade==='G1' ? 'rgba(30,58,95,0.03)' : 'white' }}>
          <div>
            <span className="inline-flex items-center px-2.5 py-1 rounded-[5px] font-mono text-[12px] font-bold text-white"
              style={{ background:g.color }}>{g.grade}</span>
          </div>
          <div className="flex items-center gap-2.5 pr-4">
            <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background:'rgba(0,102,204,0.1)' }}>
              <div className="h-full rounded-full" style={{ width:`${g.barW}%`, background:`linear-gradient(90deg,${g.color},${g.color}BB)` }}/>
            </div>
            <span className="font-mono text-[12px] font-semibold whitespace-nowrap flex-shrink-0"
              style={{ color: g.grade==='G5' ? '#0099E8' : g.grade==='G1' ? '#506880' : '#0A1628' }}>{g.purity}</span>
          </div>
          <span className="font-mono text-[12px]" style={{ color: g.grade==='G5'||g.grade==='G4' ? '#0055CC' : '#506880' }}>{g.metals}</span>
          <span className="font-mono text-[12px] text-[#506880]">{g.particles}</span>
          <span className="font-mono text-[12px] text-[#506880]">{g.water}</span>
          <span className="text-[11px] text-[#3A5570] leading-tight">{g.node}</span>
        </div>
      ))}
      <div className="px-5 py-3 bg-[#F2F6FB]" style={{ borderTop:'1px solid rgba(0,102,204,0.08)' }}>
        <p className="text-[11px] text-[#8BA8C0] leading-[1.6]">
          All grades tested by ICP-MS (28 elements), in-line LPC (ISO Class 3 fill), and Karl Fischer titration. G5 = SEMI C1 Tier D. Full CoA per lot.
          &nbsp;<a href="/contact" className="text-[#0066CC] no-underline hover:underline font-medium">Request CoA template →</a>
        </p>
      </div>
    </div>
  )
}

export function GradeScale({ grades, active }: { grades: string[]; active?: string }) {
  return (
    <div className="flex items-center gap-1">
      {GRADES.map(g => {
        const has = grades.includes(g.grade)
        const isActive = active === g.grade
        return (
          <div key={g.grade} title={has ? `${g.purity} · ${g.metals}` : 'Not available'}
            className="flex items-center justify-center rounded-[4px] font-mono text-[9.5px] font-bold"
            style={{ width:28, height:20, background: has?(isActive?g.color:`${g.color}22`):'rgba(0,0,0,0.04)', color: has?(isActive?'white':g.color):'#C5D8E8', border:`1px solid ${has?`${g.color}50`:'rgba(0,0,0,0.06)'}`, opacity: has?1:0.4 }}>
            {g.grade}
          </div>
        )
      })}
    </div>
  )
}
