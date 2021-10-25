import { ReactNode } from 'react'

import PageContainer from './page-container'
import Header from './header'

type Props = {
  children: ReactNode
}

export default function Page({ children }: Props) {
  return (
    <PageContainer>
      <Header />
      {children}
    </PageContainer>
  )
}
