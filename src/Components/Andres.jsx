import { LayoutProject } from './LayoutProject'
import { Container } from './Mini/Container'
import { Description } from './Mini/Description'
import { Title } from './Mini/Title'
import { Video } from './Video'

export function Andres () {
  return (
    <LayoutProject
      to='gym' direction
    >
      <Video
        src='https://res.cloudinary.com/djc1umong/video/upload/v1663289304/gym_rknnsm.webm'
      />
      <Container direction>
        <Title>Andres Gimnasio</Title>
        <Description github='https://github.com/leoncii/andres' url='https://blo-post.vercel.app'>Web informativa sobre precios, descuentos y planes que tiene el Gimnasio.</Description>
      </Container>
    </LayoutProject>
  )
}
