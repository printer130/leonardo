import { Description } from './Mini/Description'
import { Image } from './Mini/Image'
import { Title } from './Mini/Title'
import { Container } from './Mini/Container'
import { LayoutProject } from './LayoutProject'

export function Crypto () {
  return (
    <LayoutProject direction>
      <Image src='crypto.webp' alt='Portada de https://play.google.com/store/apps/details?id=com.LTB_144.CryptoMarket' special={['playstore1_c.webp', 'playstore2_c.webp']} />
      <Container direction>
        <Title>Crypto Market</Title>
        <Description github='https://github.com/leoncii' url='https://play.google.com/store/apps/details?id=com.LTB_144.CryptoMarket'>Esto esta en la play store</Description>
      </Container>
    </LayoutProject>
  )
}
