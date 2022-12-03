import { useScroll } from 'lib/contexts/scroll'

export default function Prices() {
  const { pricesRef } = useScroll()
  return (
    <section className='bg-zinc-200 py-24' ref={pricesRef}>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='grid w-full items-center justify-center gap-x-6 gap-y-8 lg:grid-cols-3'>
          <div className='flex flex-col items-center justify-start text-center'>
            <div className='w-full rounded-lg bg-slate-50 p-8'>
              <h4 className='mb-2 text-xl font-bold'>Arancel</h4>
              <p>$1.450.000.-</p>
              <small>(incluye matrícula y certificación)</small>
            </div>
          </div>

          <div className='flex flex-col items-center justify-start text-center'>
            <div className='mb-2 w-full rounded-lg bg-slate-50 p-8'>
              <h4 className='mb-2 text-xl font-bold'>Formas de pago</h4>
              <ul className='list-disc text-left'>
                <li>
                  Pago contado 10% descuento (débito, transferencia electrónica
                  o tarjeta de crédito)
                </li>
                <li>Pago hasta en 10 cuotas de $145.000.- c/u con Letra.</li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col items-center justify-start text-center'>
            <div className='w-full rounded-lg bg-slate-50 p-8'>
              <h4 className='mb-4 text-xl font-bold'>
                Información del diplomado
              </h4>
              <a
                href='https://drive.google.com/file/d/1SdfEejRQskrnluYl_cDWGq4GMMiRA9T2/view?usp=share_link'
                target='_blank'
                className='select-none rounded bg-u-orange-primary-500 py-2 px-3 text-center font-medium text-white transition-all hover:bg-u-orange-primary-700'
                rel='noreferrer'
              >
                Descargar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
