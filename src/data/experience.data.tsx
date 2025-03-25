import { 
  Layout, 
  User, 
  Server,
  PenTool
} from "lucide-react";
import { FaAws } from "react-icons/fa";
import { SiNestjs, SiTypescript, SiJest, SiSwagger,SiJira, SiNodedotjs } from "react-icons/si";
import { BsMicrosoftTeams } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";

export const data = [
  {
    icon:Layout,
    lineColor:"bg-blue-900",
    id: "guababit",
    company: "Guababit",
    position: "Desarrollador Junior Backend ",
    period: "Octubre/2024 - Marzo/2025",
    contractType: "Contrato de prácticas",
    location: "Remoto",// Opcional: ruta a la imagen de la empresa
    description: "Participé en el desarrollo backend de aplicaciones web utilizando NestJS, AWS Lambda, DynamoDB y API Gateway, implementando arquitecturas serverless para mejorar el rendimiento y la escalabilidad. Diseñé y mantuve APIs seguras y eficientes, integrando servicios en la nube como S3 y Cognito para almacenamiento y autenticación, optimizando la gestión de datos y usuarios. Además, trabajé en la implementación de pruebas unitarias con Jest, mejorando la calidad del código y reduciendo errores en producción. Colaboré dentro de un entorno ágil con Scrum, participando en revisiones de código, reuniones diarias y sprints, asegurando entregas iterativas y eficientes",
    responsibilities: [
      "Desarrollo de Construcción y Mantenimiento de Servicios Backend: Creación de controladores, servicios y repositorios (repo.ts) en NestJS, siguiendo principios de arquitectura limpia y buenas prácticas de desarrollo",
      "Definición de Esquemas: Diseño y estructuración de modelos de datos para DynamoDB, asegurando una gestión eficiente de la información.",
      "Pruebas Unitarias: Implementación de pruebas con Jest para garantizar la calidad del código y prevenir errores en producción",
      "Optimización de Implementaciones: Investigación y aplicación de soluciones eficientes para mejorar el rendimiento, escalabilidad y seguridad de las APIs",
      "Integración con AWS: Uso de Lambda, API Gateway, S3 y Cognito para desarrollar soluciones serverless robustas y escalables.",
      "Trabajo en Metodología Ágil: Participación en revisiones de código, reuniones diarias y sprints dentro de un entorno Scrum",
      "Revisión de Código: Evaluación y mejora de código en pull requests, asegurando el cumplimiento de estándares y buenas prácticas."
    ],
    achievements: [
      "Implementación exitosa de un servicio clave en un proyecto, asegurando su correcto funcionamiento y escalabilidad en un entorno serverless con NestJS y AWS Lambda",
      "Investigación e implementación efectiva de un sistema de autenticación, integrando AWS Cognito para mejorar la seguridad y gestión de usuarios",
      "Desarrollo e integración exitosa de ImportJobs para AWS Cognito, facilitando la importación y administración eficiente de usuarios en la plataforma",
      "Desarrollo e implementación de una solución de paginación eficiente para consultas en DynamoDB."
    ],
    skills: [
      { name: "Frontend", icon: Layout, color: "bg-blue-900 text-blue-100", description: "Desarrollo de interfaces de usuario modernas y responsivas" },
      { name: "Backend", icon: Server, color: "bg-green-900 text-green-100", description: "Creación de APIs y servicios robustos" },
      { name: "Diseño UI/UX", icon: PenTool, color: "bg-purple-900 text-purple-100", description: "Creación de experiencias de usuario intuitivas" }
    ],
    technologies: [
      "React", "Node.js", "TypeScript", "MongoDB", "Express", "Redux", "Next.js", "GraphQL", "Docker", "AWS"
    ],
    linkedinUrl: "https://www.linkedin.com/company/guababit/",
    companyUrl: "https://guababit.com/",
    contactLinkedin: "https://linkedin.com/in/tu-perfil",
    stack:[
      {
        icon:SiNestjs,
        name:"NestJS",
        color:"bg-red-600"
      },{
        icon: SiNodedotjs,
        name:"node",
        color:"bg-green-600"
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
                   
      },{
        icon: BsMicrosoftTeams,
        name:"Teams",
        color:"bg-purple-600"
      },{
        icon: SiJira,
        name:"Jira",
        color:"bg-blue-600"
      },{
        icon: VscVscode,
        name:"vscode",
        color:"bg-blue-600"
      }
    ]
  },
  {
    icon:Server,
    lineColor:"bg-yellow-900",
    id: "empresa2",
    company: "Innovación Digital",
    position: "Desarrollador Frontend",
    period: "Marzo 2018 - Diciembre 2020",
    contractType: "Tiempo Completo",
    location: "Ciudad, País",
    image: "/images/empresa2.jpg",
    description: "Formé parte del equipo de desarrollo frontend, enfocándome en la creación de interfaces de usuario modernas y responsivas utilizando las últimas tecnologías web.",
    responsibilities: [
      "Desarrollar componentes frontend utilizando React y TypeScript",
      "Implementar diseños responsivos y accesibles",
      "Optimizar el rendimiento de aplicaciones web",
      "Colaborar con equipos de diseño y backend",
      "Participar en la planificación y estimación de proyectos"
    ],
    achievements: [
      "Contribuí al rediseño completo de la plataforma principal de la empresa",
      "Implementé una biblioteca de componentes reutilizables que aceleró el desarrollo en un 30%",
      "Mentorié a tres desarrolladores junior que ahora son miembros clave del equipo"
    ],
    skills: [
      { name: "Frontend", icon: Layout, color: "bg-blue-900 text-blue-100", description: "Desarrollo de interfaces de usuario modernas y responsivas" },
      { name: "UX/UI", icon: User, color: "bg-yellow-900 text-yellow-100", description: "Diseño centrado en el usuario" }
    ],
    technologies: [
      "React", "TypeScript", "CSS3", "SASS", "Tailwind CSS", "Redux", "Jest", "Webpack"
    ],
    linkedinUrl: "https://linkedin.com/company/empresa2",
    companyUrl: "https://www.empresa2.com",
    contactEmail: "contacto@empresa2.com",
    contactLinkedin: "https://linkedin.com/in/tu-perfil",
    stack:[
      {
        icon:SiNestjs,
        name:"NestJS",
        color:"bg-red-600"
      },{
        icon: SiNodedotjs,
        name:"nodess",
        color:"bg-green-600"
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
                   
      },{
        icon: BsMicrosoftTeams,
        name:"Teams",
        color:"bg-purple-600"
      },{
        icon: SiJira,
        name:"Jira",
        color:"bg-blue-600"
      },{
        icon: VscVscode,
        name:"vscode",
        color:"bg-blue-600"
      }
    ]
  }
  // Puedes añadir más experiencias siguiendo la misma estructura
];