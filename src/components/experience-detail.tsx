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
  Briefcase, 
  MapPin,
  ArrowLeft,
  Text,
  Info,
  CheckCheck,
  Dot,
  Award
} from "lucide-react";

import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { data } from "@/data/experience/experience.data";
import { IconTooltip } from "@/components/icon-tooltip";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export function ExperienceDetail() {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
    
  const { id } = useParams<{ id: string }>(); 
  
  const experience  = data.find((item) => item.id === id);

  if (!experience) {
    return (
      <div className="flex flex-col items-center justify-center h-screen dark:bg-black dark:*:text-white">
        <h1 className="text-2xl mb-4">Experiencia no encontrada</h1>
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
        
        {/* Cabecera de la experiencia */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{experience.company}</h1>
          <p className="text-xl dark:text-gray-300 mb-6">{experience.position}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {experience.stack.map((item) => (
              <IconTooltip item={item} key={item.name}/>
            ))}
          </div>
          
          <div className="flex gap-4">
            {experience.linkedinUrl && (
              <Button variant="ghost" className="border hover:bg-gray-800 hover:text-white">
                <FaLinkedin className="mr-2 h-4 w-4" />
                <a href={experience.linkedinUrl}>LinkedIn</a>
              </Button>
            )}
            {experience.companyUrl && (
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <ExternalLink className="mr-2 h-4 w-4" />
                <a href={experience.companyUrl}>Sitio web</a>
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 opacity-90">
          {/* Columna principal */}
          <div className="lg:col-span-2">
            {/* Imagen de la empresa */}

            <Card className="bg-sidebar dark:bg-black dark:text-white dark:border-gray-900 mb-8">
              <CardHeader className="flex flex-row items-center">
                <Text size={28} />
                <div className="flex flex-col">
                  <CardTitle className="flex flex-col">
                    <p className="z-10 text-lg">Descripción del Puesto</p>
                    <span className="p-1 rounded shadow -mt-2.5 z-0  bg-sky-700 dark:bg-blue-900"></span>
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                  {experience.description}
                </p>
              </CardContent>
            </Card>
            
            {/* Responsabilidades */}
            <Card className="bg-sidebar dark:bg-black dark:text-white dark:border-gray-900 mb-8">
              <CardHeader className="flex flex-row items-center">
                <CheckCheck size={28} />
                <div className="flex flex-col">
                  <CardTitle className="flex flex-col">
                    <p className="z-10 text-lg">Responsabilidades</p>
                    <span className="p-1 rounded shadow -mt-2.5 z-0 bg-red-700 dark:bg-red-900"></span>
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <Dot />
                      <span className="text-gray-700 dark:text-gray-300"><strong>{responsibility.split(':')[0]}</strong>: {responsibility.split(':')[1]}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Logros */}
            {experience.achievements && experience.achievements.length > 0 && (
              <Card className="bg-sidebar dark:bg-black dark:text-white dark:border-gray-900 ">
                <CardHeader className="flex flex-row items-center">
                  <Award size={28} />
                  <div className="flex flex-col">
                    <CardTitle className="flex flex-col">
                      <p className="z-10 text-lg">Logros</p>
                      <span className="p-1 rounded shadow -mt-2.5 z-0 bg-green-700 dark:bg-green-900"></span>
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <Dot/>
                        <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
         
          <div>
            {/* Información de la experiencia */}
            <Card className=" bg-sidebar dark:bg-black dark:text-white dark:border-gray-900 mb-8 ">
              <CardHeader className="flex flex-row items-center">
                <Info size={28} />
                <div className="flex flex-col">
                  <CardTitle className="flex flex-col">
                    <p className="z-10 text-lg">Información</p>
                    <span className="p-1 rounded shadow -mt-2.5 z-0 bg-orange-700 dark:bg-orange-900"></span>
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">Periodo</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-300">{experience.period}</p>
                </div>
                
                <div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span className="text-sm">Tipo de Contrato</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-300">{experience.contractType}</p>
                </div>
                
                <div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">Ubicación</span>
                  </div>
                  <p className="text-gray-500 dark:text-gray-300">{experience.location}</p>
                </div>
              </CardContent>
            </Card>

            {/* Contacto */}
            {experience.contactCompany && (
              <Card className="bg-black text-white border-gray-900 overflow-hidden ">
                <CardHeader className="flex flex-row items-center">
                  <FaEnvelope size={28} />
                  <div className="flex flex-col">
                    <CardTitle className="flex flex-col">
                      <p className="z-10 text-lg">Contacto</p>
                      <span className="p-1 rounded shadow -mt-2.5 z-0 bg-purple-900"></span>
                    </CardTitle>
                  </div>
                </CardHeader>
              
                <CardContent>
                  <div className="space-y-4">
                  
                    <a 
                      href={`mailto:${experience.contactCompany}`}
                      className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300"
                    >
                      <FaEnvelope className="h-4 w-4" />
                      <span>{experience.contactCompany}</span>
                    </a>
                
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceDetail;