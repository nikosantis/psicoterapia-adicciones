import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge'
}

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img
          width='1200'
          height='630'
          src='https://diplomadopsicoterapia.cl/images/diplomado-og.png'
          alt='Diplomado en Adicciones | Universidad de Santiago de Chile'
        />
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  )
}
