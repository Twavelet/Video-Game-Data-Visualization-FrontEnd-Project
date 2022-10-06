import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";

const UniqueFilter= (props) => {

    const [UniqueFilter, setUniqueFilter] = useState([])


    useEffect(() => {
        const data = Object.entries(props.parentUniqueFilter).map(([key,value]) => {
            return(
                [key, value, "blue"]
            )
          })

          console.log(data)
          setUniqueFilter([["Publisher", "Amount of Action Games in Top 300", { role: "style" }], ...data])
          
          ;
      }, [props.parentUniqueFilter]);
      console.log(UniqueFilter)
      
      return(
        <div>
            <h2>
                Which Publishers Have the Most Games in the Action Genre, in the Top 300
            </h2>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={UniqueFilter} />
        </div>
        
            
        

      )
}

export default UniqueFilter;