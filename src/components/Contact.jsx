import { MessageCircle, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react'
import { company, generalWhatsappLink } from '../config/company'

export default function Contact() {
  const rows = [
    { icon: MapPin, label: 'Alamat', content: company.address },
    { icon: Clock, label: 'Jam operasional', content: company.hours.map((h) => <span key={h} className="block">{h}</span>) },
  ]
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <h2 className="font-serif text-4xl text-cocoa sm:text-5xl">Hubungi kami</h2>
          <p className="mt-5 max-w-md leading-relaxed text-charcoal/70">Cara tercepat adalah WhatsApp. Tanyakan produk, cek ketersediaan, atau langsung pesan. Hubungi mitra resmi: {company.contactPerson}, {company.whatsappDisplay}.</p>
          <a href={generalWhatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-cocoa px-8 py-4 text-sm font-medium text-ivory transition hover:bg-charcoal">
            <MessageCircle size={18} /> Chat via WhatsApp
          </a>
        </div>
        <div className="rounded-3xl bg-beige p-7 sm:p-10">
          <ul className="space-y-6">
            {rows.map(({ icon: Icon, label, content }) => (
              <li key={label} className="flex gap-4">
                <Icon size={20} strokeWidth={1.4} className="mt-1 shrink-0 text-cocoa" />
                <div><p className="font-serif text-lg text-cocoa">{label}</p><div className="text-sm leading-relaxed text-charcoal/75">{content}</div></div>
              </li>
            ))}
          </ul>
          
        </div>
      </div>
    </section>
  )
}
