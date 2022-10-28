import { LayoutProject } from './LayoutProject'
import { Container } from './Mini/Container'
import { Description } from './Mini/Description'
import { Title } from './Mini/Title'
import { Video } from './Video'

export function Lab () {
  return (
    <LayoutProject to='u_lab'>
      <Video
        src='https://res.cloudinary.com/djc1umong/video/upload/v1663283636/lab_vnmroo.webm'
      />
      <Container>
        <Title>U Lab</Title>
        <Description github='https://github.com/leoncii/lab' url='https://lab-blond.vercel.app'>Registra usuarios y los gestiona para análisis de hemogramas, pruebas de embarazo, PCR COVID 19, etc.</Description>
      </Container>
    </LayoutProject>
  )
}
