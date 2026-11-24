import { Compass, LayoutGrid, Phone } from 'lucide-react'
import { categories } from '../data/products'
import { company, generalWhatsappLink } from '../config/company'

// Sesuaikan id tujuan dengan id section di halamanmu.
const nav = [
  { label: 'Beranda', href: '#' },
  { label: 'Tentang Kami', href: '#about' },
  { label: 'Produk', href: '#products' },
  { label: 'Kenapa Kami', href: '#why-us' },
  { label: 'Kontak', href: '#contact' },
]

function Box({ icon: Icon, title, className = '', children }) {
  return (
    <div className={`rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 sm:p-6 ${className}`}>
      <div className="flex items-center gap-2">
        <Icon strokeWidth={1.4} className="h-5 w-5 text-champagne" />
        <h3 className="font-serif text-lg text-white sm:text-xl">{title}</h3>
      </div>
      <div className="mt-3">{children}</div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="bg-charcoal py-10 text-white sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="font-serif text-2xl sm:text-3xl">{company.name}</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70">{company.description}</p>
          </div>

          {/* HP: Navigasi + Kategori sejajar, Kontak di bawahnya. Laptop: 3 kotak sebaris */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-8 lg:grid-cols-3">
            <Box icon={Compass} title="Navigasi">
              <ul className="space-y-1.5 text-sm text-white/75">
                {nav.map((n) => (
                  <li key={n.label}>
                    <a href={n.href} className="transition hover:text-white">{n.label}</a>
                  </li>
                ))}
              </ul>
            </Box>

            <Box icon={LayoutGrid} title="Kategori">
              <ul className="space-y-1.5 text-sm text-white/75">
                {categories.map((c) => (
                  <li key={c}>
                    <a href="#products" className="transition hover:text-white">{c}</a>
                  </li>
                ))}
              </ul>
            </Box>

            <Box icon={Phone} title="Kontak" className="col-span-2 lg:col-span-1">
              <ul className="space-y-1.5 text-sm text-white/75">
                <li>
                  <a href={generalWhatsappLink()} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                    {company.contactPerson}: {company.whatsappDisplay}
                  </a>
                </li>
                <li className="leading-snug">{company.address}</li>
              </ul>
            </Box>
          </div>
        </div>

        <p className="mt-8 border-t border-white/10 pt-4 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {company.name}
        </p>
      </div>
    </footer>
  )
}
