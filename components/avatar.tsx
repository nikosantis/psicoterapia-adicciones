import Image, { StaticImageData } from 'next/image'

type AvatarProps = {
  src: StaticImageData
  name: string
  title?: string
  content: string
}

export default function Avatar({ src, name, title, content }: AvatarProps) {
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='overflow-hidden w-[200px] h-[200px] relative rounded-full mb-6'>
        <Image
          src={src}
          placeholder='blur'
          alt={name}
          fill
          sizes='(max-width: 768px) 100vw,
          25vw'
          className='object-cover rounded-full'
        />
      </div>

      <div className='text-center'>
        <h4 className='font-medium mb-2'>{name}</h4>
        {title && <h5 className='font-bold mb-1 text-sm'>{title}</h5>}
        <p className='mb-1 text-sm'>{content}</p>
      </div>
    </div>
  )
}
