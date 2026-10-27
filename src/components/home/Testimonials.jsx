import { Star, Quote } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'

const TESTIMONIALS = [
  {
    quote:
      'The weekly checkpoints kept me honest. By week 6 I had a real project, not a folder of exercises.',
    name: 'Priya Nambiar',
    initials: 'PN',
    role: 'Frontend Engineer, Fielddesk',
    course: 'React for Production Teams',
  },
  {
    quote:
      'Mentor reviews caught habits I did not know I had. That feedback loop is the whole value.',
    name: 'Arjun Bhatt',
    initials: 'AB',
    role: 'Data Analyst, Vertek',
    course: 'Applied Data Analysis with Python',
  },
  {
    quote:
      'I have taken other design courses before — this is the first one that ended with a system I actually reuse.',
    name: 'Meher Kapoor',
    initials: 'MK',
    role: 'Product Designer, Nimbus Labs',
    course: 'Design Systems & UI Craft',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container-page">
        <SectionHeading
          eyebrow="From the cohort"
          title="Learners who finished the path"
          description="Hear from alumni who transitioned to top product teams after completing their capstone."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <figure
              key={item.name}
              className="card-surface relative flex flex-col justify-between p-7 sm:p-8 hover:-translate-y-1 transition-all duration-300 rounded-3xl border border-slate-200/90 bg-[#FAF7F2]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={15} className="fill-peach text-peach" />
                    ))}
                  </div>
                  <Quote size={22} className="text-[#1D353A]/20" />
                </div>

                <blockquote className="text-base leading-relaxed text-[#1D353A]/85 font-medium">
                  “{item.quote}”
                </blockquote>
              </div>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-200/60 pt-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-circle-teal text-xs font-bold text-white shadow-xs">
                  {item.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-display text-sm font-bold text-[#1D353A] truncate">{item.name}</p>
                  <p className="text-xs text-slate-500 truncate">{item.role}</p>
                  <p className="mt-0.5 font-mono text-[11px] font-bold text-circle-teal truncate">{item.course}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
