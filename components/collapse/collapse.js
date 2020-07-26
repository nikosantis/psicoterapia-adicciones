export default function Collapse ({ title, children, show }) {
  return (
    <div className='card'>
      <div className='card-header'>
        <h2 className='mb-0'>
          <button
            className={`btn btn-link btn-block text-left${show ? ' collapsed' : ''}`}
            type='button'
            data-toggle='collapse'
            aria-expanded={show.toString()}
            aria-controls='collapseOne'
          >
            {title}
          </button>
        </h2>
      </div>

      <div
        id='collapseOne'
        className={`collapse${show ? ' show' : ''}`}
        aria-labelledby='headingOne'
      >
        <div className='card-body'>
          {children}
        </div>
      </div>
    </div>
  )
}
