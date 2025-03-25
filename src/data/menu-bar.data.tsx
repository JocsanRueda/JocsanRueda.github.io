import { routeEnum } from "@/shared/route.enum";
import { Contact, FolderKanban, House, SquareKanban, Sword } from "lucide-react";

export const data=[

  {
    name:'Inicio',
    url:routeEnum.HOME,
    icon:House,
  },
  {
    name:'Habilidades',
    url:routeEnum.EXPERTISE,
    icon:Sword,
  },
  {
    name:'Experiencia',
    url:routeEnum.EXPERIENCE,
    icon:SquareKanban,
  },
  {
    name:'Proyectos',
    url:routeEnum.PROJECTS,
    icon:FolderKanban,
  },
  {
    name:'Contacto',
    url:routeEnum.CONTACT,
    icon:Contact,
  }
]