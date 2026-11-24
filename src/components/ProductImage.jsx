import { useState } from 'react'
import { Leaf } from 'lucide-react'

// Shows the image, or an elegant placeholder if the file is missing.
export default function ProductImage({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)
  if (failed || !src)
    return (
      <div role="img" aria-label={alt} className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-beige to-champagne/60 text-cocoa/60 ${className}`}>
        <Leaf size={28} strokeWidth={1.2} />
        <span className="px-6 text-center font-serif text-sm">{alt}</span>
      </div>
    )
  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} className={`object-cover ${className}`} />
}
