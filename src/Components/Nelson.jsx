import { LayoutProject } from './LayoutProject'
import { Container } from './Mini/Container'
import { Description } from './Mini/Description'
import { Image } from './Mini/Image'
import { Title } from './Mini/Title'
import { Video } from './Video'

export function Nelson () {
  return (
    <LayoutProject>
      <Video
        src='https://res.cloudinary.com/djc1umong/video/upload/v1663298377/spa_cctvbv.webm'
      />
      {/* <Image src='nelson.webp' alt='Portada de https://nelson-peluqueria.com' /> */}
      <Container>
        <Title>Nelson Peluqueria</Title>
        <Description github='https://github.com/leoncii/spa-nelson' url='https://nelson-peluqueria.com/'>Un sitio web para peluqueria, el cual muestra los trabajos realizados como Tintes, Balayage, Cortes de pelo. Con esta web mejoró la conversión de clientes que visitaban la web segun datos de google analytics</Description>
      </Container>
    </LayoutProject>
  )
}
