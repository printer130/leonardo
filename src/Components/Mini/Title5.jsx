
export function Title5 ({ children, text = null }) {
  return <h1 className={`text-[#021b31] text-6xl py-20 md:scale-[1.1] xl:scale-[1.2] font-black mx-[auto] text-center w-max ${text || 'md:py-28 xl:py-40'}`}>{children}</h1>
}
