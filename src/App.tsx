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
import { routeEnum } from './shared/route.enum'
import ContactPage from './page/contact'

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> 
    
        <Router basename='/'>
          <BlurBackground/>
        
          <Layout>
         
            <MenuBar/>
            <Routes>
              <Route path={routeEnum.HOME} element={<HeroSection/>}/>
              <Route path={routeEnum.PROJECTS} element={<Projects/>}/>
              <Route path={`${routeEnum.PROJECTS}/:id`} element={<ProjectDetail/>}/>
              <Route path={routeEnum.EXPERIENCE} element={<Experience/>}/>
              <Route path={`${routeEnum.EXPERIENCE}/:id`}  element={<ExperienceDetail/>}/>
              <Route path={routeEnum.EXPERTISE} element={<Expertise/>}/>

              <Route path={routeEnum.CONTACT} element={<ContactPage/>}/>
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
