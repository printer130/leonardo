import { LayoutProject } from './LayoutProject'
import { Container } from './Mini/Container'
import { Description } from './Mini/Description'
import { Title } from './Mini/Title'
import { Video } from './Video'

export function Nelson () {
  return (
    <LayoutProject
      to='spa'
    >
      <Video
        className='p-4'
        src='https://res.cloudinary.com/djc1umong/video/upload/v1663298377/spa_cctvbv.webm'
      />
      <Container>
        <Title>Nelson Peluqueria</Title>
        <Description github='https://github.com/leoncii/spa-nelson' url='https://spa-nelson-leoncii.vercel.app'>
          Sitio web de peluquería, muestra los trabajos realizados a la clientela como: Tintes, Balayages, Cortes de pelo, etc. Esta web mejoró la conversión de clientes al negocio, procesamiento de visitas para análisiss de marketingg através de google analítics e integraciónn con WhatsApp.
        </Description>
      </Container>
    </LayoutProject>
  )
}
