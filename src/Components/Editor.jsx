import { useEffect, useRef, useState } from 'react'
/* import Typewriter from '../../node_modules/typewriter-effect/dist/core' */
import Typewriter from 'typewriter-effect/dist/core'

export const Editor = () => {
  const editor = useRef()
  const [isVisible, setIsVisible] = useState(false)

  const options = {
    rootMargin: '0px',
    threshold: 0.2
  }

  const handleObserver = (entries, observer) => {
    const [entry] = entries

    if (entry.isIntersecting) {
      setIsVisible(true)
      isVisible && printer()
    }
  }

  useEffect(() => {
    const observer = new window.IntersectionObserver(handleObserver, options)
    if (editor.current) observer?.observe(editor.current)

    return () => {
      if (editor.current) observer?.unobserve(editor.current)
    }
  }, [editor.current, options])

  function printer () {
    if (editor?.current) {
      const typewriter = new Typewriter(editor?.current, {
        loop: false,
        delay: 75,
        wrapperClassName: 'typewriter-wrapper-editor'
      })
      return typewriter
        .pauseFor(1500)
        .typeString('<strong>return</strong>')
        .typeString(' <Layout')
        .typeString('>')
        .pauseFor(350)
        .typeString('<div></div>')
        .typeString('<')
        .typeString('<span>ListOfItems </span>')
        .typeString('data={<span style="color: blue;">data</span>} /')
        .typeString('>')
        .typeString('<div></div>')
        .pauseFor(850)
        .typeString('</ Layout')
        .typeString('>')
        .stop()
        .start()
    }
  }

  return (
    <div className='mt-8 max-w-[540px] max-h-[608px] mx-4 shadow-sm md:mx-[auto]'>
      <div className='max-w-[486px] h-[300px] border-b border-x border-[#eaeaea] '>
        <div className='flex h-[46px] border-b border-[#eaeaea] border-solid'>
          <div className='flex h-[46px] w-[52px] justify-between items-center mx-[16px]'>
            <span className='block rounded w-3 h-3 bg-[#FF5F56]' />
            <span className='block rounded w-3 h-3 bg-[#FFBD2E]' />
            <span className='block rounded w-3 h-3 bg-[#27C93F]' />
          </div>
          <div id='ind' className='px-4 ml-4 border-t border-l border-r border-[#eaeaea] border-solid self-center'>Index.js</div>
        </div>
        <div className='px-4 mt-4'>
          <p><strong>export default function</strong> <span>(data) &#x0007B;</span></p>
          <p ref={editor} className='pl-4' />
          <p>&#x0007D;</p>
        </div>
      </div>
    </div>
  )
}
