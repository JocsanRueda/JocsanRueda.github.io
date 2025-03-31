import CardExperience from "@/components/card-experience";
import { sumaryData } from "@/data/experience/experience.data";
export function Experience(){

  return <div className=" flex flex-col justify-center items-center gap-5 mx-1  my-10 md:my-20 ">
    <div>
      <h1 className="text-4xl font-bold mb-10 ">Experiencia</h1>
    </div>

    <div className=" flex  w-full justify-center  px-4  gap-1" >
      <div className="grid grid-cols-1   gap-6 ">
        {
          sumaryData.map((item)=>(

            <CardExperience key={item.company}
             
              title={item.company}
              subtitle={item.position}
              description={item.period}
              footer={item.shortDescription}
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