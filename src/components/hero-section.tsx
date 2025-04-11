import { Button } from "@/components/ui/button";
import { scroller } from "react-scroll";
import { routeEnum } from "@/common/enum/route.enum";
import { useActiveSection } from "@/context/active-section.context";
import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import { useState } from "react";
import { IconTooltip } from "./icon-tooltip";
import { FaLinkedin } from "react-icons/fa";
import { linksEnum } from "@/data/links/data";

export default function HeroSection() {
  const { setActiveSection } = useActiveSection();
  const [stats] = useState({
    yearsExperience: 3,
    projectsCompleted: 3,
    commits: 700,
  });

  const handleClick = (section: string) => {
    const newActiveSection = {
      activeSection: routeEnum.ABOUT_ME,
      previousSection: routeEnum.HOME,
    };
    setActiveSection(newActiveSection);
    
    scroller.scrollTo(section, {
      duration: 500,
      smooth: true,
      offset: -41,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 dark:text-white">
      <div className="max-w-2xl">
        <p className="text-sm consolas-font dark:text-teal-300">
          ¡Hola!
          <motion.span
            className="inline-block"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.9,
            }}
          >
            _
          </motion.span>
        </p>

        <h1 className="text-4xl lg:text-7xl font-bold mt-2">Jocsan Rueda</h1>
        
        <div className="text-balance">
          <p className="lg:text-2xl mt-2 dark:text-gray-400">
            Ingeniero de software, <p className="inline-block dark:text-teal-300">desarrollador full-stack</p>
           
          </p>
        </div>
        
        {/* Estadísticas */}
        <div className="mt-6 flex flex-wrap gap-6">
          <div className="text-center">
            <motion.p 
              className="text-3xl font-bold dark:text-teal-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              {stats.yearsExperience}+
            </motion.p>
            <p className="text-sm dark:text-gray-400">Años de experiencia</p>
          </div>
          
          <div className="text-center">
            <motion.p 
              className="text-3xl font-bold dark:text-teal-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
            >
              {stats.projectsCompleted}+
            </motion.p>
            <p className="text-sm dark:text-gray-400">Proyectos</p>
          </div>
          
          <div className="text-center">
            <motion.p 
              className="text-3xl font-bold dark:text-teal-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.4 }}
            >
              {stats.commits}+
            </motion.p>
            <p className="text-sm dark:text-gray-400">Commits</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <Button 
            className="border  text-teal-30 bg-teal-300text-black dark:hover:text-black dark:hover:bg-teal-500 hover:text-white dark:border-teal-300 border-gray-700" 
            onClick={() => handleClick(routeEnum.ABOUT_ME)} 
            name="skills-button"
          >
            Ver más
          </Button>
          
          <div className="flex gap-1 items-center">
          
            <a href={linksEnum.LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-teal-500 transition-colors ">
              <IconTooltip item={{ icon:FaLinkedin, name:"Linkedin", color:"teal" }} classNameIcon="mt-1" hoveredActive={false}/>
            </a>
           
            <a href={linksEnum.CURIICULUM} className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-teal-500 transition-colors ">
              
              <IconTooltip item={{ icon:FileText, name  :"Curriculum", color:"teal" }} classNameIcon="mt-1" hoveredActive={false}/>
            </a>

            <a className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-teal-500 transition-colors " onClick={() => handleClick(routeEnum.CONTACT)}>
              <IconTooltip item={{ icon:Mail, name  :"Contactame", color:"teal" }} classNameIcon="mt-1" hoveredActive={false}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}