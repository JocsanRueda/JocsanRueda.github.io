import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import BlurBackground from '@/components/blur-background'
import GlowBackground from '@/components/glow-background'
import HeroSection from '@/components/hero-section'
import Layout from '@/components/layout'
import { MenuBar } from '@/components/menu-bar'
import ParticlesBackGround from '@/components/particles-background'
import { ThemeProvider } from '@/components/theme-provider'

import { Expertise } from '@/page/expertise'
import { Projects } from '@/page/project'
import { Experience } from './page/experience'
import { routeEnum } from './shared/route.enum'
import ContactPage from './page/contact'
import { AnimationSection } from './components/animation-section'
import ProjectDetail from './components/project-detail'
import ExperienceDetail from './components/experience-detail'
import { ActiveSectionProvider } from './context/active-section.context'

function App() {

  const sections = [
    { url: routeEnum.HOME, component: <HeroSection /> },
    { url: routeEnum.EXPERTISE, component: <Expertise /> },
    { url: routeEnum.EXPERIENCE, component: <Experience /> },
    { url: routeEnum.PROJECTS, component: <Projects /> },
    { url: routeEnum.CONTACT, component: <ContactPage /> },
  ]

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme"> 
        <ActiveSectionProvider>
          <Router basename='/'>
            <BlurBackground/>
        
            <Layout>
         
              <MenuBar/>
              <Routes>
                <Route path="/" element={<AnimationSection sections={sections} />}/>
                <Route path={`${routeEnum.PROJECTS}/:id`} element={<ProjectDetail/>}/>
                <Route path={`${routeEnum.EXPERIENCE}/:id`}  element={<ExperienceDetail/>}/>
             
              </Routes>
             
            </Layout>
          
          </Router>
          <ParticlesBackGround />
          <GlowBackground/>
        </ActiveSectionProvider>
      </ThemeProvider>
      
    </>
  )
}

export default App
