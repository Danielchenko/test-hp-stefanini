
import './App.css'
import { CharacterList } from './components/CharacterList'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

import './styles/global.scss'

function App() {
  return (
   <div className="layout">
      <Header />
      <Hero />
      <section className="content">
        <CharacterList />
      </section>
      <Footer />

  </div>


    
  )
}

export default App
