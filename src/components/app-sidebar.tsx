import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useActiveSection } from "@/context/active-section.context"
import { data } from "@/data/menu-bar.data"
import { cn } from "@/lib/utils"

import {Link } from "react-scroll"
export function AppSidebar() {
  const {activeSection,setActiveSection}= useActiveSection()
  return (
    <Sidebar className="border-r border-dashed backdrop-blur-[2px]  z-10">

      <SidebarContent className="flex flex-col  ">

        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          
          <SidebarGroupContent>
            
            <SidebarMenu >
              {data.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} smooth={true} duration={500} onSetActive={()=>setActiveSection(item.url)}  spy={true} className={cn(activeSection===item.url?"font-bold":"font-normal")} >
                      <item.icon />
                      {item.name}
                       
                    </Link>
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
