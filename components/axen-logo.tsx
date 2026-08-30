import Image from 'next/image'

/**
 * Crisp recreation of the AXEN mark — nested angular chevrons.
 * Rendered in currentColor so it stays strictly monochrome at any size.
 */
export function AxenLogo({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      {/* Outer peak */}
      <path
        d="M50 6 L96 92 L79 92 L50 33 L21 92 L4 92 Z"
        fill="currentColor"
      />
      {/* Inner nested peak */}
      <path
        d="M50 41 L73 92 L60 92 L50 63 L40 92 L27 92 Z"
        fill="currentColor"
      />
    </svg>
  )
}

/**
 * The official uploaded AXEN lockup (mark + wordmark).
 * The source PNG is dark-on-white, so `invert` flips it to a clean
 * white lockup that sits seamlessly on the pure-black background.
 */
export function AxenLockup({ className = '' }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="AXEN"
      width={640}
      height={640}
      priority
      className={`select-none invert ${className}`}
    />
  )
}
