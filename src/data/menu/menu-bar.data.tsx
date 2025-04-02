import { routeEnum } from "@/shared/enum/route.enum";
import { Contact, FolderKanban, House, SquareKanban, Sword } from "lucide-react";
import { menuItemType } from "./types/menu.type";

export const data : menuItemType[]=[

  {
    name:"Inicio",
    url:routeEnum.HOME,
    icon:House,
  },
  {
    name:"Sobre Mí",
    url:routeEnum.ABOUT_ME,
    icon: SquareKanban,
  },
  {
    name:"Habilidades",
    url:routeEnum.SKILLS,
    icon:Sword,
  },
  {
    name:"Experiencia",
    url:routeEnum.EXPERIENCE,
    icon:SquareKanban,
  },
  {
    name:"Proyectos",
    url:routeEnum.PROJECTS,
    icon:FolderKanban,
  },
  {
    name:"Contacto",
    url:routeEnum.CONTACT,
    icon:Contact,
  },
  
]