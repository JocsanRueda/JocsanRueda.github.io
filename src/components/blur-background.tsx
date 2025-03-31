import { useActiveSection } from "@/context/active-section.context";
import { cn } from "@/lib/utils";
import { routeEnum } from "@/shared/enum/route.enum";
import clsx from "clsx";
import { useState, useEffect } from "react";

export default function BlurBackground() {
  const {activeSection}=useActiveSection()
  
  const [blur, setBlur] = useState(0);
  
  useEffect(()=>{
    
    if(activeSection===routeEnum.HOME)
      setBlur(0)
    else 
      setBlur(2)
        
  }, [activeSection])

  const blurClass = clsx({
    "backdrop-blur-0": blur === 0,
    "backdrop-blur-[2px]": blur === 1,
    "backdrop-blur-[6px]": blur === 2,
  });
  
  return (
    <div
      className={cn("fixed inset-0 w-full h-full pointer-events-none transition-all duration-700 ease-in-out ",blurClass)}
  
      style={{
        zIndex:-2,  
      }}
    />
  );
}
