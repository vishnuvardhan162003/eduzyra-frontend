import { ArrowRight, Star, Users, Award, Sparkles, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-circle-teal text-white border-b border-circle-tealdark">
      <div className="container-page py-12 sm:py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Headline, Subtitle, and Pill CTA */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6">
            <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white/90">
              Eduzyra · by Althexus
            </span>

            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-[3.5rem] tracking-normal [word-spacing:0.2em]">
              Your next big <br className="hidden sm:inline" />
              idea starts here.
            </h1>

            <p className="max-w-lg text-base sm:text-lg leading-relaxed text-white/85">
              The ideal framework to learn and ship cohort-style courses in engineering, data, and design. Structured as a path with checkpoints, not a pile of videos.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-peach px-8 py-4 font-display text-xs font-extrabold uppercase tracking-widest text-[#1D353A] shadow-pill transition-all duration-200 hover:bg-[#DE997B] hover:shadow-lg active:scale-95"
              >
                <span>Start for free</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/25 px-7 py-4 font-display text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 hover:bg-white/20"
              >
                How the path works
              </Link>
            </div>

            {/* Quick Stats Banner */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/15 pt-6 max-w-md">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-white/70">Learners</p>
                <p className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">19.6k</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-white/70">Rating</p>
                <p className="text-xl sm:text-2xl font-extrabold text-white mt-0.5 flex items-center gap-1">
                  <Star size={16} className="fill-peach text-peach inline" />
                  4.8/5
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-white/70">Completion</p>
                <p className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">86%</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hand-drawn Style Hero Illustration matching the exact uploaded image */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center">
            
            <div className="w-full max-w-lg relative">
              <svg
                viewBox="0 0 520 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto drop-shadow-md select-none"
              >
                {/* Baseline floor */}
                <line x1="20" y1="345" x2="500" y2="345" stroke="#1D353A" strokeWidth="2.5" strokeLinecap="round" />

                {/* Flying Paper Airplane in top right */}
                <g>
                  {/* Dashed trail */}
                  <path
                    d="M330 65 L360 45"
                    stroke="#FAF7F2"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    strokeLinecap="round"
                  />
                  {/* Plane body */}
                  <path
                    d="M380 40 L440 22 L410 80 L398 56 Z"
                    fill="#8A928F"
                    stroke="#1D353A"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M440 22 L398 56 L410 80"
                    fill="#757D7A"
                    stroke="#1D353A"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                </g>

                {/* Idea Icon Loop (Floating top-center) */}
                <g>
                  {/* Main circular loop */}
                  <circle cx="195" cy="95" r="15" fill="#357B89" stroke="#1D353A" strokeWidth="2.5" />
                  {/* Peach pie slice inside */}
                  <path
                    d="M195 95 L182 87 A15 15 0 0 1 207 87 Z"
                    fill="#E8B49B"
                    stroke="#1D353A"
                    strokeWidth="1.5"
                  />
                  {/* Dangling loop wire with bulb node */}
                  <path
                    d="M205 85 C220 70, 235 85, 225 105 C220 115, 240 120, 242 110"
                    stroke="#1D353A"
                    strokeWidth="2.2"
                    fill="none"
                  />
                  <circle cx="225" cy="75" r="5" fill="#1D353A" />
                  <circle cx="242" cy="110" r="3.5" fill="#FAF7F2" stroke="#1D353A" strokeWidth="1.5" />
                </g>

                {/* Left Side: Plant in tall pot */}
                <g>
                  {/* Tall Tapered White Vase */}
                  <path
                    d="M85 240 L108 240 L102 345 L91 345 Z"
                    fill="#FAF7F2"
                    stroke="#1D353A"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                  {/* Leaves */}
                  <path
                    d="M96 240 C85 210 65 190 62 175 C75 195 92 215 96 240 Z"
                    fill="#E8B49B"
                    stroke="#1D353A"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M96 240 C95 190 98 170 98 145 C102 170 100 210 96 240 Z"
                    fill="#245863"
                    stroke="#1D353A"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M96 240 C110 205 125 190 128 180 C118 200 105 220 96 240 Z"
                    fill="#E8B49B"
                    stroke="#1D353A"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </g>

                {/* Left Side: Coffee Side Table with Cup */}
                <g>
                  {/* Table Stem */}
                  <line x1="118" y1="180" x2="118" y2="345" stroke="#1D353A" strokeWidth="2.5" />
                  {/* Round White Tabletop */}
                  <ellipse cx="118" cy="180" rx="30" ry="7" fill="#FAF7F2" stroke="#1D353A" strokeWidth="2.5" />
                  {/* Bowl / Cup */}
                  <path
                    d="M106 166 C106 178 130 178 130 166 Z"
                    fill="#FAF7F2"
                    stroke="#1D353A"
                    strokeWidth="2"
                  />
                  <line x1="104" y1="166" x2="132" y2="166" stroke="#1D353A" strokeWidth="2" />
                </g>

                {/* Round Saucer / Egg Armchair */}
                <g>
                  {/* Wooden tripod legs */}
                  <line x1="210" y1="310" x2="185" y2="345" stroke="#1D353A" strokeWidth="3" strokeLinecap="round" />
                  <line x1="285" y1="310" x2="310" y2="345" stroke="#1D353A" strokeWidth="3" strokeLinecap="round" />
                  <line x1="240" y1="315" x2="235" y2="345" stroke="#1D353A" strokeWidth="2.5" strokeLinecap="round" />

                  {/* Big round egg chair cushion/shell */}
                  <path
                    d="M320 250 C320 310 270 330 220 330 C185 330 175 300 175 270 C175 210 230 180 280 180 C310 180 320 215 320 250 Z"
                    fill="#FAF7F2"
                    stroke="#1D353A"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Inner fold curve */}
                  <path
                    d="M195 295 C230 310 270 305 300 280"
                    stroke="#1D353A"
                    strokeWidth="2"
                    fill="none"
                  />
                </g>

                {/* Character Sitting & Working */}
                <g>
                  {/* Dark Trousers / Legs */}
                  <path
                    d="M230 240 C220 240 195 240 185 255 C175 270 172 310 170 330 L188 330 C190 310 195 280 205 270 L230 270 Z"
                    fill="#1D353A"
                    stroke="#1D353A"
                    strokeWidth="2"
                  />
                  <path
                    d="M245 245 C235 245 215 250 205 265 C195 280 195 315 195 335 L212 335 C212 315 218 290 228 275 L252 275 Z"
                    fill="#1D353A"
                    stroke="#1D353A"
                    strokeWidth="2"
                  />
                  {/* Shoes */}
                  <path d="M165 330 L172 345 L195 345 C195 335 185 330 165 330 Z" fill="#FAF7F2" stroke="#1D353A" strokeWidth="2" />
                  <path d="M192 335 L200 345 L225 345 C225 338 215 335 192 335 Z" fill="#FAF7F2" stroke="#1D353A" strokeWidth="2" />

                  {/* Peach Torso / Sweater with vertical suspender lines */}
                  <path
                    d="M232 170 C225 190 225 230 230 245 L272 240 C275 215 272 185 268 170 Z"
                    fill="#E8B49B"
                    stroke="#1D353A"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                  <line x1="243" y1="172" x2="243" y2="242" stroke="#1D353A" strokeWidth="2" />
                  <line x1="261" y1="172" x2="261" y2="240" stroke="#1D353A" strokeWidth="2" />

                  {/* Left Arm on Laptop */}
                  <path
                    d="M238 180 C228 198 218 210 198 220 L216 226 C230 212 240 198 245 180 Z"
                    fill="#E8B49B"
                    stroke="#1D353A"
                    strokeWidth="2"
                  />
                  {/* Right Hand gestured */}
                  <path
                    d="M260 180 C248 200 220 215 185 208 C178 204 175 198 188 195 C215 198 238 190 255 176 Z"
                    fill="#E8B49B"
                    stroke="#1D353A"
                    strokeWidth="2"
                  />
                  {/* Hand */}
                  <circle cx="180" cy="200" r="5" fill="#FAF7F2" stroke="#1D353A" strokeWidth="1.5" />

                  {/* Laptop on lap */}
                  <g>
                    {/* Screen open */}
                    <path
                      d="M188 192 L242 195 L232 235 L178 232 Z"
                      fill="#FAF7F2"
                      stroke="#1D353A"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />
                    {/* Base keyboard */}
                    <path
                      d="M178 232 L232 235 L220 245 L166 242 Z"
                      fill="#FAF7F2"
                      stroke="#1D353A"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    {/* Peach circle sticker in center of laptop lid */}
                    <circle cx="212" cy="214" r="5" fill="#E8B49B" />
                    {/* Peach stamp in top left */}
                    <rect x="192" y="198" width="7" height="6" fill="#E8B49B" stroke="#1D353A" strokeWidth="1" />
                  </g>

                  {/* Neck */}
                  <line x1="250" y1="170" x2="250" y2="150" stroke="#1D353A" strokeWidth="2.5" />

                  {/* Head & Hair */}
                  <path
                    d="M238 120 C238 102 258 100 268 110 C274 116 274 135 268 144 C262 152 244 152 238 144 Z"
                    fill="#FAF7F2"
                    stroke="#1D353A"
                    strokeWidth="2.5"
                  />
                  {/* Cap Hair */}
                  <path
                    d="M236 125 C235 105 245 95 262 95 C278 95 282 108 276 128 C272 125 266 118 256 118 C246 118 242 126 236 125 Z"
                    fill="#FAF7F2"
                    stroke="#1D353A"
                    strokeWidth="2.5"
                  />
                  {/* Eye, Nose, Smile */}
                  <circle cx="248" cy="126" r="1.5" fill="#1D353A" />
                  <path d="M244 127 L242 131 L246 132" stroke="#1D353A" strokeWidth="1.5" fill="none" />
                  <path d="M246 138 Q 252 142 258 138" stroke="#1D353A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                </g>
              </svg>

              {/* Floating EdTech Feature Badges (Suited for Eduzyra) */}
              <div className="absolute -top-3 -left-4 sm:left-4 rounded-full bg-white/95 px-4 py-2 shadow-card border border-white/80 backdrop-blur text-[#1D353A] flex items-center gap-2 animate-bounce duration-1000">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-peach text-[#1D353A] text-xs font-bold">✓</span>
                <span className="font-display text-xs font-bold tracking-tight">1-on-1 Mentor Reviews</span>
              </div>

              <div className="absolute bottom-6 right-2 sm:right-6 rounded-full bg-[#FAF7F2] px-4 py-2 shadow-card border border-slate-200/80 text-[#1D353A] flex items-center gap-2">
                <Sparkles size={14} className="text-[#A75B3A]" />
                <span className="font-display text-xs font-bold tracking-tight">Real Capstone Projects</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
