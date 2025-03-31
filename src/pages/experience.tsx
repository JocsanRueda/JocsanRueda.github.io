import CardExperience from "@/components/card-experience";
import { data } from "@/data/experience/experience.data";
export function Experience(){

  return <div className=" min-h-screen flex flex-col justify-center items-center gap-7 mx-5 ">
    <div>
      <h1 className="text-4xl font-bold ">My Expertise</h1>
    </div>

    <div className=" flex  w-full justify-center  px-5  gap-1" >
      <div className="grid grid-cols-1   gap-6 ">
        {
          data.map((item)=>(

            <CardExperience key={item.company}
             
              title={item.company}
              subtitle={item.position}
              description={item.period}
              footer={item.description}
              className="opacity-85"
              lineColor={item.lineColor}
              stack={item.stack}
              id={item.id}
            
            />
          ))
        }
      </div>

    </div>

  </div>
}

export default Experience