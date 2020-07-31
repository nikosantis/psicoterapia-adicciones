import { memo } from 'react'

function Button ({ children, loading, disabled }) {
  return (
    <button
      type='submit'
      className={`btn btn-usach${disabled ? ' disabled' : ''}`}
      disabled={disabled}
    >
      <span className='button-text'>{children}</span>
      {loading && (
        <span className='spinner-border spinner-border-sm' role='status' aria-hidden='true' />
      )}

      <style jsx>
        {`
          .btn-usach {
            color: #fff;
            background-color: var(--casper-orange);
            border-color: var(--casper-orange);
            transition: all 0.2s ease;

            &:hover {
              background-color: var(--casper-orange-hover);
              border-color: var(--casper-orange-hover);
            }

            &:disabled {
              color: #fff;
              opacity: .5;
              cursor: not-allowed;
            }
          }

          .button-text {
            ${loading && 'margin-right: 5px;'}
            ${loading && 'cursor: not-allowed;'}
          }
        `}
      </style>
    </button>
  )
}

export default memo(Button)
