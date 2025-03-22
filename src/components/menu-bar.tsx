import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "./theme-provider"
import { Link } from "react-router-dom"


export function MenuBar() {

  const { setTheme,theme } = useTheme()

  const handleClick = () => {
    if(theme==='dark'){
      setTheme('light')
    }else{
      setTheme('dark')
    }
  }

  const links=[

    {
      name:'Home',
      url:'/'
    },
    {
      name:'skills',
      url:'/expertise'
    },
    {
      name:'experience',
      url:'/experience'
    },
    {
      name:'projects',
      url:'/projects'
    },
    {
      name:'contact',
      url:'#'
    }
  ]

 
  return (
    <div className=" flex justify-end border-b border-dashed">
  
        
     

        
      <NavigationMenu className="mx-2 my-0.5" >

        <NavigationMenuList className="  text-sm gap-1 md:gap-4">

          {
            links.map((link)=>(
              <NavigationMenuItem key={link.name}>
                <NavigationMenuLink className="font-light" ><Link to={link.url}>{link.name}</Link></NavigationMenuLink>
              </NavigationMenuItem>

            ))
          }
          
          
          
          
          <NavigationMenuItem>
            <NavigationMenuLink href="#" className="font-light" onClick={handleClick}><Switch checked={theme==='dark'}/></NavigationMenuLink>
          </NavigationMenuItem>

         
          
        </NavigationMenuList>
          
      </NavigationMenu>
      
     
    </div>
  )
}