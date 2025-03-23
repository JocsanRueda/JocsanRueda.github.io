import { cn } from "@/lib/utils";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function BlurBackground() {
  const location=useLocation()
  
  const [blur, setBlur] = useState(0);
  
  useEffect(()=>{
    
    if(location.pathname==="/")
      setBlur(0)
    else if( ["/expertise","/projects"].includes (location.pathname))
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
