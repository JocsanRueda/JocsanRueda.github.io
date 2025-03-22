import { CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { IconTooltip } from "./icon-tooltip";
import { iconItem } from "@/common/types/cards";

type CardProps = {
  title: string;
  subtitle: string;
  bgColor?: string;
  textColor?: string;
  lineColor?: string;
  className?: string;
  imageUrl: string;
  icons: iconItem[];
  url:string;
};

export default function CardProjects({
  title,
  subtitle,
  bgColor = "bg-black",
  textColor = "text-white",
  lineColor = "blue",
  className="",
  imageUrl,
  icons,
  url,
}: CardProps) {
  
  return (
    <div className={cn(`${bgColor} ${textColor}  sm:max-w-md md:max-w-lg lg:max-w-xl flex flex-col gap-5 `,className)}>

      <CardContent className="-px-6 overflow-hidden">
        <img src={imageUrl} alt="image" className="rounded-t-lg transition-transform duration-300 ease-in-out transform hover:scale-115" />
      </CardContent>
      <CardFooter className="mb-3 flex flex-col items-start">
        <div className="flex flex-col ">
          <CardTitle className="flex flex-col"><a className="z-10 text-2xl" href={url} >{title} </a> <span className={cn("p-1.5 -mt-2.5 z-0  ",
            lineColor
          )}></span></CardTitle>
          <CardDescription>{subtitle}</CardDescription>
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