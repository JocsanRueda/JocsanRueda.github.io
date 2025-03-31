import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Calendar, 
  Code, 
  Users, 
  ArrowLeft,
  Text,
  Info,
  CheckCheck,
  Braces,
  Dot
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import { IconTooltip } from "./icon-tooltip";
import { data } from "@/data/project/detail-project.data";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
export function ProjectDetail() {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  const { id } = useParams<{ id: string }>(); 
  
  const project = data.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen dark:bg-black dark:*:text-white">
        <h1 className="text-2xl mb-4">Proyecto no encontrado</h1>
        <Button variant="outline" onClick={() => window.history.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
     
        <Button 
          variant="ghost" 
          className="mb-8 dark:text-gray-400 hover:text-white hover:bg-gray-800 border dark:border-none"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver 
        </Button>
        
        {/* Cabecera del proyecto */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl dark:text-gray-300 mb-6">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stacks.map((item) => (
              <IconTooltip item={item} key={item.name}/>
            ))}
          </div>
          
          <div className="flex gap-4">
            {project.githubUrl && (
              <Button variant="ghost" className="border hover:bg-gray-800 hover:text-white">
                <FaGithub className="mr-2 h-4 w-4" />
                <a href={project.githubUrl}>Repositorio</a>
              </Button>
            )}
            {project.liveUrl && (
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <ExternalLink className="mr-2 h-4 w-4" />
                <a href={project.liveUrl}>Sitio web </a>
              </Button>
            )}
            
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 opacity-90">
          {/* Columna principal */}
          <div className="lg:col-span-2">
            {/* Imagen del proyecto */}
            <Card className="dark:bg-black  text-white dark:border-gray-900  mb-8 overflow-hidden border -py-1">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto object-cover transition-all duration-300 transform hover:scale-105"
              />
            </Card>

            <Card className="bg-sidebar dark:bg-black dark:text-white dark:border-gray-900 mb-8 ">
              <CardHeader className="flex flex-row items-center">
                <Text size={28} />
                <div className="flex flex-col">
                  <CardTitle className="flex flex-col"><p className="z-10 text-lg">Descripción del Proyecto</p> <span className="p-1 rounded shadow -mt-2.5 z-0  bg-sky-700 dark:bg-blue-900"
                  ></span></CardTitle></div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                  {project.longDescription}
                </p>
              </CardContent>
            </Card>
            
            {/* Características */}
            <Card className="bg-sidebar dark:bg-black dark:text-white dark:border-gray-900 ">
              <CardHeader className="flex flex-row items-center">
                <CheckCheck size={28} />
                <div className="flex flex-col">
                  <CardTitle className="flex flex-col"><p className="z-10 text-lg">Actividades</p> <span className="p-1 rounded shadow -mt-2.5 z-0  bg-red-700 dark:bg-red-900"
                  ></span></CardTitle></div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 ">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Dot/>
                      <span className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
         
          <div>
            {/* Información del proyecto */}
            <Card className="bg-sidebar dark:bg-black dark:text-white dark:border-gray-900 mb-8 border">
              <CardHeader className="flex flex-row items-center">
                <Info size={28} />
                <div className="flex flex-col">
                  <CardTitle className="flex flex-col"><p className="z-10 text-lg">Información</p> <span className="p-1 rounded shadow -mt-2.5 z-0  bg-green-700 dark:bg-green-900"
                  ></span></CardTitle></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center text-gray-700 dark:text-gray-400 mb-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">Fecha</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-300">{project.date}</p>
                </div>
                
                <div>
                  <div className="flex items-center text-gray-700 dark:text-gray-400 mb-1">
                    <Code className="h-4 w-4 mr-2" />
                    <span className="text-sm">Rol</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-300">{project.role}</p>
                </div>
                
                {project.team && project.team.length > 0 && (
                  <div>
                    <div className="flex items-center text-gray-700 dark:text-gray-400 mb-1">
                      <Users className="h-4 w-4 mr-2" />
                      <span className="text-sm">Equipo</span>
                    </div>
                    <ul className="space-y-1">
                      {project.team.map((member, index) => (
                        <li key={index} className="text-gray-500 dark:text-gray-300">{member}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Contributions - Enhanced Visual Design */}
            <Card className="bg-sidebar dark:bg-black dark:text-white border dark:border-gray-900 overflow-hidden ">
              <CardHeader className="flex flex-row items-center">
                <Braces size={28} />
                <div className="flex flex-col">
                  <CardTitle className="flex flex-col"><p className="z-10 text-lg">Contribuciones</p> <span className="p-1 rounded shadow -mt-2.5 z-0  bg-purple-700 dark:bg-purple-900"
                  ></span></CardTitle></div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-4">
                  {/* Commits Card */}
                  <div className="bg-sidebar dark:bg-black rounded-xl p-4 border dark:border-gray-900 dark:hover:border-gray-800 transition-all duration-300 group ">
                    <div className="flex justify-between items-start mb-3">
                      <div className=" p-2 rounded-lg">
                        <FaGithub className="h-6 w-6" />
                      </div>
                      <span className="text-2xl font-bold dark:text-white">{project.commits || 116}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">Commits</span>
                    
                    </div>
                  </div>
      
                  {/* Lines Written Card */}
                  <div className="dark:bg-black  rounded-xl p-4 border dark:border-gray-900 dark:hover:border-gray-800 transition-all duration-300 group items-center">
                    <div className="flex justify-between items-start mb-3">
                      <div className=" p-2 rounded-lg">
                        <Code className="h-6 w-6 " />
                      </div>
                      <span className="text-2xl font-bold dark:text-white">{project.linesWritten || 200}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-600 dark:text-gray-400 text-sm">Líneas de código</span>
                     
                    </div>
                  </div>
                </div>
               
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;