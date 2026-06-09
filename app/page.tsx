import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Blog from '@/components/Blog'
import dynamic from 'next/dynamic'

const CalendarPreview = dynamic(() => import('@/components/CalendarPreview'), { ssr: false })
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <CalendarPreview />
      <Blog />
    
      <Footer />
    </main>
  )
}
