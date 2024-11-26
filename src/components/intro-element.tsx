'use client'

export default function IntroElement({
  icon,
  title,
  content,
}: {
  icon: JSX.Element
  title: string
  content: React.ReactNode
}) {
  return (
    <div className='flex w-full flex-col'>
      <div className='mb-3 flex justify-center'>
        <div className='flex items-center justify-center rounded-full bg-u-orange-primary-500 p-4'>
          {icon}
        </div>
      </div>
      <div>
        <h5 className='mb-2 text-center text-xl font-semibold'>{title}</h5>
        <div className='text-center'>{content}</div>
      </div>
    </div>
  )
}
