import Image from 'next/image'

/**
 * The official AXEN mark, extracted from the company lockup as a white
 * transparent PNG. Previously this was a hand-drawn SVG approximation that
 * did not match the real logo.
 */
export function AxenLogo({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <Image
      src="/axen-mark.png"
      alt=""
      width={512}
      height={512}
      aria-hidden="true"
      className={`select-none object-contain ${className}`}
    />
  )
}

/**
 * The full AXEN lockup (mark + wordmark).
 * The source PNG is dark-on-white, so `invert` flips it to a clean
 * white lockup that sits seamlessly on the pure-black background.
 */
export function AxenLockup({ className = '' }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="AXEN"
      width={800}
      height={800}
      priority
      className={`select-none invert ${className}`}
    />
  )
}
