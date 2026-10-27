import { Search } from 'lucide-react'
import { CATEGORIES } from '../../constants/courses'

export default function CourseFilters({ category, onCategoryChange, query, onQueryChange }) {
  return (
    <div className="flex flex-col gap-5 border-b border-slate-200/80 pb-6">
      <div className="relative w-full sm:max-w-md">
        <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search courses, skills, or mentors..."
          className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-5 text-sm outline-none transition-all focus:border-circle-teal focus:ring-2 focus:ring-circle-teal/20 shadow-xs"
        />
      </div>

      <div className="flex flex-wrap gap-2.5">
        {CATEGORIES.map((item) => {
          const isActive = category === item
          return (
            <button
              key={item}
              type="button"
              onClick={() => onCategoryChange(item)}
              className={`rounded-full border px-5 py-2 font-display text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                isActive
                  ? 'border-circle-teal bg-circle-teal text-white shadow-xs'
                  : 'border-slate-200 bg-white text-[#1D353A]/70 hover:border-slate-300 hover:bg-[#FAF7F2]'
              }`}
            >
              {item}
            </button>
          )
        })}
      </div>
    </div>
  )
}
