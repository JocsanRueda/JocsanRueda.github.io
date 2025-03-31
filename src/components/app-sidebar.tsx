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
import { data } from "@/data/menu/menu-bar.data"
import { cn } from "@/lib/utils"
import { routeEnum } from "@/shared/enum/route.enum"

import {Link, scroller } from "react-scroll"
export function AppSidebar() {
  const {activeSection,setActiveSection}= useActiveSection()

  const handleClick = async (sectionName:string) => {
    if(window.location.pathname!==routeEnum.HOME){
    
      await new Promise((resolve)=>{
        window.history.back()
        setTimeout(resolve, 50);
      });
       
      scroller.scrollTo(sectionName, {
        duration: 500,
        smooth: true,
        offset: -41, 
      });
    
      setActiveSection(sectionName); 
       
    }
  };

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
                    <Link to={item.url} smooth={true} duration={500} onSetActive={()=>setActiveSection(item.url)}  spy={true} className={cn(activeSection===item.url?"font-bold":"font-normal")} onClick={() => handleClick(item.url)} >
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
