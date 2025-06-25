export type CheckProps = {
  className?: string
  width?: number
  height?: number
}
export function Check({ className, width = 18, height = 18 }: CheckProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='18' height='18' rx='4' transform='matrix(-1 0 0 1 18 0)' fill='currentColor' />
      <path d='M7.33333 13L4 9.7276L5.4823 8.2724L7.33333 10.0947L12.5177 5L14 6.4552L7.33333 13Z' fill='white' />
    </svg>
  )
}
