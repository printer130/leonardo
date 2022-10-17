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
        <Description github='https://github.com/leoncii/lab' url='https://lab-blond.vercel.app'>Aplicación de laboratorios (químicos), registra usuarios basados en roles para gestionar los análisis de los clientes como hemogramas, pruebas de embarazo, PCR COVID 19 y más de 300 análisis, cuales pueden ser descargados en formato PDF y un sistema de arqueo.</Description>
      </Container>
    </LayoutProject>
  )
}
