import { Title5 } from './Mini/Title5'
import { Description } from './Mini/Description'
import { Agree } from './Svg/agree'
import Alone from './Svg/Alone'
import { Known } from './Svg/known'

export function About () {
  return (
    <div className='mb-8'>
      <Title5 text='h-[88px]'>
        Sobre mí
      </Title5>
      <Description only>
        Busco formar parte de un equipo de Desarrollo de Aplicaciones (Productos Digitales) que sean desafiantes, soy autodidacta hace cuatro años
        me gusta mucho escribir código, y también artículos en mi blog para una pequeña comunidad de Discord y YouTube,
        es importante estar en constante crecimiento poniendo a prueba tus habilidades y mejorando.
      </Description>
      <Title5 text='h-[88px]'>
        Habilidades
      </Title5>
      <Description only>
        <Agree /> Habilidad para plasmar requerimientos del cliente en soluciones técnicas ágilmente.
      </Description>
      <Description only>
        <Alone /> Habilidad para dominar tecnologías modernas rápidamente.
      </Description>
      <Description only>
        <Known /> Habilidad para trabajar independientemente.
      </Description>
    </div>
  )
}
