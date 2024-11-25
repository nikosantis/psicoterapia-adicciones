import { ReactNode } from 'react'

type HeaderProps = {
  children: ReactNode
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className='sticky top-0 z-50 w-full'>
      <div className='flex h-[10px]'>
        <div className='flex-1 bg-u-blue-500' />
        <div className='flex-[1_1_60%] bg-u-orange-primary-500' />
      </div>
      {children}
    </header>
  )
}
