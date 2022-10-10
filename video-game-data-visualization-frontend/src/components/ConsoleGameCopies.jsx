import { useEffect } from "react";
import { Chart } from "react-google-charts";
import axios from 'axios';

const ConsoleGameCopies = (props) => {

    useEffect(() => {

        const [globalSales, setGlobalSales] = useState([])

        props.parentData.map(async (el) => {
            return(
                await axios.get(`http://localhost:8080/games/${el.name}`)
            )
        });

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

    // useEffect(() => {
    //     const data = Object.entries(props.parentGlobalSales).map(([key, value]) =>{
    //         return(
    //             [key, value, "green"]
    //         )
    //     })

    //     console.log(data)
    //     setGlobalSales([["Console", "Global Sales", { role: "style" }], ...data])

    // },[props.parentGlobalSales]);
    // console.log(globalSales);

    return(
        <div>
            <h2>
                The Games With the Most Copies Sold In Each Console
            </h2>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={globalSales} />
        </div>
    );

};

export default ConsoleGameCopies;