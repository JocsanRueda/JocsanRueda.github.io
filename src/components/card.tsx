import { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import * as react from 'react';
import { IconType } from "react-icons/lib";
import { IconTooltip } from "./icon-tooltip";


export type iconItem={
  icon:LucideIcon|IconType;
  name:string;
  color:string;
}

type CardProps = {
  icon: LucideIcon | IconType;
  title: string;
  subtitle: string;
  description: string;
  footer?: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  lineColor?: string;
  className?: string;
  items?: iconItem[] ;
};




export default function CustomCard({
  icon,
  title,
  subtitle,
  description,
  footer,
  bgColor = "bg-black",
  textColor = "text-white",
  lineColor = "blue",
  className="",
  items
}: CardProps) {
  
  return (
    <div className={cn(`${bgColor} ${textColor} p-6  max-w-sm flex flex-col gap-5 justify-between hover:border-current hover:border-dashed transition-all`,className)}>
      <CardHeader className="flex flex-row items-center gap-3">
        <span>{react.createElement(icon, { size: 36, className: textColor })}</span>
        <div className="flex flex-col">
          <CardTitle className="flex flex-col"><p className="z-10 text-2xl">{title}</p> <span className={cn("p-1.5 rounded shadow -mt-3 z-0  ",
            lineColor
          )}></span></CardTitle>
          <CardDescription>{subtitle}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400 border-l-2 border-gray-500 pl-3">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 ">
        <p className="text-gray-300">{footer}</p>
        <div className="grid grid-flow-col  gap-2.5">
          {
            items?.map((item)=>(
              <IconTooltip item={item} key={item.icon.name}/>
            ))
          }
        </div>
      </CardFooter>
    </div>
  );
}