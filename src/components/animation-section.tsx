import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { JSX } from "react";
import { useActiveSection } from "@/context/active-section.context";

interface AnimationSectionProps {
  sections: {
    url: string;
    component: JSX.Element;
  }[];
}

export function AnimationSection({ sections }: AnimationSectionProps) {
  const {setActiveSection} = useActiveSection()
  const handleTouchMove = (sectionUrl: string) => {
    setActiveSection(sectionUrl); // Sincroniza la sección activa
  };
  return (
    <div> 
      {sections.map((section) => (
        <Element name={section.url} key={section.url} 
          onTouchStart={() => handleTouchMove(section.url)}
          onTouchMove={() => handleTouchMove(section.url)}
          onTouchEnd={() => handleTouchMove(section.url)}
          style={{
            contentVisibility:"auto",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            
          >
            {section.component}
          </motion.div>
        </Element>
      ))}
    </div>
  );
}
