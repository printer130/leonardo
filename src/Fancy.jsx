import { useRef, useEffect } from 'react'

export const consoleText = (words, id, colors) => {
  if (colors === undefined) colors = ['#fff']
  let visible = true
  const con = document.getElementById('console')
  let letterCount = 1
  let x = 1
  let waiting = false
  const target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function () {
    if (letterCount === 0 && waiting === false) {
      waiting = true
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function () {
        const usedColor = colors.shift()
        colors.push(usedColor)
        const usedWord = words.shift()
        words.push(usedWord)
        x = 1
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x
        waiting = false
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true
      window.setTimeout(function () {
        x = -1
        letterCount += x
        waiting = false
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x
    }
  }, 120)
  window.setInterval(function () {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false
    } else {
      con.className = 'console-underscore'

      visible = true
    }
  }, 350)
}

export function Fancy () {
  const ref = useRef()
  const refCode = useRef()
  const refText = useRef()
  // function([string1, string2],target id,[color1,color2])
  const typeWriting = ['nmap -sS --min-rate 5000 -p- --open -vvv -n -Pn 76.76.21.241 -oG openPorts ']
  const typeWritingId = 'text'
  const typeWritingColors = ['green', 'rebeccapurple', 'lightblue']

  useEffect(() => {
    ref?.current && consoleText(typeWriting, typeWritingId, typeWritingColors)
  }, [ref.current])

  return (
    <pre ref={ref} className='writing-container'>
      <code ref={refCode} className='console-container'><span ref={refText} id='text' /></code>
    </pre>
  )
}
