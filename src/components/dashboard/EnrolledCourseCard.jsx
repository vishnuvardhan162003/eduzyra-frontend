import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function EnrolledCourseCard({ course, progress }) {
  return (
    <div className="card-surface flex flex-col gap-4 p-6 border border-slate-200/80 hover:border-teal-500/30 hover:shadow-card-hover transition-all duration-300">
      <div className="flex items-center justify-between">
        <span className="eyebrow !text-[11px] bg-slate-100 px-2.5 py-0.5 rounded-md text-navy-700">
          {course.code}
        </span>
        <span className="font-mono text-xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200/50">
          {progress}% complete
        </span>
      </div>

      <h3 className="font-display text-base font-bold text-navy-900 line-clamp-1">{course.title}</h3>

      {/* Progress track */}
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100 p-0.5 border border-slate-200/50">
        <div
          className="h-full rounded-full bg-gradient-to-r from-teal-500 to-teal-400 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-1 pt-3 border-t border-slate-100 flex items-center justify-between">
        <Link
          to={`/learn/${course.id}`}
          className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-teal-700 hover:text-teal-800 transition-colors"
        >
          <span>Continue path</span>
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  )
}
