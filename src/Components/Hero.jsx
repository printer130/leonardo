import { Svg } from './Svg/CV'
import { Gh } from './Svg/Gh'
import '../home.css'

export function Hero () {
  return (
    <>
      <div
        id='hero'
        className='bg-cyan-50 absolute w-full'
      />
      <section className='flex bg-[#1c1b22] flex-col justify-center md:grid gap-4 md:grid-cols-2 pb-8 md:pl-9 md:pr-9 md:mb-0 h-[100vh] pt-[10vh]'>
        <header className='flex w-full xl:pl-[5rem]  pt-8 mx-[auto] md:ml-[0] flex-col md:h-[80vh] justify-center  max-w-2xl'>
          <h1 id='name' className='flex flex-wrap justify-center font-extrabold  leading-[76px] md:flex-col lg:flex-row'>
            <span id='leonardo' className='text-[#00ddff] text-6xl md:text-7xl'>Leonardo </span>
            <span id='torrico' className='text-[#efe] text-6xl md:text-7xl'> Torrico</span>
          </h1>
          <p id='namep' className='text-[#eee]  text-center text-lg md:text-[24px] pt-4 leading-8 md:pb-16 lg:pb-12'>
            Desarrollador de <span className=''>Productos</span> <span className=''>Digitales</span>
          </p>
          <div id='buttons1'>
            <a href='/cv.pdf' download className='border-color-[#efe] border-2 border-solid md:mr-4 mb-4 relative h-[60px] inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group w-full'>
              <span className='w-32 h-32 rotate-45 translate-x-36 -translate-y-8 absolute left-0 -top-8 bg-white opacity-[3%]' />
              <span className='absolute top-[55px] -left-[40px] w-[255px] md:w-[530px] md:rotate-[14deg] md:-left-[320px] h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:translate-x-[50px] md:group-hover:translate-x-[250px' />
              <span className='flex mx-[auto] justify-between  relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900'>
                <Svg />
                <span
                  className='flex items-center w-full text-left ml-[7px]'
                >
                  Descargar CV
                </span>
              </span>
              <span className='absolute inset-0 border-2 border-color border-transparent rounded-full' />
            </a>
            <a href='https://github.com/printer130' target='blank' referrerPolicy='no-referrer' className='border-color-[#efe] border-2 border-solid md:mr-4 mb-4 relative h-[60px] inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group w-full'>
              <span className='w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]' />
              <span className='absolute top-[55px] -left-[40px] w-[255px] md:w-[530px] md:rotate-[14deg] md:-left-[320px] h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:translate-x-[50px] md:group-hover:translate-x-[250px]' />
              <span className='flex mx-[auto] justify-between  relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900'>
                <Gh />
                <span
                  className='flex items-center w-full text-left ml-[7px]'
                >
                  Ir a GitHub
                </span>
              </span>
              <span className='absolute inset-0 border-2 border-transparent rounded-full' />
            </a>
          </div>
        </header>
        <div className='md:flex items-center self-center md:flex-row max-w-[1200px] flex flex-col place-content-center'>
          {/* <picture clasHabsName='self-center'>
            <img id='photo' loading='eager' className='mb-8 object-cover mx-[auto] rounded-br-lg rotate-[25deg] scale-75 lg:scale-100' src='yo_transparent.webp' alt='Retrato de Leonardo' />
          </picture> */}
          <div className='z-10 flex gap-1 sm:gap-4'>
            {/* 1 */}
            <div>
              <a
                className='card cursor-pointer mb-4'
                href='#u_lab'
              >
                <div className='card-image'>
                  <figure className='image is-4by3'>
                    <img
                      src='https://res.cloudinary.com/djc1umong/image/upload/v1666059935/lab_d2_grid_wbe2cn.webp'
                      alt='Placeholder image'
                    />
                  </figure>
                </div>
                <div className='card-content bg-cyan-900'>
                  <div className='media'>
                    <div className='media-content'>
                      <p className='title is-4  top-0 text-2xl pl-2 font-black text-cyan-500'>U - Lab</p>
                    </div>
                  </div>
                  <div className='content pl-2 text-cyan-50'>
                    Aplicación Web | Laboratio.
                  </div>
                </div>
              </a>

              <a
                className='card cursor-pointer'
                href='#hijack'
              >
                <div className='card-image'>
                  <figure className='image is-4by3'>
                    <img src='https://res.cloudinary.com/djc1umong/image/upload/v1666060008/hijack_d2_grid2_gdclnt.webp' alt='Placeholder image' />
                  </figure>
                </div>
                <div className='card-content bg-cyan-900'>
                  <div className='media'>
                    <div className='media-content'>
                      <p className='title is-4 text-2xl font-black text-cyan-500 pl-2'>Hijack</p>
                    </div>
                  </div>
                  <div className='content pl-2 text-cyan-50'>
                    Resolución de maquinas.
                  </div>
                </div>
              </a>
            </div>
            {/* 2 */}
            <div className='pt-6'>
              <a
                className='card mb-4 cursor-pointer'
                href='#gym'
              >
                <div className='card-image'>
                  <figure className='image is-1by1'>
                    <img src='https://res.cloudinary.com/djc1umong/image/upload/v1666060157/andres_d2_grid_bdbcxn.webp' alt='Placeholder image' />
                  </figure>
                </div>
                <div className='card-content bg-cyan-900'>
                  <div className='media'>
                    <div className='media-content'>
                      <p className='title is-4  text-2xl font-black pl-2 text-cyan-500'>Gimnasio</p>
                    </div>
                  </div>

                  <div className='content pl-2 text-cyan-50'>
                    Web informativa.
                  </div>
                </div>
              </a>

              <a
                className='card cursor-pointer'
                href='#spa'
              >
                <div className='card-image'>
                  <figure className='image is-4by3'>
                    <img src='https://res.cloudinary.com/djc1umong/image/upload/v1666059695/spa_d2_grid2__gztksj.webp' alt='Placeholder image' />
                  </figure>
                </div>
                <div className='card-content bg-cyan-900'>
                  <div className='media'>
                    <div className='media-content top-0'>
                      <p className='title is-4 top-0 text-2xl font-black pl-2 text-cyan-500'>Peluqueria Spa</p>
                    </div>
                  </div>
                  <div className='content pl-2 text-cyan-50'>Web Informativa.
                  </div>
                </div>
              </a>
            </div>

            {/* 3 */}
            <div className='pt-3'>

              <a
                className='card mb-4 cursor-pointer'
                href='#blog'
              >
                <div className='card-image'>
                  <figure className='image is-1by1'>
                    <img src='https://res.cloudinary.com/djc1umong/image/upload/v1666059876/pim_d2_grid_h9peay.webp' alt='Placeholder image' />
                  </figure>
                </div>
                <div className='card-content bg-cyan-900'>
                  <div className='media'>
                    <div className='media-content'>
                      <p className='title is-4 top-0 text-2xl font-black pl-2 left-2 text-cyan-500'>Blog</p>
                    </div>
                  </div>

                  <div className='content pl-2 text-cyan-50'>
                    Artículos sobre JavaScript.
                  </div>
                </div>
              </a>

              <a
                className='card cursor-pointer'
                href='#crypto'
              >
                <div className='card-image'>
                  <figure className='image is-4by3'>
                    <img src='https://res.cloudinary.com/djc1umong/image/upload/v1666062307/crypto_d2_grid_1_mf4p1x.webp' alt='Placeholder image' />
                  </figure>
                </div>
                <div className='card-content bg-cyan-900'>
                  <div className='media'>
                    <div className='media-content top-0'>
                      <p className='title is-4 top-0 text-2xl font-black pl-2 text-cyan-500'>Crypto | PlayStore</p>
                    </div>
                  </div>
                  <div className='content pl-2 text-cyan-50'>
                    Aplicación sobre criptomonedas.
                  </div>
                </div>
              </a>
            </div>

          </div>
          <div
            id='buttons'
            className='mx-[auto] w-full flex flex-col justify-between text-center '
          >
            <a href='/cv.pdf' download className='border-color-[#efe] border-2 border-solid md:mr-4 mb-4 relative h-[60px] inline-flex items-center justify-start  px-5 py-3 overflow-hidden font-bold rounded-full group w-full'>
              <span className='w-32 h-32 rotate-45 translate-x-36 -translate-y-8 absolute left-0 -top-8 bg-white opacity-[3%]' />

              <span className='absolute top-[55px] -left-[40px] w-[255px] h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:translate-x-[50px]' />

              <span className='flex mx-[auto] justify-between  relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900'>
                <Svg />
                <span
                  className='flex items-center w-full text-left ml-[7px]'
                >
                  Descargar CV
                </span>
              </span>
              <span className='absolute inset-0 border-2 border-transparent rounded-full' />
            </a>
            <a href='https://github.com/printer130' target='blank' referrerPolicy='no-referrer' className='border-color-[#efe] border-2 border-solid md:mr-4 mb-4 relative h-[60px] inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group w-full'>
              <span className='w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]' />

              <span className='absolute top-[55px] -left-[40px] w-[255px] h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:translate-x-[50px]' />

              <span className='flex mx-[auto] justify-between relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900'>
                <Gh />
                <span
                  className='flex items-center w-full text-left ml-[7px]'
                >
                  Ir a GitHub
                </span>
              </span>
              <span className='absolute inset-0 border-2 border-transparent rounded-full' />
            </a>
          </div>
        </div>
        <div id='circle' />
        <div id='circle_' />
      </section>
    </>
  )
}
