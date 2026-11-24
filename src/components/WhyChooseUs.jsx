import { useEffect, useState } from 'react'
import { Gem, Smile, Handshake, BookOpenCheck, X, ZoomIn } from 'lucide-react'

// Taruh gambarnya di: public/images/daftar-harga.png
const PRICE_IMG = '/harga.png'

const items = [
  { icon: Gem, title: 'Produk Berkualitas', text: 'Produk BP Group dan Belgie berlabel halal dan terdaftar BPOM.' },
  { icon: Smile, title: 'Kepuasan Pelanggan', text: 'Kami mendengar keluhan Anda dan menindaklanjuti setiap pesanan.' },
  { icon: Handshake, title: 'Layanan Profesional', text: 'Buka 24 jam, ramah, cepat tanggap, dan konsultasi gratis.' },
  { icon: BookOpenCheck, title: 'Informasi Terpercaya', text: 'Deskripsi, isi, dan aturan pakai disampaikan jelas di tiap produk.' },
]

export default function WhyChooseUs() {
  const [zoom, setZoom] = useState(false)

  useEffect(() => {
    if (!zoom) return
    const onKey = (e) => e.key === 'Escape' && setZoom(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [zoom])

  return (
    <section id="why-us" className="bg-gradient-to-b from-white via-cocoa to-crimson pb-12 pt-16 text-white sm:pb-16 sm:pt-24 lg:py-28 lg:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
          {/* Kiri (laptop) / atas (HP): alasan memilih kami */}
          <div>
            <h2 className="font-serif text-3xl text-white sm:text-4xl lg:text-5xl">Kenapa memilih kami</h2>

            {/* HP: 2 kolom kecil sejajar. Laptop: 2 kolom lega */}
            <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/20 sm:mt-8 lg:mt-10 lg:rounded-3xl">
              {items.map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-crimson/90 p-3.5 transition hover:bg-crimson sm:p-6 lg:p-8">
                  <Icon strokeWidth={1.3} className="h-5 w-5 text-champagne sm:h-7 sm:w-7" />
                  <h3 className="mt-2.5 font-serif text-base leading-tight sm:mt-4 sm:text-xl lg:text-2xl">{title}</h3>
                  <p className="mt-1 text-[11px] font-light leading-snug text-white/80 sm:mt-2 sm:text-sm sm:leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Kanan (laptop) / bawah (HP): daftar harga */}
          <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md">
            <button
              type="button"
              onClick={() => setZoom(true)}
              aria-label="Perbesar daftar harga"
              className="group relative block w-full overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-white/30"
            >
              <img
                src={PRICE_IMG}
                alt="Daftar harga paket BP Group"
                width="853"
                height="1280"
                loading="lazy"
                className="h-auto w-full"
              />
              <span className="absolute bottom-2 right-2 inline-flex items-center gap-1.5 rounded-full bg-cocoa/90 px-3 py-1.5 text-xs text-white">
                <ZoomIn size={14} /> Perbesar
              </span>
            </button>
            <p className="mt-3 text-center text-xs text-white/70 sm:text-sm">Ketuk gambar untuk melihat daftar harga lebih jelas.</p>
          </div>
        </div>
      </div>

      {zoom && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/85 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Daftar harga"
          onClick={() => setZoom(false)}
        >
          <button
            type="button"
            onClick={() => setZoom(false)}
            aria-label="Tutup"
            className="fixed right-3 top-3 z-10 rounded-full bg-white p-2 text-cocoa shadow-lg"
          >
            <X size={20} />
          </button>
          <img
            src={PRICE_IMG}
            alt="Daftar harga paket BP Group"
            className="mx-auto h-auto w-full max-w-2xl rounded-xl bg-white"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}