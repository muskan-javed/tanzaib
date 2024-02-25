import Image from 'next/image'
import Header from '@/components/layouts/Header'
import Cart from '@/components/sections/Cart'

export default function Home() {
  return (
    <main className='lg:container mx-auto'>
      <div className=''>
        <Header />
        <Cart />
      </div>
    </main>
  )
}
