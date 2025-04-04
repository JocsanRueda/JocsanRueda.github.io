import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import  profilePhoto  from "@/assets/images/profile_final.webp";
export function AboutMe() {

  return (
    <div className="flex flex-col items-center justify-center py-16 px-6">
     
      <div>
        <h1 className="text-4xl font-bold mb-10">Sobre mí</h1>
      </div>

      <Card className="bg-sidebar dark:bg-black opacity-85 border dark:border-gray-900 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-md shadow-none">
        <CardHeader className="flex flex-col items-center text-center">
          <Avatar className="w-64 h-64 mb-4  "  >
            <AvatarImage src={profilePhoto} alt="profile photo"/>
            <AvatarFallback>
                CN
            </AvatarFallback>
          </Avatar>
         
        </CardHeader>
        <CardContent className="text-gray-700 dark:text-gray-300 space-y-4">
          <p>
              ¡Hola! Soy <span className="font-semibold">Jocsan</span>, estudiante por egresar de
              Ingeniería en Sistemas Computacionales. Además, estudio Matemáticas con orientación
              en Ingeniería Matemática, combinando el análisis lógico con el desarrollo tecnológico.
          </p>
          <p>
              Me apasiona la programación, la ciencia de datos y la aplicación de modelos matemáticos
              para resolver problemas del mundo real. Disfruto trabajar en proyectos innovadores y siempre
              estoy en búsqueda de aprender nuevas tecnologías.
          </p>
          <p>
          En mi tiempo libre, disfruto hacer deporte y leer, especialmente los grandes clásicos de la literatura, temas históricos y algunas obras modernas.
          </p>
        </CardContent>
      </Card>
     
    </div>
  );
}

export default AboutMe;
