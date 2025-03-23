import { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons/lib";
import { IconTooltip } from "./icon-tooltip";
import { iconItem } from "@/common/types/cards";

type CardProps = {
  icon: LucideIcon | IconType;
  title: string;
  subtitle: string;
  description: string;
  footer?: string;
  borderColor?: string;
  lineColor?: string;
  className?: string;
  items?: iconItem[] ;
};

export default function CardSkill({
  icon,
  title,
  subtitle,
  description,
  footer,
  lineColor = "blue",
  className="",
  items
}: CardProps) {

  const Icon=icon;
  
  return (
    <div className={cn(`bg-black  text-white  p-6  max-w-sm flex flex-col gap-5 justify-between border rounded-md  border-gray-900`,className)}>
      <CardHeader className="flex flex-row items-center gap-3">
        
        <Icon size={36} />
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