import ProductImage from './ProductImage'
import { company } from '../config/company'
import { products } from '../data/products'

const collage = [5, 1, 9, 4].map((id) => products.find((p) => p.id === id))

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-b from-crimson via-cocoa/90 to-white pt-16 lg:bg-gradient-to-r lg:from-crimson lg:via-cocoa/80 lg:to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div>
          <h1 className="font-serif text-5xl font-medium leading-[1.05] text-white sm:text-6xl xl:text-7xl">Sehat itu murah, sakit yang mahal.</h1>
          <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-white/90">
            {company.tagline}. Suplemen kesehatan alami dan skincare Belgie, buka 24 jam dengan konsultasi gratis lewat WhatsApp.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#products" className="rounded-full bg-white px-8 py-3.5 text-center text-sm font-medium text-cocoa shadow-lg shadow-black/10 transition hover:bg-beige">Lihat Produk</a>
            <a href="#contact" className="rounded-full border border-white/60 px-8 py-3.5 text-center text-sm font-medium text-white transition hover:bg-white/15">Hubungi Kami</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {collage.map((p, i) => (
            <ProductImage key={p.id} src={p.image} alt={p.name} className={`aspect-square w-full rounded-3xl shadow-xl shadow-cocoa/15 ring-4 ring-white ${i % 2 ? 'translate-y-5' : ''}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
