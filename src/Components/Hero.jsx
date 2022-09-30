import { Svg } from './Svg/CV'
import { Gh} from './Svg/Gh'
import '../home.css'

export function Hero () {
  return (<>
    <div id='hero' className='bg-[#efe] absolute w-full ' />
    <section  className='flex bg-[#1c1b22] flex-col justify-center md:grid md:grid-cols-2 pb-8 pl-4 md:pl-9 pr-4 md:pr-9 md:mb-0 h-[100vh] pt-[10vh]'>
      <header className='flex w-full xl:pl-[5rem]  pt-8 mx-[auto] md:ml-[0] flex-col w-fit md:h-[80vh] justify-center  max-w-2xl'>
        <h1 id='name' className='flex flex-wrap justify-center font-extrabold  leading-[76px] md:flex-col lg:flex-row'>
          <span id='leonardo' className='text-[#00ddff] text-6xl md:text-7xl'>Leonardo </span>
          <span id='torrico' className='text-[#00ddff] text-6xl md:text-7xl'> Torrico</span>
        </h1>
        <p id='namep' className='text-[#eee]  text-center text-lg md:text-[24px] pt-4 leading-8 md:pb-16 lg:pb-12'>
          Desarrollador de <span className="">Productos</span> <span className=''>Digitales</span>
        </p>
        <div id='buttons1'>
          <a href="#_" download={true} className="border-color-[#efe] border-2 border-solid px-[8rem] md:mr-4 mb-4 relative h-[60px] inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group w-full">
            <span className="w-32 h-32 rotate-45 translate-x-36 -translate-y-8 absolute left-0 -top-8 bg-white opacity-[3%]"></span>
            <span className="absolute top-[55px] -left-[40px] w-[255px] md:w-[530px] md:rotate-[14deg] md:-left-[320px] h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:translate-x-[50px] md:group-hover:translate-x-[250px]"></span>
            <span className="flex mx-[auto] justify-between w-[156px] relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
              <Svg />
              <span 
                className='flex items-center w-full text-left ml-[7px]'
              >
                Descargar CV
              </span> 
            </span>
            <span className="absolute inset-0 border-2 border-color border-transparent rounded-full"></span>
          </a>
          <a href="https://github.com/loepardis" target="blank" referrerPolicy="no-referrer" className="border-color-[#efe] border-2 border-solid px-[8rem] md:mr-4 mb-4 relative h-[60px] inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group w-full">
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            
            <span className="absolute top-[55px] -left-[40px] w-[255px] md:w-[530px] md:rotate-[14deg] md:-left-[320px] h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:translate-x-[50px] md:group-hover:translate-x-[250px]"></span>
            
            <span className="flex mx-[auto] justify-between w-[156px] relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
            <Gh />
            <span 
              className='flex items-center w-full text-left ml-[7px]'
            >
              Ir a GitHub
            </span> 
            </span>
            <span className="absolute inset-0 border-2 border-transparent rounded-full"></span>
          </a>
         </div>
      </header>
      <div className='md:flex items-center self-center md:flex-row max-w-[1200px] flex flex-col place-content-center'>
        <picture className='self-center'>
          <img id='photo' loading='eager' className='mb-8 object-cover mx-[auto] rounded-br-lg rotate-[25deg] scale-75 lg:scale-100' src='yo_transparent.webp' alt='Retrato de Leonardo' />
        </picture>
        <div 
          id='buttons'
          className='mx-[auto] w-full flex flex-col justify-between text-center '
        >
          <a href="#_" download={true} className="border-color-[#efe] border-2 border-solid px-[8rem] md:mr-4 mb-4 relative h-[60px] inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group w-full">
            <span className="w-32 h-32 rotate-45 translate-x-36 -translate-y-8 absolute left-0 -top-8 bg-white opacity-[3%]"></span>
            
            <span className="absolute top-[55px] -left-[40px] w-[255px] h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:translate-x-[50px]"></span>
            
            <span className="flex mx-[auto] justify-between w-[156px] relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
            <Svg />
            <span 
              className='flex items-center w-full text-left ml-[7px]'
            >
              Descargar CV
            </span> 
            </span>
            <span className="absolute inset-0 border-2 border-transparent rounded-full"></span>
          </a>
          <a href="https://github.com/loepardis" target="blank" referrerPolicy="no-referrer" className="border-color-[#efe] border-2 border-solid px-[8rem] md:mr-4 mb-4 relative h-[60px] inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group w-full">
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            
            <span className="absolute top-[55px] -left-[40px] w-[255px] h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:translate-x-[50px]"></span>
            
            <span className="flex mx-[auto] justify-between w-[156px] relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
            <Gh />
            <span 
              className='flex items-center w-full text-left ml-[7px]'
            >
              Ir a GitHub
            </span> 
            </span>
            <span className="absolute inset-0 border-2 border-transparent rounded-full"></span>
          </a>
        </div>
      </div>
      <div id='circle' />
      <div id='circle_' />
    </section>
    </>
  )
}