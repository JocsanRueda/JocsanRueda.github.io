import { iconItem } from "@/common/types/cards";
import { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { routeEnum } from "@/shared/route.enum";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons/lib";
import { useNavigate } from "react-router-dom";
import { IconTooltip } from "./icon-tooltip";
import { getDynamicColor } from "@/utils/styles.utils";
import { useTheme } from "./theme-provider";

type CardProps = {
  id: string;
  icon?: LucideIcon | IconType;
  title: string;
  subtitle: string;
  description: string;
  footer?: string;
  borderColor?: string;
  lineColor?: string;
  className?: string;
  stack?: iconItem[];
};

export default function CardExperience({
  id,
  icon,
  title,
  subtitle,
  description,
  footer,
  lineColor = "blue",
  className="",
  stack,
}: CardProps) {

  const Icon=(icon as LucideIcon | IconType) || null  ;
  const {theme}= useTheme();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${routeEnum.EXPERIENCE}/${id}`);
  }
  
  return (
    <div className={cn(`bg-sidebar dark:bg-black  dark:text-white  p-6   flex flex-col gap-6 justify-between border rounded-md  dark:border-gray-900 max-w-5xl  cursor-pointer hover:border-gray-700 transition-all`,className)} id={id} onClick={handleClick}>
      <CardHeader className="flex flex-row items-center gap-3">
        
        {Icon && <Icon size={36} />}
        <div className="flex flex-col">
          <CardTitle className="flex flex-col"><p className="z-10 text-2xl">{title}</p> <span className={cn("p-1.5 rounded shadow -mt-3 z-0  ",
            getDynamicColor(lineColor,theme)
          )}></span></CardTitle>
          <CardDescription className="mt-2">{subtitle}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 border-l-2 border-gray-500 pl-3">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 ">
        <p className="text-gray-600 dark:text-gray-300">{footer}</p>
        
        <div className="flex flex-wrap  gap-2.5 ">
          {
            stack?.map((item)=>(
              <IconTooltip item={item} key={item.icon.name}/>
            ))
          }
        </div>
       
      </CardFooter>
    </div>
  );
}