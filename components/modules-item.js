export default function ModulesItem({ title, children }) {
  return (
    <div className='modules-item'>
      <h4>{title}</h4>
      <div>{children}</div>
      <style jsx>
        {`
          .modules-item {
            margin-bottom: 30px;
          }
          h4 {
            margin-bottom: 15px;
            font-size: 1rem;
          }
        `}
      </style>
    </div>
  )
}
