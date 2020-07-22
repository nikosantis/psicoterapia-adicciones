import PageContainer from './page-container'
import Header from './header'

export default function Page ({ children }) {
  return (
    <PageContainer>
      <Header />
      {children}
    </PageContainer>
  )
}
