export function LayoutProject ({ children, direction = null, to }) {
  return (
    <div
      className={`flex w-full items-center flex-col-reverse place-content-center xl:flex-row ${direction && 'flex-row-reverse'}`}
      id={to}
      name={to}
    >
      {children}
    </div>
  )
}
