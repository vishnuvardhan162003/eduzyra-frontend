const PARTNERS = [
  'Nimbus Labs',
  'Fielddesk',
  'Vertek',
  'Marrow',
  'Cloudscript',
  'Haven Retail',
]

export default function TrustStrip() {
  return (
    <section className="border-b border-slate-200/80 bg-[#FAF7F2] py-10">
      <div className="container-page">
        <p className="text-center font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#1D353A]/50">
          Graduates now building at
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {PARTNERS.map((name) => (
            <span
              key={name}
              className="font-display text-sm font-bold tracking-tight text-[#1D353A]/60 transition-colors hover:text-[#1D353A] cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
