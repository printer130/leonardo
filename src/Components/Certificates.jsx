import { Title5 } from './Mini/Title5'

export function Certificates () {
  return (
    <div id='cert'>
      <Title5>Algunos Certificados </Title5>
      <div className='flex justify-center'>
        <div className='grid w-fit max-w-[1200px] justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-y-auto h-[80vh]'>
          {itemData.map((item, i) => (
            <img
              key={item.img}
              className='max-w-[330px] cover'
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading='lazy'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const itemData = [
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651252065/diploma-nodejs-mongo-websockets-1_lrunbs.webp'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651252065/diploma-python-intermedio-1_ere8cc.webp'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651252065/diploma-npm-1_mx2jj1.webp'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651252065/diploma-postman-1_ymjb9k.webp'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651252065/diploma-nextjs-auth-1_lqt7cq.webp'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651252065/diploma-prework-windows-1_qb0sqb.webp'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651252066/diploma-spa-javascript-1_uzspge.webp'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651252066/diploma-react-avanzado-1_atnps8.webp'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651252066/diploma-react-router-redux-1_y0qnlz.webp'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651252066/diploma-react-estado-1_dmzpdf.webp'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651252066/diploma-ssr-1_serksh.webp'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651252066/diploma-redux-1_vjtpe0.webp'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651255386/diploma-singlepage-app-1_xyvxxy.jpg'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651255386/diploma-javascript-profesional-1_p2eo2b.jpg'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651255386/diploma-photoshop-profesional-1_pdbvzp.jpg'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651255386/diploma-html-practico-1_zvnuih.jpg'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651255386/diploma-programacion-basica-1_zsatbs.jpg'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651255387/diploma-graphql-1_mnahsi.jpg'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651255387/diploma-seguridad-empresas-1_nxpjbf.jpg'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651255387/diploma-asincronismo-js-1_pde9i2.jpg'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651255387/diploma-basico-javascript-1_wf1ggu.jpg'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651255387/diploma-python-1_tzd8te.jpg'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651255387/diploma-nestjs-1_batl7a.jpg'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651255387/diploma-scope-1_ay8lxl.jpg'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651255387/diploma-bootstrap-1_o2yyqj.jpg'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651255386/diploma-practico-css-1_mxo5vq.jpg'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651255619/diploma-despliegue-apps-1_qx3fax.webp'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651255620/diploma-fotografia-1_kertdx.webp'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651255619/diploma-bots-fb-1_sceopd.webp'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651255619/diploma-contenidos-digitales-1_otvrp5.webp'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651255619/diploma-ecmascript-6-1_eowv6e.webp'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651255619/diploma-fotografia-telefono-1_d7zzc4.webp'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651255620/diploma-introweb-1_b7t9la.webp'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651255620/diploma-mobile-first-1_t0a2hf.webp'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651255620/diploma-nfts-1_dc0vz4.webp'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651255620/diploma-introduccion-marketing-2018-1_uc4yej.webp'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651255620/diploma-javascript-navegador-1_qubppb.webp'
  },
  {
    img: 'https://res.cloudinary.com/djc1umong/image/upload/v1651255620/diploma-fundamentos-node-1_tfqokt.webp'
  }
]
