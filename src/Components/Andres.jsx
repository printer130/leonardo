import { LayoutProject } from './LayoutProject'
import { Container } from './Mini/Container'
import { Description } from './Mini/Description'
import { Image } from './Mini/Image'
import { Title } from './Mini/Title'
import { Video } from './Video'

export function Andres () {
  return (
    <LayoutProject direction>
      <Video
        src='https://res.cloudinary.com/djc1umong/video/upload/v1663289304/gym_rknnsm.webm'
      />
      {/* <Image src='andres.webp' alt='Portada de andrestorrico.com' /> */}
      <Container direction>
        <Title>Andres Gimnasio</Title>
        <Description github='https://github.com/leoncii/andres' url='https://blo-post.vercel.app'>Web informativa para mostrar los precios, descuentos y planes de un gimnasio.</Description>
      </Container>
    </LayoutProject>
  )
}
