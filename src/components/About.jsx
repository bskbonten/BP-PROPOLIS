import { Target, Compass, ShieldCheck, HeartHandshake } from 'lucide-react'
import ProductImage from './ProductImage'
import { company } from '../config/company'

const pillars = [
  { icon: Compass, title: 'Visi', text: 'Keluarga Indonesia hidup sehat dengan produk alami yang mudah dijangkau.' },
  { icon: Target, title: 'Misi', text: 'Suplemen dan skincare terdaftar BPOM dengan info jelas dan layanan ramah.' },
  { icon: ShieldCheck, title: 'Kualitas', text: 'Berlabel halal dan terdaftar BPOM, dikirim dari mitra resmi.' },
  { icon: HeartHandshake, title: 'Pelanggan', text: 'Konsultasi gratis dan layanan 24 jam lewat WhatsApp.' },
]

export default function About() {
  return (
    <section id="about" className="bg-beige py-10 sm:py-16 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <ProductImage
          src="/images/lineup.jpg"
          alt="Produk BP Group"
          className="aspect-[16/7] w-full rounded-2xl bg-white shadow-lg shadow-cocoa/10 sm:aspect-[16/5] sm:rounded-3xl"
        />

        <div className="mt-6 grid gap-5 sm:mt-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl text-cocoa sm:text-4xl lg:text-5xl">Tentang {company.name}</h2>
            <p className="mt-2 text-sm leading-relaxed text-charcoal/75 sm:mt-4 sm:text-base">
              Mitra resmi British Propolis untuk suplemen kesehatan alami dan skincare Belgie. Buka dari jam 07:00 sampai 20:00 untuk membantu Anda dan keluarga hidup lebih sehat.
            </p>
            <p className="mt-2 text-xs text-charcoal/55 sm:text-sm">Suplemen bukan pengganti obat. Untuk kondisi medis tertentu, konsultasikan dengan dokter.</p>
          </div>

          {/* 4 kotak ikon: 2x2 di HP, tetap 2x2 lebih lega di laptop */}
          <dl className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:col-span-7">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl bg-white p-3.5 shadow-sm shadow-cocoa/5 sm:p-6">
                <Icon strokeWidth={1.4} className="h-5 w-5 text-cocoa sm:h-6 sm:w-6" />
                <dt className="mt-2 font-serif text-base leading-tight text-cocoa sm:mt-3 sm:text-xl">{title}</dt>
                <dd className="mt-1 text-[11px] leading-snug text-charcoal/70 sm:text-sm sm:leading-relaxed">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
