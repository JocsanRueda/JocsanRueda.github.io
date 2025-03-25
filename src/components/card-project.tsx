import { CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { IconTooltip } from "./icon-tooltip";
import { iconItem } from "@/common/types/cards";
import { useNavigate } from "react-router-dom";

type CardProps = {
  id:string,
  title: string;
  subtitle: string;
  lineColor?: string;
  className?: string;
  imageUrl: string;
  icons: iconItem[];
};

export default function CardProjects({
  id,
  title,
  subtitle,
  lineColor = "blue",
  className="",
  imageUrl,
  icons,
}: CardProps) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${id}`);
  }
  
  return (
    <div className={cn(`bg-black  text-white  sm:max-w-md md:max-w-lg lg:max-w-xl flex flex-col gap-6 border rounded-md  border-gray-900`,className)} id={id} onClick={handleClick}>

      <CardContent className="-px-6 overflow-hidden rounded-t-md ">
        <img src={imageUrl} alt="image" className=" -rounded-t-md transition-transform duration-300 ease-in-out transform hover:scale-115 " />
      </CardContent>
      <CardFooter className="mb-3 flex flex-col items-start gap-3">
        <div className="flex flex-col ">
          <CardTitle className="flex flex-col"><p className="z-10 text-2xl"  >{title} </p> <span className={cn("p-1.5 rounded shadow -mt-3 z-0   ",
            lineColor
          )}></span></CardTitle>
          <CardDescription className="mt-2">{subtitle}</CardDescription>
        </div>
        <div className="flex flex-col gap-2 ">

          <div className="grid grid-flow-col  gap-2.5">
            {
              icons?.map((item)=>(
                <IconTooltip item={item} key={item.icon.name}/>
              ))
            }
          </div>
        </div>
      </CardFooter>
    </div>
  );
}