
export function Svg ({ title, src, alt = 'logo' }) {
  return <img className='w-full max-w-[107px]' src={src} alt={alt} title={title} />
}
