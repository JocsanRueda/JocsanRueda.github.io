import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "./theme-provider"
import { Link } from "react-router-dom"
import { data } from "@/data/menu-bar.data"
import { FaGithub } from "react-icons/fa"
import { SidebarTrigger } from "./ui/sidebar"
export function MenuBar() {

  const { setTheme,theme } = useTheme()

  const handleClick = () => {
    if(theme==='dark'){
      setTheme('light')
    }else{
      setTheme('dark')
    }
  }
 
  return (
        
    <NavigationMenu className=" my-0.5 flex flex-row  justify-between border-b border-dashed backdrop-blur-[5px] max-w-none px-2" >

      <NavigationMenuLink className="block sm:hidden">
          
        <SidebarTrigger/>
         
      </NavigationMenuLink>

      <NavigationMenuList className="text-sm gap-1 md:gap-4">

        {
          data.map((link)=>(
            <NavigationMenuItem key={link.name} className="hidden sm:block">
              <Link className="font-light data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4" to={link.url}>{link.name}</Link>  </NavigationMenuItem>

          ))
        }

      </NavigationMenuList>

      <NavigationMenuList className="text-sm gap-1 md:gap-2">
        <NavigationMenuItem>
          <NavigationMenuLink href="" className="font-light" onClick={handleClick}><Switch checked={theme==='dark'}/></NavigationMenuLink>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink href="" ><FaGithub className="" /></NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
          
    </NavigationMenu>
   
  )
}