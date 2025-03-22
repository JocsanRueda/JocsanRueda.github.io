import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function BlurBackground() {
  const location=useLocation()
  
  const [blur, setBlur] = useState(false);
  
  useEffect(()=>{
    
    setBlur(location.pathname!=='/')
        
  }, [location.pathname])
  
  return (
    <div
      className={cn("fixed inset-0 w-full h-full pointer-events-none transition-all duration-300 ease-in-out",blur && "backdrop-blur-[1px]")}
  
      style={{
        zIndex:-2,  
      }}
    />
  );
}
