export default function Form () {
  function handleSubmit (evt) {
    evt.preventDefault()
  }
  return (
    <div className='contact-wrapper'>
      <form onSubmit={handleSubmit}>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label htmlFor='nombre'>Nombre</label>
            <input type='text' className='form-control' id='nombre' placeholder='Nombre' />
          </div>
          <div className='form-group col-md-6'>
            <label htmlFor='apellido'>Apellido</label>
            <input type='text' className='form-control' id='apellido' placeholder='Apellido' />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label htmlFor='email'>Correo Eletrónico</label>
            <input type='email' className='form-control' id='email' placeholder='ejemplo@email.cl' />
          </div>
          <div className='form-group col-md-6'>
            <label htmlFor='celular'>Celular</label>
            <input type='text' className='form-control' id='celular' placeholder='9 1234 5678' />
          </div>
        </div>

        <div className='form-row'>
          <div className='form-group col-md-12'>
            <label htmlFor='comentario'>Comentario</label>
            <textarea className='form-control' id='comentario' rows='3' />
          </div>
        </div>

        <button type='submit' className='btn btn-usach'>
          Enviar
        </button>
      </form>

      <style jsx>
        {`
          .contact-wrapper {
            background-color: #f8f9fa;
            padding: 50px 30px;
            border-radius: 5px;
          }

          input::placeholder {
            color: #888888;
            opacity: 0.5;
            font-weight: 300;
            font-size: 0.875rem;
          }

          .btn-usach {
            color: #fff;
            background-color: var(--casper-orange);
            border-color: var(--casper-orange);
            transition: all 0.2s ease;

            &:hover {
              background-color: var(--casper-orange-hover);
              border-color: var(--casper-orange-hover);
            }
          }
        `}
      </style>
    </div>
  )
}
