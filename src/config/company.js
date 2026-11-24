// Ubah file ini untuk memperbarui info toko di seluruh website.
export const company = {
  name: 'BP Propolis',
  tagline: 'Mitra Resmi British Propolis',
  description: 'Suplemen kesehatan alami dan skincare Belgie. Buka 24 jam untuk membantu Anda dan keluarga hidup lebih sehat.',
  // Angka saja dengan kode negara, tanpa "+". Nomor mitra: 0856-4195-0364
  whatsappNumber: '6285641950363',
  whatsappDisplay: '085641950363',
  contactPerson: 'Dwi Margi',
  address: 'Dermayu Karangrejo 03/03 selomerto Wonosobo Jawa Tengah',
  hours: ['Jam 7 sampai jam 8 malam', 'Konsultasi gratis via WhatsApp'],
  social: { instagram: 'https://instagram.com/', facebook: 'https://facebook.com/' },
  currencyLocale: 'id-ID',
  currency: 'IDR',
}
// Harga paket: ubah di sini.
export const packages = [
  { qty: 3, price: 720000 },
  { qty: 5, price: 1125000 },
  { qty: 10, price: 2100000 },
]
export const formatPrice = (n) =>
  new Intl.NumberFormat(company.currencyLocale, { style: 'currency', currency: company.currency, maximumFractionDigits: 0 }).format(n)
const wa = (text) => `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(text)}`
export const whatsappLink = (p) =>
  wa(`Halo, saya tertarik membeli produk ini:\n\nProduk: ${p.name}\nHarga: ${formatPrice(p.price)}\n\nMohon informasi lebih lanjut mengenai produk ini.`)
export const packageLink = (k) => wa(`Halo, saya ingin memesan paket ${k.qty} botol (${formatPrice(k.price)}). Mohon info produk yang tersedia.`)
export const generalWhatsappLink = () => wa('Halo, saya ingin bertanya tentang produk Anda.')
