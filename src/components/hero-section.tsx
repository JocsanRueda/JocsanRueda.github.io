import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "./theme-provider";

export default function HeroSection() {
  const {theme}=useTheme()
  return (
    <div className={cn("min-h-screen flex items-center justify-center p-1",
      {
        "text-white": theme === "dark",
      }
    )}>
      <div className="max-w-2xl ">
        <p className={cn("text-sm consolas-font",{
          "text-teal-300" : theme === "dark",
        })}>Hi, my name is</p>
        <h1 className="text-2xl lg:text-7xl font-bold mt-2">Jocsan Rueda</h1>
        <div className="text-balance">
          <p className={cn(
            "lg:text-2xl font-semibold mt-2  ", {
              "text-gray-400": theme === "dark",
            }
          )}>software Engineer, Full-stack Developer</p>
        </div>
        
       
        <Button className={cn("mt-6 border  text-teal-30 bg-teal-300text-black",
          (theme==="dark"?"border-teal-300":"border-gray-700")
        )}>
          Get In Touch
        </Button>
      </div>
    </div>
  );
}
