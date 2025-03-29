import { useState, FormEvent, ChangeEvent } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Send,
  AtSign,
  Earth
} from "lucide-react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Interfaz para los datos del formulario
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-5 p sm:px-4 py-16">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 sm:gap-6 lg:gap-12">
        {/* Columna de Información Personal */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className=" text-2xl md:*:text-4xl font-bold">Contactate</h2>
          
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <AtSign className="text-blue-500 w-6 h-6" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p>jocsanelyrueda@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Earth className="text-green-500 w-6 h-6" />
              <div>
                <p className="text-sm text-gray-400">Ubicación</p>
                <p>Tegucigalpa, Honduras</p>
              </div>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="flex space-x-6 my-5">
            <a 
              href="https://linkedin.com/in/tuusuario" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/tuusuario" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            
          </div>
        </div>

        {/* Columna de Formulario */}
        <div>
          <Card className="bg-black opacity-85  border-gray-900 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Envía un Mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Nombre</label>
                  <Input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre" 
                    className="bg-black border-gray-800 focus:border-blue-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Correo Electrónico</label>
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com" 
                    className="bg-black border-gray-800 focus:border-blue-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Asunto</label>
                  <Input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Motivo de contacto" 
                    className="bg-black border-gray-800 focus:border-blue-600"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Mensaje</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje aquí" 
                    className="bg-black border-gray-800 focus:border-blue-600 min-h-[150px]"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 transition-colors dark:text-white "
                >
                  <Send className="mr-2 w-4 h-4" /> Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;