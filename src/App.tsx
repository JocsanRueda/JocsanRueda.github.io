
import GlowBackground from './components/glow-background'
import HeroSection from './components/hero-section'
import Layout from './components/layout'
import { MenuBar } from './components/menu-bar'
import ParticlesBackGround from './components/particles-background'
import { ThemeProvider } from './components/theme-provider'
import { Experience } from './page/experience'
import { Expertise } from './page/expertise'
import { Projects } from './page/projects'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {



  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> 
        <Router basename='/'>
          <Layout>
                     
            <MenuBar/>
            <Routes>
              <Route path="/" element={<HeroSection/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/experience" element={<Experience/>}/>
              <Route path="/expertise" element={<Expertise/>}/>

            </Routes>
          </Layout>
        </Router>

        
         
         

        
        <ParticlesBackGround />
        <GlowBackground/>
        
      </ThemeProvider>
      
    </>
  )
}

export default App
