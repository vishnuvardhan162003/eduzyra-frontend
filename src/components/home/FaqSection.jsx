import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '../common/SectionHeading'
import { FAQS } from '../../constants/faqs'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="border-t border-slate-200/80 bg-[#FAF7F2] py-16 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Got Questions?"
          title="Questions learners ask us"
          description="Everything you need to know about cohorts, review checkpoints, and career support."
          align="center"
        />

        <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-3xl border transition-all duration-200 ${
                  isOpen
                    ? 'border-circle-teal/40 bg-white shadow-card'
                    : 'border-slate-200/90 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-7 py-5 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className={`font-display text-sm sm:text-base font-bold ${isOpen ? 'text-circle-teal' : 'text-[#1D353A]'}`}>
                    {faq.question}
                  </span>
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${
                    isOpen ? 'bg-peach/30 text-[#A75B3A]' : 'bg-[#FAF7F2] text-slate-500'
                  }`}>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-slate-100 px-7 py-5 bg-[#FAF7F2]/40">
                    <p className="text-sm leading-relaxed text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
