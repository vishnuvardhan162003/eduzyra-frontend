export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left'

  return (
    <div className={`flex max-w-2xl flex-col gap-3.5 ${alignment}`}>
      {eyebrow && (
        <span className="eyebrow inline-block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-slate-600 font-normal">
          {description}
        </p>
      )}
    </div>
  )
}
