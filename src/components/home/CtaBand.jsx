import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-circle-teal py-20 sm:py-24 text-white">
      <div className="container-page relative flex flex-col items-center gap-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur">
          <Sparkles size={14} className="text-peach" />
          <span>Next cohort opens soon</span>
        </div>

        <h2 className="max-w-2xl text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl tracking-tight">
          Your next path starts with one enrollment.
        </h2>

        <p className="max-w-lg text-base sm:text-lg leading-relaxed text-white/85">
          Seats are limited per cohort so mentor reviews stay meaningful and deeply personalized. Reserve yours today.
        </p>

        <div className="pt-3">
          <Link
            to="/courses"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-peach px-8 py-4 font-display text-xs font-extrabold uppercase tracking-widest text-[#1D353A] shadow-pill transition-all duration-200 hover:bg-[#DE997B] hover:shadow-lg active:scale-95"
          >
            <span>Browse courses</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
