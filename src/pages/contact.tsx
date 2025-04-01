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
  Earth,
  CheckCheck,
  X,
  Clipboard,
  FileText
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { FormProvider, useForm } from "react-hook-form";
import { contactSchema } from "@/schemas/contact.schema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import emailjs from "@emailjs/browser";
import { Toaster } from "sonner";
import { toast } from "sonner"
import { useTheme } from "@/components/theme-provider";
import { IconTooltip } from "@/components/icon-tooltip";
import { linksEnum } from "@/data/links/data";
export function ContactPage() {
 
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "", 
      email: "", 
      subject: "",
      message: "", 
    },
  
  });

  const {theme}= useTheme()

  function onSubmit(values: z.infer<typeof contactSchema>) {
   
    const templateParams = {
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
    };
  
    emailjs.send(
      "service_h6uggvv", 
      "template_ugtq53f", 
      templateParams,
      "nCjT5uK6iCjFxDory"
    )
      .then(() => {

        toast("Mensaje enviado con éxito",{
          icon: <CheckCheck/>,
        })

        form.reset();
      })
      .catch((error) => {
       
        toast("Error al enviar el mensaje: " + error.message,{
          icon: <X/>,
        })
        
      });
  }

  const icons={
    linkedin: {
      name: "LinkedIn",
      icon: FaLinkedin,
      color: "bg-blue-800",
    },
    github: {
      name: "Curriculum",
      icon: FileText,
      color: "bg-green-800",
    },
  }

  return (
    <div className=" flex items-center justify-center px-5 p sm:px-4 py-10  my-15 sm:my-20 ">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 sm:gap-6 lg:gap-12 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl">

        <div className="space-y-8 mx-1.5">
          <div className="space-y-4">
            <h2 className=" text-2xl md:*:text-4xl font-bold text-center md:text-left">Contactate</h2>
          
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <AtSign className="text-blue-500 w-6 h-6" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <div className="flex items-center space-x-2">
                  <p>jocsanelyrueda@gmail.com</p>
                  <Clipboard 
                    className="w-5 h-5 cursor-pointer dark:text-gray-200 hover:bg-blue-500 p-0.5 hover:text-white dark:hover:text-black rounded transition-colors" 
                    onClick={() => {
                      navigator.clipboard.writeText("jocsanelyrueda@gmail.com");
                      toast("Correo copiado al portapapeles", {
                        icon: <CheckCheck />,
                      });
                    }} 
                  />
                </div>
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
    
          <div className="flex space-x-6 my-5">
            <a 
              href={linksEnum.LINKEDIN}
              target="_blank" 
              rel="noopener noreferrer"
            
            >
              <IconTooltip className="w-6 h-6-1" item={icons.linkedin} />
            </a>
            <a 
              href={linksEnum.CURIICULUM}
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <IconTooltip className="w-6 h-6" item={icons.github} />
            </a>
            
          </div>
        </div>

        {/* Columna de Formulario */}
        <div>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Card className="bg-sidebar dark:bg-black opacity-85 border dark:border-gray-900 ">
                <CardHeader>
                  <CardTitle className="text-2xl dark:text-white">Envía un Mensaje</CardTitle>
                </CardHeader>
                <CardContent>

                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem className="my-3">
                      <FormLabel className='block text-sm text-gray-600 dark:text-gray-400 '>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="tu nombre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem className="my-3">
                      <FormLabel className='block text-sm text-gray-600 dark:text-gray-400 '>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="@email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="subject" render={({ field }) => (
                    <FormItem className="my-3">
                      <FormLabel className='block text-sm text-gray-600 dark:text-gray-400 '>Asunto</FormLabel>
                      <FormControl>
                        <Input placeholder="Motivo de contacto" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="message" render={({ field }) => (
                    <FormItem className="my-3 ">
                      <FormLabel className='block text-sm text-gray-600 dark:text-gray-400 '>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Escribe tu mensaje aquí" {...field} className="min-h-[150px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <Button 
                    variant="outline"
                    type="submit" 
                    className="w-full  hover:bg-blue-800 transition-colors text-gray-600 hover:text-white dark:text-white "
                  >
                    <Send className="mr-2 w-4 h-4" /> Enviar Mensaje
                  </Button>
                  <Toaster theme={theme}/>
                </CardContent>
              </Card>
            </form>
          </FormProvider>
        </div>
      </div>
     
    </div>
  );
}

export default ContactPage;