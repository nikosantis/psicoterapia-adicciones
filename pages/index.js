import Page from '../components/page'
import Hero from '../components/hero'
import Intro from '../components/intro'
import FirstSeparator from '../components/first-separator'
import Footer from '../components/footer'

export default function Home () {
  return (
    <Page>
      <Hero />
      <main>
        <Intro />
        <FirstSeparator />
      </main>
      <Footer />
    </Page>
  )
}
