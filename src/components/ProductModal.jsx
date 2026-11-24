import { useEffect, useState, useCallback } from 'react'
import { X, MessageCircle, Check } from 'lucide-react'
import ProductImage from './ProductImage'
import { formatPrice, whatsappLink } from '../config/company'

export default function ProductModal({ product, onClose }) {
  const [show, setShow] = useState(false)

  const close = useCallback(() => { setShow(false); setTimeout(onClose, 250) }, [onClose])

  useEffect(() => {
    const raf = requestAnimationFrame(() => setShow(true))
    const onKey = (e) => e.key === 'Escape' && close()
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [close])

  const available = product.specifications.ketersediaan.toLowerCase().startsWith('available')

  return (
    <div className={`fixed inset-0 z-50 flex items-end justify-center p-0 transition-opacity duration-300 sm:items-center sm:p-6 ${show ? 'opacity-100' : 'opacity-0'}`}
      role="dialog" aria-modal="true" aria-label={product.name}>
      <div className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm" onClick={close} />
      <div className={`relative grid max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl transition-all duration-300 sm:rounded-3xl md:grid-cols-2 md:overflow-hidden ${show ? 'translate-y-0 scale-100' : 'translate-y-6 scale-95'}`}>
        <button onClick={close} aria-label="Tutup" className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-cocoa shadow transition hover:bg-beige"><X size={20} /></button>
        <div className="bg-beige md:max-h-[90vh]">
          <ProductImage src={product.image} alt={product.name} className="aspect-[4/3] w-full md:aspect-auto md:h-full md:min-h-[32rem]" />
        </div>
        <div className="p-6 sm:p-8 md:max-h-[90vh] md:overflow-y-auto lg:p-10">
          <p className="text-sm text-charcoal/55">{product.category}</p>
          <h3 className="mt-1 pr-8 font-serif text-3xl leading-tight text-cocoa sm:text-4xl">{product.name}</h3>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <span className="text-2xl font-medium text-charcoal">{formatPrice(product.price)}</span>
            <span className={`rounded-full px-3 py-1 text-xs ${available ? 'bg-emerald-50 text-emerald-800' : 'bg-champagne/50 text-cocoa'}`}>{product.specifications.ketersediaan}</span>
          </div>
          <p className="mt-5 leading-relaxed text-charcoal/75">{product.description}</p>
          <h4 className="mt-6 font-serif text-xl text-cocoa">Manfaat</h4>
          <ul className="mt-2 space-y-2">
            {product.benefits.map((b) => <li key={b} className="flex items-start gap-2.5 text-sm text-charcoal/80"><Check size={16} className="mt-0.5 shrink-0 text-cocoa" />{b}</li>)}
          </ul>
          <h4 className="mt-6 font-serif text-xl text-cocoa">Spesifikasi</h4>
          <dl className="mt-2 divide-y divide-champagne/50 text-sm">
            {Object.entries(product.specifications).map(([k, v]) => (
              <div key={k} className="flex justify-between py-2"><dt className="capitalize text-charcoal/55">{k}</dt><dd className="text-right text-charcoal">{v}</dd></div>
            ))}
          </dl>
          <a href={whatsappLink(product)} target="_blank" rel="noopener noreferrer"
            className="mt-8 flex items-center justify-center gap-2 rounded-full bg-cocoa px-6 py-4 text-sm font-medium text-ivory transition hover:bg-charcoal">
            <MessageCircle size={18} /> Pesan via WhatsApp
          </a>
          {['Suplemen', 'Pemanis Alami'].includes(product.category) && <p className="mt-3 text-center text-xs text-charcoal/55">Suplemen bukan pengganti obat. Konsultasikan dengan dokter untuk kondisi medis tertentu.</p>}
        </div>
      </div>
    </div>
  )
}
