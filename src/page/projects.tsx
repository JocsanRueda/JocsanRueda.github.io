import CardProjects from "@/components/card-project"
import networkCalculator from "@/assets/images/network-calculator.png"
import unahWebSite from "@/assets/images/unah-website.png"
import { FaReact } from "react-icons/fa"
import { SiTypescript, SiShadcnui, SiJavascript, SiBootstrap, SiReactrouter, SiZod, SiJrgroup } from "react-icons/si"
import { RiTailwindCssFill } from "react-icons/ri";
export function Projects(){


  const data=[
    {
      title:"Calc VLSM and Subnetting",
      subtitle:"Networks",
      description:"This is a description",
      imageUrl:networkCalculator,
      url:"https://jocsanrueda.github.io/network-calculator/",
      icons:[
        {
          icon:FaReact,
          name:"React",
          color:"bg-blue-600"
        },
        {
          icon:SiTypescript,
          name:"TypeScript",
          color:"bg-blue-600"
               
        },{
          icon:SiShadcnui,
          name:"ShadCn",
          color:"bg-purple-600"
               
        },{
          icon:RiTailwindCssFill,
          name:"Tailwind",
          color:"bg-purple-600"
               
        }
      ]
    },
    {
      title:"UNAH Website",
      subtitle:"University",
      description:"This is a description",
      imageUrl:unahWebSite,
      url:"https://jocsanrueda.github.io/Proyecto-Ingenieria-FrontEnd/",
      icons:[
        {
          icon:FaReact,
          name:"React",
          color:"bg-blue-600"
        },
        {
          icon:SiJavascript,
          name:"Javascript",
          color:"bg-blue-600"
               
        },{
          icon:SiBootstrap,
          name:"Bootstrap",
          color:"bg-purple-600"
               
        },{
          icon:SiReactrouter,
          name:"React Router",
          color:"bg-purple-600"
               
        },{
          icon:SiZod,
          SiJrgroup,
          name:"Zod",
          color:"bg-gradient-to-r from-blue-400 to-gray-900"
               
        }
      ]
    }
  
  ]

  return (

    <div className="min-h-screen flex flex-col justify-center items-center gap-5 ">
      <div>
        <h1 className="text-4xl font-bold ">My Projects</h1>
      </div>
      <div className="flex  w-full justify-center  px-5  gap-1" >
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-2 ">

          {
            data.map((item)=>{

              return <CardProjects key={item.title}
           
                title={item.title}
                subtitle={item.subtitle} 
                className="border rounded-md opacity-85 grow-1" 
                lineColor="bg-blue-900"
                imageUrl={item.imageUrl}
                icons={item.icons}
                url={item.url}
              />
            })
          }

        </div>
      </div>
    </div>
  )
}