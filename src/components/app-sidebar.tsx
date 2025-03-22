import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { FaGithub, FaLinkedin } from "react-icons/fa"

// Menu items.
const items = [
  {
    title: "Github",
    url: "#",
    icon: FaGithub,
  },
  {
    title: "Linkedin",
    url: "#",
    icon: FaLinkedin,
  }
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-dashed backdrop-blur-[2px]  z-10">
      <SidebarContent className="flex flex-col justify-end  ">
        <div className="border-t mt-10 border-dashed mb-auto"/>
        <SidebarGroup>
          
          <SidebarGroupContent>
            
            <SidebarMenu >
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                       
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
