import { Link } from 'react-router-dom'
import { Star, Clock, Users, CircleCheck, ArrowUpRight } from 'lucide-react'
import { formatCurrency, formatDiscount } from '../../utils/format'
import { useAuth } from '../../hooks/useAuth'

export default function CourseCard({ course }) {
  const discount = formatDiscount(course.price, course.originalPrice)
  const { enrolledCourseIds } = useAuth()

  const isEnrolled = (enrolledCourseIds || []).includes(course.id)

  return (
    <Link
      to={'/courses/' + course.id}
      className="card-surface group flex h-full flex-col overflow-hidden border border-slate-200/90 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover rounded-3xl"
    >
      {/* Course Header Banner */}
      <div className="flex items-center justify-between border-b border-slate-100 bg-[#FAF7F2] px-6 py-4 transition-colors group-hover:bg-[#F4EFE6]">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1D353A]/80">
          {course.code}
        </span>

        <span className="rounded-full bg-white px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wide text-[#1D353A] shadow-xs border border-slate-200/70">
          {course.level}
        </span>
      </div>

      {/* Course Content */}
      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <span className="eyebrow block truncate !text-[11px] text-circle-teal">
            {course.category}
          </span>
          <ArrowUpRight size={18} className="text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-circle-teal" />
        </div>

        <h3 className="line-clamp-2 min-h-[56px] font-display text-lg sm:text-xl font-extrabold leading-snug text-[#1D353A] group-hover:text-circle-teal transition-colors">
          {course.title}
        </h3>

        <p className="line-clamp-3 min-h-[66px] text-xs sm:text-sm leading-relaxed text-slate-500">
          {course.summary}
        </p>

        {/* Course Details Pills */}
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100 pt-4">
          <span className="flex items-center gap-1.5 text-[#1D353A]">
            <Star size={14} className="fill-peach text-peach" />
            {course.rating}
          </span>

          <span className="flex items-center gap-1.5">
            <Clock size={14} className="text-slate-400" />
            {course.duration}
          </span>

          <span className="flex items-center gap-1.5">
            <Users size={14} className="text-slate-400" />
            {course.students.toLocaleString('en-IN')}
          </span>
        </div>

        {/* Price Row */}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl font-extrabold text-[#1D353A]">
              {formatCurrency(course.price)}
            </span>

            {discount && (
              <span className="text-xs text-slate-400 line-through">
                {formatCurrency(course.originalPrice)}
              </span>
            )}
          </div>

          {discount && (
            <span className="rounded-full bg-peach/30 px-3 py-1 font-mono text-[11px] font-bold text-[#A75B3A]">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Enrollment Button */}
        <div className="pt-2">
          {isEnrolled ? (
            <span className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-circle-teal/10 px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-circle-teal ring-1 ring-circle-teal/20">
              <CircleCheck size={16} />
              Already Enrolled
            </span>
          ) : (
            <span className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-peach px-5 py-3 text-xs font-extrabold uppercase tracking-widest text-[#1D353A] shadow-xs transition-all duration-200 group-hover:bg-[#DE997B] group-hover:shadow-md">
              Enroll Now
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
