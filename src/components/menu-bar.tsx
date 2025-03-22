import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "./theme-provider"


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
    <div className=" flex justify-end border-b border-dashed">
  
        
     

        
      <NavigationMenu className="mx-2 my-0.5" >

        <NavigationMenuList className="  text-sm gap-1 md:gap-4">

          <NavigationMenuItem>
            <NavigationMenuLink href="/" className="font-light" >home</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/expertise" className="font-light" >skills</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/experiense" className="font-light" >experience</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/projects" className="font-light" >projecs</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="#" className="font-light" >contact</NavigationMenuLink>
          </NavigationMenuItem>
          
          
          
          <NavigationMenuItem>
            <NavigationMenuLink href="#" className="font-light" onClick={handleClick}><Switch checked={theme==='dark'}/></NavigationMenuLink>
          </NavigationMenuItem>

         
          
        </NavigationMenuList>
          
      </NavigationMenu>
      
     
    </div>
  )
}