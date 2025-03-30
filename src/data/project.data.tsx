import { FaAws, FaReact } from "react-icons/fa";
import { SiNestjs, SiTypescript, SiJest, SiSwagger, SiShadcnui, SiJavascript, SiBootstrap, SiReactrouter, SiZod } from "react-icons/si";
import luqaImage from "@/assets/images/luqa-website.png";
import networkCalculatorImagen from "@/assets/images/network-calculator.png";
import { RiTailwindCssFill } from "react-icons/ri";
import unahWebImage from "@/assets/images/unah-website.png";
export const data=[
  {
    id:"luqa",
    title:"Luqa App (BackEnd)",
    subtitle:"Private Project (Guababit 2025)",
    description:"This is a description",
    imageUrl:luqaImage,
    lineColor:"blue",
    icons:[
      {
        icon:SiNestjs,
        name:"NestJS",
        color:"bg-red-600"
      },
      {
        icon:SiTypescript,
        name:"TypeScript",
        color:"bg-blue-600"
      },
      {
        icon:SiJest,
        name:"Jest",
        color:"bg-green-600"
               
      },
      {
        icon:SiSwagger,
        name:"Swagger",
        color:"bg-green-600"
               
      },
      {
        icon: FaAws,
        name:"AWS",
        color:"bg-yellow-600"
               
      },
    ]
  },
  {
    id:"network-calculator",
    title:"Calc VLSM and Subnetting",
    subtitle:"University Project",
    description:"This is a description",
    imageUrl:networkCalculatorImagen,
    lineColor:"orange",
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
    id:"unah-website",
    title:"UNAH Website",
    subtitle:"University Project",
    description:"This is a description",
    imageUrl:unahWebImage,
    LineColor:"blue",
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
        name:"Zod",
        color:"bg-gradient-to-r from-blue-400 to-gray-900"
             
      }
    ]
  }

]