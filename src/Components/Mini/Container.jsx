export function Container ({ children, direction }) {
  return (
    <div className={`w-full text-center self-center xl:pl-44 ${direction && 'xl:pl-0'}`}>
      {children}
    </div>
  )
}
