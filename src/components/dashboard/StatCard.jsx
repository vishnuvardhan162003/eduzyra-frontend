export default function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="card-surface flex items-center gap-4 p-5 sm:p-6 border border-slate-200/80 hover:border-slate-300 transition-all duration-200">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 border border-teal-200/50 shadow-xs">
        <Icon size={22} />
      </span>
      <div>
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">{label}</p>
        <p className="font-display text-2xl font-extrabold text-navy-900 mt-0.5">{value}</p>
      </div>
    </div>
  )
}
