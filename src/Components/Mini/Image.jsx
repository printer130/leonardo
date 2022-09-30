export function Image ({ src, alt, special = null }) {
  return (
    <div className={`rounded-lg mx-[auto] md:h-[70vh] mp-2 ${!special ? 'max-w-3xl overflow-auto' : 'w-[300px]'}`}>
      {
        special === null
          ? <picture>
            <img className='object-contain h-fit' src={src} alt={alt} />
          </picture>
          : <picture className='flex rounded-lg overflow-x-auto w-full md:w-[326px] min-h-fit'>
            {
              special.map((item, index) => (
                <img key={index} className='object-contain h-fit mr-4' src={item} alt={alt} />
              ))
            }
            </picture>
  }
    </div>
  )
}
