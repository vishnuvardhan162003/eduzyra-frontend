import { ClipboardList, Code2, UsersRound, Rocket } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'

const STEPS = [
  {
    icon: ClipboardList,
    title: 'Pick a path',
    description: 'Choose a course scoped around one real outcome — not a topic, an outcome.',
  },
  {
    icon: Code2,
    title: 'Build weekly',
    description: 'Ship a working piece of the project every week, guided by structured lessons.',
  },
  {
    icon: UsersRound,
    title: 'Get reviewed',
    description: 'A mentor reviews your work at each checkpoint — not just an auto-graded quiz.',
  },
  {
    icon: Rocket,
    title: 'Ship the capstone',
    description: 'Finish with a portfolio-ready project you can point to in interviews.',
  },
]

export default function HowItWorks() {
  return (
    <section className="border-y border-slate-200/80 bg-[#FAF7F2] py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Structured Learning"
          title="Every path follows the same four checkpoints"
          description="Designed to turn theoretical knowledge into tangible, production-grade applications you can showcase."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <div
              key={step.title}
              className="card-surface relative flex flex-col gap-4 p-7 hover:-translate-y-1 transition-all duration-300 rounded-3xl border border-slate-200/90 bg-white"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-peach/20 text-[#1D353A] border border-peach/40 shadow-xs">
                  <step.icon size={22} className="text-[#A75B3A]" />
                </div>
                <span className="font-mono text-xs font-bold text-[#1D353A]/60 bg-[#FAF7F2] px-3 py-1 rounded-full">
                  STEP 0{index + 1}
                </span>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-[#1D353A]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
