import { useMemo, useState } from 'react'
import { Search, X, MessageCircle } from 'lucide-react'
import { products, categories } from '../data/products'
import ProductCard from './ProductCard'
import { packages, formatPrice, packageLink } from '../config/company'

export default function ProductSection({ onOpen }) {
  const [category, setCategory] = useState('Semua')
  const [query, setQuery] = useState('')

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter((p) =>
      (category === 'Semua' || p.category === category) &&
      (!q || [p.name, p.category, p.shortDescription].some((t) => t.toLowerCase().includes(q)))
    )
  }, [category, query])

  return (
    <section id="products" className="py-10 sm:py-16 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="max-w-xl">
          <h2 className="font-serif text-3xl text-cocoa sm:text-4xl lg:text-5xl">Produk kami</h2>
          <p className="mt-2 text-sm text-charcoal/70 sm:mt-4 sm:text-base">
            Pilih produk, lihat detailnya, lalu pesan langsung lewat WhatsApp. Harga ecer belum termasuk ongkir.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:mt-10 sm:gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:-mx-5 sm:px-5 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0"
            role="tablist"
            aria-label="Kategori produk"
          >
            {['Semua', ...categories].map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={category === c}
                onClick={() => setCategory(c)}
                className={`shrink-0 rounded-full px-3 py-1.5 text-xs transition sm:px-4 sm:py-2 sm:text-sm ${
                  category === c ? 'bg-cocoa text-ivory' : 'bg-beige text-charcoal/80 hover:bg-champagne/60'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <label className="relative block w-full lg:w-72">
            <span className="sr-only">Cari produk</span>
            <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari produk"
              className="w-full rounded-full border border-champagne bg-white py-2 pl-10 pr-9 text-sm outline-none transition focus:border-cocoa sm:py-2.5 sm:pl-11 sm:pr-10"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                aria-label="Hapus pencarian"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/50 hover:text-cocoa"
              >
                <X size={16} />
              </button>
            )}
          </label>
        </div>

        {list.length ? (
          <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-6 sm:mt-10 sm:gap-x-4 sm:gap-y-9 md:grid-cols-3 md:gap-x-6 xl:grid-cols-4">
            {list.map((p) => (
              <ProductCard key={p.id} product={p} onOpen={onOpen} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-3xl bg-beige/60 px-6 py-12 text-center sm:mt-16 sm:py-16">
            <p className="font-serif text-xl text-cocoa sm:text-2xl">Produk tidak ditemukan</p>
            <p className="mt-2 text-sm text-charcoal/70">Coba kata kunci lain atau pilih kategori lain.</p>
            <button
              onClick={() => { setQuery(''); setCategory('Semua') }}
              className="mt-5 rounded-full bg-cocoa px-5 py-2 text-sm text-ivory hover:bg-charcoal sm:mt-6 sm:px-6 sm:py-2.5"
            >
              Tampilkan semua produk
            </button>
          </div>
        )}

        {/* Paket hemat: 3 kolom kecil di HP, tetap lega di layar besar */}
        <div className="mt-10 rounded-2xl bg-gradient-to-br from-crimson to-cocoa p-4 text-white sm:mt-20 sm:rounded-3xl sm:p-10">
          <h3 className="font-serif text-2xl sm:text-4xl">Paket hemat</h3>
          <p className="mt-1 max-w-lg text-xs text-white/85 sm:mt-2 sm:text-sm">
            Beli lebih banyak, bayar lebih hemat. Jumlah botol bisa dikombinasikan; konfirmasi pilihan produk lewat WhatsApp.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4">
            {packages.map((k, i) => (
              <a
                key={k.qty}
                href={packageLink(k)}
                target="_blank"
                rel="noopener noreferrer"
                className={`group rounded-xl bg-white p-4 text-charcoal transition hover:-translate-y-1 hover:shadow-xl sm:rounded-2xl sm:p-6 ${i === packages.length - 1 && packages.length % 2 === 1 ? 'col-span-2 sm:col-span-1' : ''}`}
              >
                <p className="font-serif text-lg leading-tight text-cocoa sm:text-3xl">{k.qty} botol</p>
                <p className="mt-0.5 text-sm font-medium sm:mt-1 sm:text-xl">{formatPrice(k.price)}</p>
                <p className="text-xs text-charcoal/60 sm:text-sm">{formatPrice(Math.round(k.price / k.qty))} per botol</p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs text-cocoa sm:mt-5 sm:gap-2 sm:text-sm">
                  <MessageCircle size={14} /> Pesan
                </span>
              </a>
            ))}
          </div>
          <p className="mt-3 text-[11px] text-white/70 sm:mt-5 sm:text-xs">
            Belum termasuk ongkir. Produk Belgie Rp195.000 per item.
          </p>
        </div>
      </div>
    </section>
  )
}
