import { useFormState, useFormDispatch } from '../../lib/context-form'

export default function Comment() {
  const { comment } = useFormState()
  const { setValue } = useFormDispatch()
  return (
    <>
      <label htmlFor='comentario'>Comentario</label>
      <textarea
        className='form-control'
        id='comentario'
        rows='3'
        value={comment}
        onChange={evt => setValue('comment', evt.target.value)}
      />
    </>
  )
}
