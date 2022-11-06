export function Container ({ children, direction }) {
  return (
    <div
      className={`w-full text-center self-center ${direction && 'xl:pl-0'}`}
    >
      {children}
    </div>
  )
}
