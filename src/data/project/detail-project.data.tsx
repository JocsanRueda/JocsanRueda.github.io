import { FaReact } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiCss3, SiHtml5, SiShadcnui, SiBootstrap, SiReactrouter, SiZod } from "react-icons/si";
import luqaImage from "@/assets/images/luqa-website.webp";
import netWorkCalculatorImage from "@/assets/images/network-calculator.webp"
import unahWebImage from "@/assets/images/unah-website.webp"
import { RiTailwindCssFill } from "react-icons/ri";
import { ProjectDetailType } from "./types/project-detail.type";

export const data: ProjectDetailType[] = [
  {
    id: "luqa",
    title: "Software de gestión de residenciales",
    description: "Software de gestión de residenciales",
    longDescription: "Una plataforma diseñada para la gestión integral de residenciales, facilitando el control de entradas y salidas de inquilinos, la organización de eventos y la administración de áreas comunes. La solución permite un registro detallado de visitas, optimiza la logística de entregas a domicilio y ofrece una interfaz intuitiva para gestionar eventos y reservas de espacios, garantizando seguridad, eficiencia y comodidad para todos los residentes.",
    image: luqaImage,
    commits: 18,
    linesWritten: "+693",
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
      "Gestión de entradas y salidas de inquilinos y visitantes",
      "Optimización de la reserva de áreas comunes y eventos",
      "Panel de administración intuitivo y completo",
      "Diseño responsivo adaptado a todos los dispositivos"
    ],
    liveUrl: "https://luqa.app/",
    date: "Marzo 2025",
    role: "Desarrollador Backend",
    teamSize : 5,
  },{
    id: "network-calculator",
    title: "Calculadora de redes VLSM y Subnetting",
    description: "Proyecto universitario",
    longDescription: "Una herramienta para dividir redes de manera eficiente utilizando el enmascarado de subredes de longitud variable (VLSM). Este proyecto permite realizar el subneado de redes, mostrando información detallada sobre las subredes generadas, optimizando la asignación de direcciones IP y adaptándose a las necesidades de tamaños variados para cada subred. VLSM ayuda a reducir el desperdicio de direcciones IP, mejora el rendimiento de la red al disminuir los dominios de difusión y permite una fácil expansión sin necesidad de rediseñar toda la estructura de direcciones IP.",
    image: netWorkCalculatorImage,
    commits: 10,
    linesWritten: "+2,000",
  
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
      "Web responsiva que se adapta a todos los dispositivos (móviles, tabletas, escritorios)",
      "Cálculo eficiente para dividir redes usando VLSM y optimizar direcciones IP",
      "Optimización de IP para minimizar el desperdicio de direcciones y ajustar el tamaño de las subredes",
      "Visualización clara que muestra información detallada sobre cada subred creada",
    ],
    githubUrl: "https://github.com/JocsanRueda/network-calculator",
    liveUrl: "https://jocsanrueda.github.io/network-calculator/",
    date: "Marzo 2025",
    role: "Desarrollador full stack",
    teamSize: 1,
  },
  {
    id: "unah-website",
    title: "UNAH Website",
    description: "Proyecto universitario ",
    longDescription: "Plataforma integral para la gestión académica en la UNAH, diseñada para registrar estudiantes, visualizar clases, gestionar cursos y facilitar la comunicación entre compañeros mediante un sistema de chat. Incluye herramientas de administración para optimizar la organización académica y mejorar la experiencia estudiantil.",
    image: unahWebImage,
    commits: 225,
    linesWritten: "+5,000",
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
      "Visualización y organización de clases en tiempo real",
      "Sistema de chat para comunicación entre compañeros",
      "Panel de administración completo",
      "Plataforma accesible y fácil de usar"
    ],
    githubUrl: "https://github.com/JocsanRueda/Proyecto-Ingenieria-FrontEnd",
    liveUrl: "https://jocsanrueda.github.io/Proyecto-Ingenieria-FrontEnd/",
    date: "Diciembre 2023",
    role: "Desarrollador Full Stack",
    teamSize: 5,
  },

];
