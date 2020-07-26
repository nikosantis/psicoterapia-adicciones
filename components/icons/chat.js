export default function ChatIcon (props) {
  return (
    <svg
      viewBox='0 0 8 13'
      width={8}
      height={13}
      {...props}
    >
      <path
        opacity={0.13}
        fill='#0000000'
        d='M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z'
      />
      <path
        fill='currentColor'
        d='M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z'
      />
    </svg>
  )
}
