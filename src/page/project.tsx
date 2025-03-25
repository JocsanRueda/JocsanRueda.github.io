import CardProjects from "@/components/card-project"
import { data } from "@/data/project.data"
export function Projects(){

  return (

    <div className="min-h-screen flex flex-col justify-center items-center gap-7 my-2 mx-5">
      
      <div>
        <h1 className="text-4xl font-bold ">My Projects</h1>
      </div>
      <div className="flex  w-full justify-center  px-5  " >
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 ">

          {
            data.map((item)=>{

              return <CardProjects key={item.title}
                id={item.id}
                title={item.title}
                subtitle={item.subtitle} 
                className="border rounded-md opacity-85 grow-1" 
                lineColor="bg-blue-900"
                imageUrl={item.imageUrl}
                icons={item.icons}
  
              />
            })
          }

        </div>
      </div>
      
    </div>
  )
}