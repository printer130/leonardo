import { LayoutProject } from './LayoutProject'
import { Container } from './Mini/Container'
import { Description } from './Mini/Description'
import { Image } from './Mini/Image'
import { Title } from './Mini/Title'
import { Video } from './Video'

export function Lab () {
  return (
    <LayoutProject>
      <Video
        src='https://res.cloudinary.com/djc1umong/video/upload/v1663283636/lab_vnmroo.webm'
      />
    <Container>
        <Title>U Lab</Title>
        <Description github='https://github.com/leoncii/lab' url='https://lab-blond.vercel.app'>Aplicación de laboratorios (químicos 🧪 ),que registra usuarios basado en roles para gestionar los análisis de los clientes como hemogramas, pruebas de embarazo, PCR COVID 19 y mas de 300 análisis, los cuales se puede descargar en formato PDF para que el paciente lo tenga en virtual y un sistema de arqueo de caja.</Description>
      </Container>
    </LayoutProject>
  )
}
