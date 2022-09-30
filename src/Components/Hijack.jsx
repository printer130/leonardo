import { LayoutProject } from './LayoutProject'
import { Container } from './Mini/Container'
import { Description } from './Mini/Description'
import { Title } from './Mini/Title'
import { Video } from './Video'

export function Hijack () {
  return (
    <LayoutProject direction>
      <Video
        src='https://res.cloudinary.com/djc1umong/video/upload/v1663289304/gym_rknnsm.webm'
      />
      <Container direction>
        <Title>Hijack | Blog</Title>
        <Description github='https://github.com/leoncii/hijack' url='https://hijack.vercel.app'>
        Guias (Writeups 📚) de máquinas en <a href='https://app.hackthebox.com' noreferer="true" target="_blank">Hack The Box</a>.
        </Description>
      </Container>
    </LayoutProject>
  )
}
