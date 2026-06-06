const signals = [
  {
    icon: InsuranceIcon,
    label: 'Most Insurance Accepted',
    detail: 'Delta, Aetna, BlueCross & more',
  },
  {
    icon: FinanceIcon,
    label: '0% Financing Available',
    detail: 'Through CareCredit & Sunbit',
  },
  {
    icon: TechIcon,
    label: 'Modern Technology',
    detail: 'Digital X-rays, intraoral cameras',
  },
  {
    icon: FamilyIcon,
    label: 'All Ages Welcome',
    detail: 'From first tooth to senior care',
  },
  {
    icon: SedationIcon,
    label: 'Comfort Options',
    detail: 'Nitrous oxide & sedation available',
  },
]

export default function TrustBar() {
  return (
    <div className="bg-charcoal border-t border-cream/5" role="region" aria-label="Practice credentials">
      <div className="container-site py-6">
        <ul className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-y-5 gap-x-4">
          {signals.map((signal, i) => (
            <li key={i} className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center shrink-0 text-sage-200">
                <signal.icon />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-body font-semibold text-cream/90 whitespace-nowrap">
                  {signal.label}
                </p>
                <p className="text-[11px] text-cream/40 whitespace-nowrap hidden sm:block">
                  {signal.detail}
                </p>
              </div>
              {i < signals.length - 1 && (
                <span className="hidden lg:block w-px h-6 bg-cream/10 ml-4" aria-hidden="true" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function InsuranceIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="6" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 10h20" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 15h4M15 15h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function FinanceIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v10M9.5 9.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 2.5-5 2.5-5 5 0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function TechIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 20h8M12 18v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function FamilyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 20c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17 13c2.21 0 4 1.79 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function SedationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12C4 7.58 7.58 4 12 4c2.54 0 4.79 1.16 6.3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 12c0 4.42-3.58 8-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 8v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 3l1 4-4-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
