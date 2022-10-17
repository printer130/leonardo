export function LayoutProject ({ children, direction = null, to }) {
  return (
    <div
      className={`flex w-full mb-24 items-center md:mb-44 flex-col-reverse place-content-center xl:flex-row ${direction && 'flex-row-reverse'}`}
      id={to}
      name={to}
    >
      {children}
    </div>
  )
}
