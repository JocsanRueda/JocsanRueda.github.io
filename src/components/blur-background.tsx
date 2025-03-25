import { cn } from "@/lib/utils";
import { routeEnum } from "@/shared/route.enum";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function BlurBackground() {
  const location=useLocation()
  
  const [blur, setBlur] = useState(0);
  const routerBlurSm=[routeEnum.EXPERTISE,routeEnum.PROJECTS ]
  
  useEffect(()=>{
    
    if(location.pathname===routeEnum.HOME)
      setBlur(0)
    else if( routerBlurSm.includes(location.pathname as routeEnum))
      setBlur(2)
    else{
      setBlur(4)
    }
        
  }, [location.pathname])

  const blurClass = clsx({
    "backdrop-blur-0": blur === 0,
    "backdrop-blur-[2px]": blur === 2,
    "backdrop-blur-[6px]": blur === 4,
  });
  
  return (
    <div
      className={cn("fixed inset-0 w-full h-full pointer-events-none transition-all duration-300 ease-in-out ",blurClass)}
  
      style={{
        zIndex:-2,  
      }}
    />
  );
}
