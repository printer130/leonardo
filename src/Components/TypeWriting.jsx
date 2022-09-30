import { useEffect, useRef, useState } from 'react'
/* import Typewriter from '../../node_modules/typewriter-effect/dist/core' */
import Typewriter from 'typewriter-effect/dist/core'
import { Heart } from '../../Icons/heart'
import { Fire } from '../../Icons/Fire'
import { date, dateTime } from '../../constants/time'
import { newLineCmd } from '../../constants/image'

export default function TypeWriting() {
  const node = useRef()
  const [isVisible, setIsVisible] = useState(false)

  const options = {
    rootMargin: '0px',
    threshold: 0.8
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
    if (node.current) observer?.observe(node.current)

    return () => {
      if (node.current) observer?.unobserve(node.current)
    }
  }, [node.current, options])

  const printer = () => {
    if (node?.current) {
      const typewriter = new Typewriter(node.current, {
        loop: false,
        delay: 75,
        wrapperClassName: 'typewriter-wrapper'
      })

      typewriter
        .pauseFor(2500)
        .typeString(`<span style="color: #BF4040;"=>${newLineCmd} nmap </span>`)
        .pauseFor(300)
        .typeString('<span style="color: #40BF43;">-sS --min-rate 5000 -p- --open -vvv -n -Pn 76.76.21.241 -oG openPorts</span>')
        .pauseFor(4000)
        .typeString(`<span style="display: block; color:darkcyan;">Starting Nmap 7.92 ( https://nmap.org ) at ${date} ${dateTime} -04</span>`)
        .pauseFor(5000)
        .typeString(`<span style="display: block; color:darkcyan;">Initiating SYN Stealth Scan at ${dateTime}</span>`)
        .pauseFor(6000)
        .typeString('<span style="display: block; color:darkcyan;">Scanning 76.76.21.241 [65535 ports]</span>')
        .pauseFor(3000)
        .typeString('<span style="display: block; color:darkcyan;">PORT    STATE SERVICE REASON</span>')
        .pauseFor(1000)
        .typeString('<span style="display: block; color:darkcyan;">80/tcp  open  http    syn-ack ttl 242</span>')
        .pauseFor(1350)
        .typeString('<span style="display: block; color:darkcyan;">80/tcp  open  http    syn-ack ttl 242</span>')
        .pauseFor(1350)
        .typeString('<span style="display: block; color:darkcyan;">443/tcp open  https   syn-ack ttl 245</span>')
        .stop()
        .start()
    }
  }

  return (
    <>
      <div className='pwd'>
        <Fire />
        <span id='blockCode'>
        ~/portfolio
        <img src='github.webp' id='github' />
          <span id='gitlog'> main </span>
          <span id='time'>6.59s</span>
        </span>
      </div>
      <div id='nmap' ref={node} />
    </>
  )
}
