import { CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { IconTooltip } from "./icon-tooltip";
import { useNavigate } from "react-router-dom";
import { getDynamicColor } from "@/utils/styles.utils";
import { useTheme } from "./theme-provider";
import { projectType } from "@/data/project/types/project.type";

type CardProps = projectType & {
 
  className?: string;

};

export default function CardProjects({
  id,
  title,
  subtitle,
  lineColor = "blue",
  className="",
  imageUrl,
  stack,
}: CardProps) {

  const {theme}=useTheme();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${id}`);
  }
  
  return (
    <div className={cn("bg-sidebar dark:bg-black  dark:text-white  sm:max-w-md md:max-w-lg lg:max-w-xl flex flex-col gap-6 border rounded-md  dark:border-gray-900",className)} id={id} onClick={handleClick}>

      <CardContent className="-px-6 overflow-hidden rounded-t-md ">
        <img src={imageUrl} alt="image" className=" -rounded-t-md transition-transform duration-300 ease-in-out transform hover:scale-115 " />
      </CardContent>
      <CardFooter className="mb-3 flex flex-col items-start gap-3">
        <div className="flex flex-col ">
          <CardTitle className="flex flex-col"><p className="z-10 text-2xl"  >{title} </p> <span className={cn("p-1.5 rounded shadow -mt-3 z-0   ",
            getDynamicColor(lineColor,theme)
          )}></span></CardTitle>
          <CardDescription className="mt-2">{subtitle}</CardDescription>
        </div>

        <div className="flex flex-wrap  gap-2.5">
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