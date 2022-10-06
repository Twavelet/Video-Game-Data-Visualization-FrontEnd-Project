import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";




const GlobalSales= (props) => {

    const [globalSales, setGlobalSales] = useState([])


    useEffect(() => {
        const data = Object.entries(props.parentGlobalSales).map(([key,value]) => {
            return(
                [key, value, "gold"]
            )
          })

          console.log(data)
          setGlobalSales([["Console", "Global Sales", { role: "style" }], ...data])
          
          ;
      }, [props.parentGlobalSales]);
      console.log(globalSales)
      
      return(
        
        <Chart chartType="ColumnChart" width="100%" height="400px" data={globalSales} />
            
        

      )
}

export default GlobalSales;