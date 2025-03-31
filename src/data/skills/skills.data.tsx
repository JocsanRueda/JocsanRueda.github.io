import { Swords, Braces } from "lucide-react";
import { FaWindows, FaLinux, FaGit, FaGithub, FaJava, FaServer, FaAws, FaReact } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { SiCplusplus, SiPython, SiOctave, SiNestjs, SiJest, SiSwagger, SiJavascript, SiTypescript, SiCss3, SiHtml5, SiShadcnui, SiBootstrap } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { skillType } from "./types/skill.type.data";

export const data : skillType[]=[
  {
    id:"teckStack",
    icon:Swords,
    title: "Teck Stack",
    subtitle: "Development",
    description:"VsCode, Git, GitHub, linux and more",

    lineColor:"orange",
    stack : [
      {
        icon:FaWindows,
        name:"Windows",
        color:"bg-blue-600"
      },
      {
        icon:FaLinux,
        name:"Linux",
        color:"bg-gradient-to-r from-blue-600 to-yellow-600"
      },{
        icon: FaGit,
        name:"Git",
        color:"bg-orange-600"
      },
      {
        icon:FaGithub,
        name:"GitHub",
        color:"bg-gradient-to-t from-purple-600 to-blue-600"
      },
      {
        icon:VscVscode ,
        name:"Vscode",
        color:"bg-blue-600"
      }
      
    ]

  },
 
  {
    id:"otherLanguajes",
    icon:Braces,
    title: "Other Languajes",
    subtitle: "Development",
    description:"Proficient in C++, Python, Java, and Octave",

    lineColor:"green",
    stack : [
      {
        icon:SiCplusplus,
        name:"C++",
        color:"bg-blue-600"
      },
      {
        icon:SiPython,
        name:"Python",
        color:"bg-gradient-to-r from-blue-600 to-yellow-600"
       
      },
      {
        icon:FaJava,
        name:"Java",
        color:"bg-gradient-to-t from-red-600 to-blue-600 "
       
      },
      {
        icon: SiOctave,
        name:"Octave",
        color:"bg-gradient-to-r from-blue-600 to-orange-600"
       
      },
      
    ]

  },
  {
    id:"Backend",
    icon:FaServer,
    title: "Backend",
    subtitle: "Development",
    description:"Proficient in building and optimizing backend services using NestJS, TypeScript, and AWS. Experience with authentication, API Gateway, and database management.",
    lineColor:"blue",
    stack : [
      {
        icon:SiNestjs,
        name:"NestJS",
        color:"bg-red-600"
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
    id:"Frontend",
    icon:MdComputer,
    title: "Frontend ",
    subtitle: "Development",
    description:"Passionate about UI/UX. Experienced in developing modern, responsive interfaces using React, NextJS, TailwindCSS, and Radix UI.",
    footer:"Focused on creating intuitive and accessible designs.",

    lineColor:"red",
    stack : [
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
      
    ]
  } 
]