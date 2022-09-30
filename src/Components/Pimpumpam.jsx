import { LayoutProject } from './LayoutProject'
import { Image } from './Mini/Image'
import { Container } from './Mini/Container'
import { Description } from './Mini/Description'
import { Title } from './Mini/Title'

export function Pimpumpam () {
  return (
    <LayoutProject direction>
      <Image src='pimpumpam.webp' alt='Portada de simple-pimpumpam.com' />
      <Container direction>
        <Title>Simple Pimpumpam</Title>
        <Description github='https://github.com/leoncii/simple-pimpumpam.com' url='https://blog-leoncii.vercel.app/'>Un blog sobre el ecosistema JavaScript, NFT y Blockchain.</Description>
      </Container>
    </LayoutProject>
  )
}
