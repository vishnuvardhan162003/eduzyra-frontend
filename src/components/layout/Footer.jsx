import { Link } from 'react-router-dom'
import { Mail, Globe } from 'lucide-react'
import Logo from '../common/Logo'
import {
  WhatsAppIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from '../common/BrandIcons'
import { BRAND, FOOTER_LINKS, SOCIAL_LINKS } from '../../constants/site'

const socialIconClass =
  'flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all hover:border-peach hover:text-peach hover:bg-white/10'

const SOCIALS = [
  { href: `mailto:${SOCIAL_LINKS.officialEmail}`, label: 'Email Althexus', Icon: Mail },
  { href: SOCIAL_LINKS.website, label: 'Althexus website', Icon: Globe },
  { href: SOCIAL_LINKS.linkedin, label: 'Althexus on LinkedIn', Icon: LinkedInIcon },
  { href: SOCIAL_LINKS.instagram, label: 'Althexus on Instagram', Icon: InstagramIcon },
  { href: SOCIAL_LINKS.facebook, label: 'Althexus on Facebook', Icon: FacebookIcon },
  { href: SOCIAL_LINKS.twitter, label: 'Althexus on X', Icon: XIcon },
  { href: SOCIAL_LINKS.youtube, label: 'Althexus on YouTube', Icon: YouTubeIcon },
  { href: SOCIAL_LINKS.whatsappChannel, label: 'Althexus WhatsApp channel', Icon: WhatsAppIcon },
]

export default function Footer() {
  return (
    <footer className="border-t border-circle-tealdark bg-[#16383F] text-white">
      <div className="container-page grid grid-cols-2 gap-8 py-12 sm:grid-cols-3 lg:grid-cols-5">
        <div className="col-span-2 lg:col-span-2">
          <Logo variant="light" size="lg" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            {BRAND.tagline} A studio of Althexus, building skill-based courses that mirror how
            teams actually work.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className={socialIconClass}
                aria-label={label}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div key={heading}>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-white/50 font-bold">
              {heading}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/80 hover:text-peach transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.to} className="text-sm text-white/80 hover:text-peach transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-4 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Eduzyra by Althexus. All rights reserved.</p>
          <p className="font-mono uppercase tracking-wider text-[11px]">Made for learners who ship.</p>
        </div>
      </div>
    </footer>
  )
}
