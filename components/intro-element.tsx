'use client'

type IntroElementProps = {
  icon: JSX.Element
  title: string
  text: string
  extra?: string
}

export default function IntroElement({
  icon,
  title,
  text,
  extra,
}: IntroElementProps) {
  return (
    <div className='w-fll flex flex-col'>
      <div className='mb-3 flex justify-center'>
        <div className='bg-u-orange-primary-500 flex items-center justify-center rounded-full p-4'>
          {icon}
        </div>
      </div>
      <div>
        <h5 className='mb-2 text-center text-xl font-semibold'>{title}</h5>
        <p className='text-center'>{text}</p>
        {extra && (
          <p className='text-center'>
            <small>{extra}</small>
          </p>
        )}
      </div>
    </div>
  )
}
