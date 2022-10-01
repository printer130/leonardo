import { LayoutProject } from './LayoutProject'
import { Container } from './Mini/Container'
import { Description } from './Mini/Description'
import { Title } from './Mini/Title'
import { Video } from './Video'

export function Hijack () {
  return (
    <LayoutProject direction>
      <Video
        src='https://res.cloudinary.com/djc1umong/video/upload/v1664594201/WhatsApp_Video_2022-09-30_at_10.30.08_PM_2_cq95fm.webm'
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
