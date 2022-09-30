import './App.css'
import { About } from './Components/About'
import { Footer } from './Components/Footer'
import { Hero } from './Components/Hero'
import { Layout } from './Components/Layout'
import { Proyects } from './Components/Proyects'
/* import TypeWriting from './Components/TypeWriting'
 */import { Editor } from './Components/Editor'
import { Certificates } from './Components/Certificates'

function App () {
  console.log('1')
  return (
    <>
      <Hero />
      <Editor />
      <Layout>
        <Proyects />
        <About />
        {/* <TypeWriting /> */}
        <Certificates />
      </Layout>
      <Footer />
    </>
  )
}

export default App
