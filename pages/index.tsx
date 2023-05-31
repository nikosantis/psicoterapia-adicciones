import RootLayout from 'layouts/root'
import Price from '../components/prices'
import Contact from '../components/contact'
import Hero from 'components/hero'
import Intro from 'components/intro'
import Separator from 'components/separator'
import Modules from 'components'
import Teachers from 'components/teachers'

export default function Home() {
  return (
    <RootLayout>
      <Hero />
      <main role='main' className='w-full'>
        <Intro />
        <Separator />
        <Modules />
        <Teachers />
        <Price />
        {/* <Contact /> */}
      </main>
    </RootLayout>
  )
}
