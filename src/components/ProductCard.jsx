import ProductImage from './ProductImage'
import { formatPrice } from '../config/company'

export default function ProductCard({ product, onOpen }) {
  return (
    <article className="group flex flex-col">
      <button onClick={() => onOpen(product)} aria-label={`Lihat detail ${product.name}`} className="overflow-hidden rounded-2xl bg-beige shadow-sm transition group-hover:shadow-lg group-hover:shadow-cocoa/15">
        <ProductImage src={product.image} alt={product.name} className="aspect-square w-full transition duration-700 group-hover:scale-105" />
      </button>
      <div className="flex flex-1 flex-col pt-4">
        <p className="text-xs text-charcoal/50">{product.category}</p>
        <h3 className="mt-1 font-serif text-lg leading-snug text-cocoa sm:text-xl">{product.name}</h3>
        <p className="mt-1 hidden text-sm text-charcoal/65 sm:block">{product.shortDescription}</p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <span className="text-sm font-medium text-charcoal sm:text-base">{formatPrice(product.price)}</span>
          <button onClick={() => onOpen(product)} className="rounded-full border border-cocoa/30 px-3.5 py-1.5 text-xs text-cocoa transition hover:bg-cocoa hover:text-white sm:text-sm">Lihat Detail</button>
        </div>
      </div>
    </article>
  )
}
