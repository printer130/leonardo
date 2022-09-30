import { Title5 } from './Mini/Title5'
import { Description } from './Mini/Description'

export function About () {
  return (
    <div className='mb-8'>
      <Title5 text='h-[88px]'>
        Sobre mí
      </Title5>
      <Description only>
        Busco formar parte de un equipo de Desarrollo de Aplicaciónes (Productos Digitales) desafiantes, soy autodidacta hace cuatro años 
        me gusta mucho escribir códido, y tambien articulos en mi blog para una pequeña comunidad de Discord y YouTube,
        es importante estar en constante creciemiento poniendo a prueba tus habilidades y mejorando.
      </Description>
      <div className='pt-8'>
        <Title5 text='h-[88px]'>
          Habilidades
        </Title5>
        <Description only>
          🕴🏼 Habilidad para plasmar requerimientos del cliente en soluciones técnicas.
        </Description>
        <Description only>
          🥷🏻 Habilidad para dominar tecnologías modernas rápidamente.
        </Description>
        <Description only>
          🏋️  Habilidad para trabajar independientemente.
        </Description>
      </div>
    </div>
  )
}
