import { Swords, Braces, Database } from "lucide-react";
import { FaWindows, FaLinux, FaGit, FaGithub, FaJava, FaReact, FaAws, FaServer, FaClock, FaComments, FaHandshake, FaLightbulb, FaPeopleArrows, FaProjectDiagram } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { SiCplusplus, SiPython, SiOctave, SiJavascript, SiTypescript, SiCss3, SiHtml5, SiShadcnui, SiBootstrap, SiJest, SiNestjs, SiSwagger, SiMongodb, SiAmazondynamodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { skillType } from "./types/skill.type.data";
import { DiMsqlServer } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
export const data: skillType[] = [
  {
    id: "teckStack",
    icon: Swords,
    title: "Tecnologías",
    description: "Experiencia en entornos de desarrollo, control de versiones y sistemas operativos esenciales para el flujo de trabajo eficiente.",

    lineColor: "orange",
    stack: [
      {
        icon: FaWindows,
        name: "Windows",
        color: "bg-blue-600"
      },
      {
        icon: FaLinux,
        name: "Linux",
        color: "bg-gradient-to-r from-blue-600 to-yellow-600"
      },
      {
        icon: FaGit,
        name: "Git",
        color: "bg-orange-600"
      },
      {
        icon: FaGithub,
        name: "GitHub",
        color: "bg-gradient-to-t from-purple-600 to-blue-600"
      },
      {
        icon: VscVscode,
        name: "Vscode",
        color: "bg-blue-600"
      }
    ]
  },
  {
    id: "Frontend",
    icon: MdComputer,
    title: "Frontend",

    description: "Apasionado por la experiencia de usuario y el diseño moderno. Desarrollo de interfaces interactivas y accesibles con tecnologías actuales.",

    lineColor: "red",
    stack: [
      {
        icon: FaReact,
        name: "React",
        color: "bg-blue-600"
      },
      {
        icon: SiJavascript,
        name: "JavaScript",
        color: "bg-yellow-600"
      },
      {
        icon: SiTypescript,
        name: "TypeScript",
        color: "bg-blue-600"
      },
      {
        icon: SiCss3,
        name: "Css3",
        color: "bg-orange-600"
      },
      {
        icon: SiHtml5,
        name: "Html5",
        color: "bg-blue-600"
      },
      {
        icon: SiShadcnui,
        name: "ShadCn",
        color: "bg-purple-600"
      },
      {
        icon: SiBootstrap,
        name: "Bootstrap",
        color: "bg-purple-600"
      }
    ]
  },
  {
    id: "Backend",
    icon: FaServer,
    title: "Backend",

    description: "Especializado en la creación de APIs eficientes y seguras, integrando autenticación, gestión de bases de datos.",
    lineColor: "blue",
    stack: [
      {
        icon: SiNestjs,
        name: "NestJS",
        color: "bg-red-600"
      },
      {
        icon: SiJest,
        name: "Jest",
        color: "bg-green-600"
      },
      {
        icon: SiSwagger,
        name: "Swagger",
        color: "bg-green-600"
      },
      {
        icon: FaAws,
        name: "AWS",
        color: "bg-yellow-600"
      }
    ]
  },
  {
    id: "otherLanguajes",
    icon: Braces,
    title: "Otros lenguajes",

    description: "Experiencia en programación estructurada y orientada a objetos con lenguajes utilizados en diversas aplicaciones científicas.",

    lineColor: "green",
    stack: [
      {
        icon: SiCplusplus,
        name: "C++",
        color: "bg-blue-600"
      },
      {
        icon: SiPython,
        name: "Python",
        color: "bg-gradient-to-r from-blue-600 to-yellow-600"
      },
      {
        icon: FaJava,
        name: "Java",
        color: "bg-gradient-to-t from-red-600 to-blue-600"
      },
      {
        icon: SiOctave,
        name: "Octave",
        color: "bg-gradient-to-r from-blue-600 to-orange-600"
      }
    ]
  },
  {
    id: "dataBase",
    icon: Database,
    title: "Base de datos",

    description: "Experiencia en bases de datos SQL y NoSQL, incluyendo diseño, optimización y gestión de datos para aplicaciones modernas.",
    lineColor: "purple",
    stack: [
      {
        icon: DiMsqlServer,
        name: "Sql Server",
        color: "bg-red-600",
        classNameIcon: "w-7 h-7 -p-1",
      },
      {
        icon: GrMysql,
        name: "MySQL",
        color: "bg-gradient-to-r from-blue-600 to-yellow-600"
      },
      {
        icon: SiMongodb,
        name: "MongoDB",
        color: "bg-green-600"
      },
      {
        icon: SiAmazondynamodb,
        name: "DynamoDB",
        color: "bg-blue-800"
      }
    ]
  },
  {
    id: "softSkills",
    icon: FaPeopleArrows, 
    title: "Habilidades Blandas",
    description: "Habilidades interpersonales y metodologías que facilitan la colaboración y eficiencia en proyectos.",
    lineColor: "pink", 
    stack: [
      {
        icon: FaHandshake, 
        name: "Trabajo en equipo",
        color: "bg-blue-400"
      },
      {
        icon: FaProjectDiagram, 
        name: "Metodologías Ágiles",
        color: "bg-green-500"
      },
      {
        icon: FaComments, 
        name: "Comunicación efectiva",
        color: "bg-purple-500"
      },
      {
        icon: FaLightbulb, 
        name: "Resolución de problemas",
        color: "bg-yellow-500"
      },
      {
        icon: FaClock,
        name: "Gestión del tiempo",
        color: "bg-red-400"
      }
    ]
  }
];
