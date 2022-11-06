import { Title5 } from './Mini/Title5'
import { Description } from './Mini/Description'
import { Agree } from './Svg/agree'
import Alone from './Svg/Alone'
import { Known } from './Svg/known'

export function About () {
  return (
    <div className='mb-8'>
      <div className='h-full' cls='h-[40px]'>
        <Title5>
          Sobre mí
        </Title5>
        <Description only>
          Busco formar parte de un equipo de Desarrollo de Aplicaciones (Productos Digitales) desafiantes, relato artículos técnicos en mi blog para una comunidad de desarrollo de software de Discord y YouTube :).
        </Description>
      </div>
      <div className='h-full'>
        <Title5>
          Habilidades
        </Title5>
        <Description only>
          <Agree /> Habilidad para plasmar requerimientos del cliente en soluciones técnicas a través de metodologías ágiles.
        </Description>
        <Description only>
          <Alone /> Habilidad para dominar tecnologías modernas rápidamente.
        </Description>
        <Description only>
          <Known /> Habilidad para trabajar en equipo e independientemente.
        </Description>
      </div>
    </div>
  )
}
