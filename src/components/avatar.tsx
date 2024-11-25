'use client'

import Image, { StaticImageData } from 'next/image'

type AvatarProps = {
  src: StaticImageData
  name: string
  title?: string
  content: string
}

export default function Avatar({ src, name, title, content }: AvatarProps) {
  return (
    <div className='flex w-full flex-col items-center'>
      <div className='relative mb-6 size-[200px] overflow-hidden rounded-full'>
        <Image
          src={src}
          placeholder='blur'
          alt={name}
          fill
          sizes='(max-width: 768px) 100vw,
          25vw'
          className='rounded-full object-cover'
        />
      </div>

      <div className='text-center'>
        <h4 className='mb-2 font-medium'>{name}</h4>
        {title && <h5 className='mb-1 text-sm font-bold'>{title}</h5>}
        <p className='mb-1 text-sm'>{content}</p>
      </div>
    </div>
  )
}
