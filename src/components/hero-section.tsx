import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "./theme-provider";
import { scroller } from "react-scroll";
import { routeEnum } from "@/shared/enum/route.enum";
import { useActiveSection } from "@/context/active-section.context";

export default function HeroSection() {
  const {theme}=useTheme()
  const {setActiveSection} = useActiveSection()

  const handleClick = () => {
    setActiveSection(routeEnum.SKILLS); 
    scroller.scrollTo(routeEnum.SKILLS, {
      duration: 500,
      smooth: true,
      offset: -41, 
    });
    
  }
  return (
    <div className={cn("min-h-screen flex items-center justify-center p-1",
      {
        "text-white": theme === "dark",
      }
    )}>
      <div className="max-w-2xl ">
        <p className={cn("text-md consolas-font",{
          "text-teal-300" : theme === "dark",
        })}>¡Hola!</p>
        <h1 className="text-2xl lg:text-7xl font-bold mt-2">Jocsan Rueda</h1>
        <div className="text-balance">
          <p className={cn(
            "lg:text-2xl font-semibold mt-2  ", {
              "text-gray-400": theme === "dark",
            }
          )}>Ingeniero en sistemas , desarrollador full-stack </p>
        </div>
       
        <Button className={cn("mt-6 border  text-teal-30 bg-teal-300text-black dark:hover:text-black hover:text-white",
          (theme==="dark"?"border-teal-300":"border-gray-700")
        )} onClick={handleClick}>
          Ver mas
        </Button>
      </div>
    </div>
  );
}
