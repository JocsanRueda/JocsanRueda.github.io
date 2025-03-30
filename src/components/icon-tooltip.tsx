import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { useState } from "react";
import { iconItem } from "@/common/types/cards";

export function IconTooltip({item}: {item:iconItem}){
  const IconComponent = item.icon;
  const [hobered, setHovered] = useState(false)

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);
  const handleTouchStart = () => setHovered(true);
  const handleTouchEnd = () => setHovered(false);

  return<>
    <TooltipProvider >
      <Tooltip delayDuration={1} open={hobered} >
        <TooltipTrigger onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd} ><IconComponent className={cn("p-1 rounded transition-all  hover:text-white dartk:hover:text-white",
            hobered && item.color
          )} size={28} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false) } /></TooltipTrigger>
        <TooltipContent>
          <p className="bg-sidebar border rounded px-1 font-light text-black dark:text-white ">{item.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

  </>
}