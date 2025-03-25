import { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { routeEnum } from "@/shared/route.enum";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons/lib";
import { useNavigate } from "react-router-dom";

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
}: CardProps) {

  const Icon=(icon as LucideIcon | IconType) || null  ;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${routeEnum.EXPERIENCE}/${id}`);
  }
  
  return (
    <div className={cn(`bg-black  text-white  p-6   flex flex-col gap-5 justify-between border rounded-md  border-gray-900 max-w-5xl  cursor-pointer hover:border-gray-700 transition-all`,className)} id={id} onClick={handleClick}>
      <CardHeader className="flex flex-row items-center gap-3">
        
        {Icon && <Icon size={36} />}
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
        
      </CardFooter>
    </div>
  );
}