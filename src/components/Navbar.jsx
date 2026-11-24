import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { company } from '../config/company'

export const navLinks = [
  { id: 'home', label: 'Beranda' }, { id: 'about', label: 'Tentang Kami' }, { id: 'products', label: 'Produk' },
  { id: 'why-us', label: 'Kenapa Kami' }, { id: 'contact', label: 'Kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const solid = scrolled || open

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    navLinks.forEach((l) => { const el = document.getElementById(l.id); el && io.observe(el) })
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect() }
  }, [])

  const tone = solid ? 'text-cocoa' : 'text-white'
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${solid ? 'bg-white/95 shadow-sm backdrop-blur' : 'bg-transparent'}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Utama">
        <a href="#home" className={`font-serif text-2xl font-semibold tracking-wide ${tone}`}>{company.name}</a>
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} aria-current={active === l.id ? 'page' : undefined}
                className={`relative py-1 text-sm transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-current after:transition-transform ${tone} ${active === l.id ? 'after:scale-x-100' : 'opacity-80 after:scale-x-0 hover:opacity-100 hover:after:scale-x-100'}`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button className={`rounded-full p-2 md:hidden ${tone}`} onClick={() => setOpen(!open)} aria-label={open ? 'Tutup menu' : 'Buka menu'} aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      <div className={`grid transition-all duration-300 md:hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <ul className="overflow-hidden px-5">
          {navLinks.map((l) => (
            <li key={l.id} className="border-t border-champagne/60">
              <a href={`#${l.id}`} onClick={() => setOpen(false)} className={`block py-4 font-serif text-xl ${active === l.id ? 'text-cocoa' : 'text-charcoal/70'}`}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
