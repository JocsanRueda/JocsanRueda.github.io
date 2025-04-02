import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import BlurBackground from "@/components/blur-background";
import GlowBackground from "@/components/glow-background";
import Layout from "@/components/layout";
import ParticlesBackGround from "@/components/particles-background";
import { ThemeProvider } from "@/components/theme-provider";
import { routeEnum } from "./common/enum/route.enum";
import { ActiveSectionProvider } from "./context/active-section.context";

// Lazy-loaded components
const HeroSection = lazy(() => import("@/components/hero-section"));
const AboutMe = lazy(() => import("@/pages/about-me"));
const Skills = lazy(() => import("@/pages/skills"));
const Projects = lazy(() => import("@/pages/project"));
const Experience = lazy(() => import("./pages/experience"));
const ContactPage = lazy(() => import("./pages/contact"));
const AnimationSection = lazy(() => import("./components/animation-section"));
const ProjectDetail = lazy(() => import("./components/project-detail"));
const ExperienceDetail = lazy(() => import("./components/experience-detail"));

function App() {
  const sections = [
    { url: routeEnum.HOME, component: <HeroSection /> },
    {
      url: routeEnum.ABOUT_ME, component: <AboutMe />,
    },
    { url: routeEnum.SKILLS, component: <Skills /> },
    { url: routeEnum.EXPERIENCE, component: <Experience /> },
    { url: routeEnum.PROJECTS, component: <Projects /> },
    { url: routeEnum.CONTACT, component: <ContactPage /> },
    
  ];

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ActiveSectionProvider>
          <Router basename="/">
            <BlurBackground />

            <Layout>
              
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route
                    path="/"
                    element={<AnimationSection sections={sections} />}
                  />
                  <Route
                    path={`${routeEnum.PROJECTS}/:id`}
                    element={<ProjectDetail />}
                  />
                  <Route
                    path={`${routeEnum.EXPERIENCE}/:id`}
                    element={<ExperienceDetail />}
                  />
                </Routes>
              </Suspense>
            </Layout>
          </Router>
          <ParticlesBackGround />
          <GlowBackground />
        </ActiveSectionProvider>
      </ThemeProvider>
    </>
  );
}

export default App;