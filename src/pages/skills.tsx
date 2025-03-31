import CardSkill from "@/components/card-skill";
import { data } from "@/data/skills/skills.data";
export function Skills(){

  return <div className=" min-h-screen flex flex-col justify-center items-center gap-5 ">
    <div>
      <h1 className="text-4xl font-bold mb-6">My Expertise</h1>
    </div>

    <div className=" flex  w-full justify-center  px-5  gap-1" >
      <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-2 ">
        {
          data.map((item)=>(

            <CardSkill key={item.title}
              id={item.id}
              icon={item.icon} 
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              footer={item.footer}
              className="opacity-85"
              lineColor={item.lineColor}
              stack={item.stack}
            />
          ))
        }
      </div>

    </div>

  </div>
}

export default Skills