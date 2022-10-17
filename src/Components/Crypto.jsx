import { Description } from './Mini/Description'
import { Title } from './Mini/Title'
import { Container } from './Mini/Container'
import { LayoutProject } from './LayoutProject'
import { Video } from './Video'

export function Crypto () {
  return (
    <LayoutProject
      to='crypto' direction
    >
      <Video
        src='https://res.cloudinary.com/djc1umong/video/upload/v1666062388/crypo_cjuz0v.webm'
      />
      <Container direction>
        <Title>Crypto Market</Title>
        <Description github='https://github.com/leoncii' url='https://play.google.com/store/apps/details?id=com.LTB_144.CryptoMarket'>
          App hecha con React Native y subida a la PlayStore muestra los precios actuales de las criptomonedas y las compara con otras plataformas.
        </Description>
      </Container>
    </LayoutProject>
  )
}
