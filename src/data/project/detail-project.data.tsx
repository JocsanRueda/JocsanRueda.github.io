import { FaReact } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiCss3, SiHtml5, SiShadcnui, SiBootstrap, SiReactrouter, SiZod } from "react-icons/si";
import luqaImage from "@/assets/images/luqa-website.png";
import netWorkCalculatorImage from "@/assets/images/network-calculator.png"
import unahWebImage from "@/assets/images/unah-website.png"
import { RiTailwindCssFill } from "react-icons/ri";
import { ProjectDetailType } from "./types/project-detail.type";

export const data: ProjectDetailType[] = [
  {
    id: "luqa",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with payment processing",
    longDescription: "Este proyecto es una plataforma de comercio electrónico completa desarrollada con React, TypeScript y Node.js. Incluye procesamiento de pagos, gestión de inventario, panel de administración y análisis de datos en tiempo real.",
    image: luqaImage,
    commits: 116,
    linesWritten: 200,
    stack :[
      {
        icon:FaReact,
        name:"React",
        color:"bg-blue-600"
      },
      {
        icon:SiJavascript,
        name:"JavaScript",
        color:"bg-yellow-600"
      },
      {
        icon:SiTypescript,
        name:"TypeScript",
        color:"bg-blue-600"
         
      },
      {
        icon:SiCss3,
        name:"Css3",
        color:"bg-orange-600"
         
      },
      {
        icon:SiHtml5,
        name:"Html5",
        color:"bg-blue-600"
         
      },{
        icon:SiShadcnui,
        name:"ShadCn",
        color:"bg-purple-600"
         
      },{
        icon: SiBootstrap,
        name:"Bootstrap",
        color:"bg-purple-600"
      }
          
    ],
    features: [
      "Autenticación de usuarios y gestión de perfiles",
      "Pasarela de pago segura",
      "Sistema de búsqueda y filtrado avanzado",
      "Panel de administración completo",
      "Responsive design para todos los dispositivos"
    ],
    liveUrl: "https://luqa.app/",
    date: "Marzo 2025",
    role: "Desarrollador Full Stack",
    team: ["Ana González", "Carlos Martínez"]
  },{
    id: "network-calculator",
    title: "Calc VLSM and Subnetting",
    description: "A full-stack e-commerce solution with payment processing",
    longDescription: "Este proyecto es una plataforma de comercio electrónico completa desarrollada con React, TypeScript y Node.js. Incluye procesamiento de pagos, gestión de inventario, panel de administración y análisis de datos en tiempo real.",
    image: netWorkCalculatorImage,
    commits: 116,
    linesWritten: 200,
  
    stack :[
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
          
    ],
    features: [
      "Autenticación de usuarios y gestión de perfiles",
      "Pasarela de pago segura",
      "Sistema de búsqueda y filtrado avanzado",
      "Panel de administración completo",
      "Responsive design para todos los dispositivos"
    ],
    githubUrl: "https://github.com/JocsanRueda/network-calculator",
    liveUrl: "https://jocsanrueda.github.io/network-calculator/",
    date: "Marzo 2025",
    role: "Desarrollador Full Stack",
    team: ["Ana González", "Carlos Martínez"]
  },
  {
    id: "unah-website",
    title: "Calc VLSM and Subnetting",
    description: "A full-stack e-commerce solution with payment processing",
    longDescription: "Este proyecto es una plataforma de comercio electrónico completa desarrollada con React, TypeScript y Node.js. Incluye procesamiento de pagos, gestión de inventario, panel de administración y análisis de datos en tiempo real.",
    image: unahWebImage,
    commits: 116,
    linesWritten: 200,
    stack :[
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
          
    ],
    features: [
      "Autenticación de usuarios y gestión de perfiles",
      "Pasarela de pago segura",
      "Sistema de búsqueda y filtrado avanzado",
      "Panel de administración completo",
      "Responsive design para todos los dispositivos"
    ],
    githubUrl: "https://github.com/JocsanRueda/Proyecto-Ingenieria-FrontEnd",
    liveUrl: "https://jocsanrueda.github.io/Proyecto-Ingenieria-FrontEnd/",
    date: "Marzo 2025",
    role: "Desarrollador Full Stack",
    team: ["Ana González", "Carlos Martínez"]
  },

];
