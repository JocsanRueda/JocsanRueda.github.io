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
import { data } from "@/data/menu-bar.data"

export function AppSidebar() {
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
                    <a href={item.url}>
                      <item.icon />
                      {item.name}
                       
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
