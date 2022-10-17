import { LayoutProject } from './LayoutProject'
import { Container } from './Mini/Container'
import { Description } from './Mini/Description'
import { Title } from './Mini/Title'
import { Video } from './Video'

export function Pimpumpam () {
  return (
    <LayoutProject
      to='blog' direction
    >
      <Video
        src='https://res.cloudinary.com/djc1umong/video/upload/v1665536569/WhatsApp_Video_2022-10-11_at_9.00.42_PM_r4dwrq.webm'
      />
      <Container direction>
        <Title>Simple Pimpumpam</Title>
        <Description github='https://github.com/leoncii/simple-pimpumpam.com' url='https://blog-leoncii.vercel.app/'>
          Blog sobre JavaScript, NFT's y Blockchain.
        </Description>
      </Container>
    </LayoutProject>
  )
}
