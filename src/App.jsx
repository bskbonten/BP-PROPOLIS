import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ProductSection from './components/ProductSection'
import ProductModal from './components/ProductModal'
import WhyChooseUs from './components/WhyChooseUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [selected, setSelected] = useState(null)
  return (
    <>
      <Navbar />
      <main>
        <Hero /><About /><ProductSection onOpen={setSelected} /><WhyChooseUs /><Contact />
      </main>
      <Footer />
      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </>
  )
}
