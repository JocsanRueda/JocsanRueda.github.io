import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import BlurBackground from '@/components/blur-background'
import GlowBackground from '@/components/glow-background'
import HeroSection from '@/components/hero-section'
import Layout from '@/components/layout'
import { MenuBar } from '@/components/menu-bar'
import ParticlesBackGround from '@/components/particles-background'
import ProjectDetail from '@/components/project-detail'
import { ThemeProvider } from '@/components/theme-provider'

import { Expertise } from '@/page/expertise'
import { Projects } from '@/page/project'
import { Experience } from './page/experience'
import ExperienceDetail from './components/experience-detail'

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> 
  
        <Router basename='/'>
          <BlurBackground/>
          <Layout>
            <MenuBar/>
            <Routes>
              <Route path="/" element={<HeroSection/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/projects/:id" element={<ProjectDetail/>}/>
              <Route path="/experience" element={<Experience/>}/>
              <Route path="/experience/:id" element={<ExperienceDetail/>}/>
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
