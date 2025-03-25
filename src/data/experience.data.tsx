import { 
  Layout, 
  User, 
  Server,
  PenTool
} from "lucide-react";

export const data = [
  {
    icon:Layout,
    lineColor:"bg-blue-900",
    id: "empresa1",
    company: "Empresa Tecnológica S.A.",
    position: "Desarrollador Full Stack Senior",
    period: "Enero 2021 - Presente",
    contractType: "Tiempo Completo",
    location: "Ciudad, País",// Opcional: ruta a la imagen de la empresa
    description: "Como desarrollador Full Stack Senior, soy responsable del diseño e implementación de soluciones tecnológicas robustas y escalables. Trabajo en estrecha colaboración con equipos multidisciplinarios para crear aplicaciones web innovadoras que satisfacen las necesidades de nuestros clientes.",
    responsibilities: [
      "Desarrollar y mantener aplicaciones web utilizando React y Node.js",
      "Diseñar e implementar APIs RESTful",
      "Optimizar el rendimiento y la escalabilidad de las aplicaciones",
      "Colaborar con el equipo de diseño para implementar interfaces de usuario atractivas y funcionales",
      "Realizar revisiones de código y mentorías a desarrolladores junior",
      "Implementar pruebas unitarias y de integración"
    ],
    achievements: [
      "Reduje el tiempo de carga de la aplicación principal en un 40% mediante la implementación de técnicas de optimización",
      "Lideré la migración exitosa de una arquitectura monolítica a microservicios",
      "Implementé un sistema de CI/CD que redujo el tiempo de despliegue en un 60%",
      "Recibí el premio al 'Empleado del Año' en 2022"
    ],
    skills: [
      { name: "Frontend", icon: Layout, color: "bg-blue-900 text-blue-100", description: "Desarrollo de interfaces de usuario modernas y responsivas" },
      { name: "Backend", icon: Server, color: "bg-green-900 text-green-100", description: "Creación de APIs y servicios robustos" },
      { name: "Diseño UI/UX", icon: PenTool, color: "bg-purple-900 text-purple-100", description: "Creación de experiencias de usuario intuitivas" }
    ],
    technologies: [
      "React", "Node.js", "TypeScript", "MongoDB", "Express", "Redux", "Next.js", "GraphQL", "Docker", "AWS"
    ],
    linkedinUrl: "https://linkedin.com/company/empresa1",
    companyUrl: "https://www.empresa1.com",
    contactEmail: "contacto@empresa1.com",
    contactLinkedin: "https://linkedin.com/in/tu-perfil"
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
    contactLinkedin: "https://linkedin.com/in/tu-perfil"
  }
  // Puedes añadir más experiencias siguiendo la misma estructura
];