import Page from '../components/page'
import Hero from '../components/hero'
import Intro from '../components/intro'
import FirstSeparator from '../components/first-separator'
import Modules from '../components/modules'
import Price from '../components/prices'
import Teachers from '../components/teachers'
import Contact from '../components/contact'
import Footer from '../components/footer'
import WhatsApp from '../components/whatsapp'

export default function Home () {
  return (
    <Page>
      <Hero />
      <main>
        <Intro />
        <FirstSeparator />
        <Modules />
        <Teachers />
        <Price />
        <Contact />
      </main>
      <Footer />
      <WhatsApp />
    </Page>
  )
}
