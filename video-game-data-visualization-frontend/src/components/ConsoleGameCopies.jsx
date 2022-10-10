import { useState, useEffect } from "react";
import { Chart } from "react-google-charts";


const ConsoleGameCopies = (props) => {

    

        const [gameSearchResults, setGameSearchResults] = useState([])
    
    
        useEffect(() => {
            const data = (props.testParameter).map((el) => {
                return(
                    [el.platform, el.globalsales, "green"]
                )
              })
    
              console.log(data)
              setGameSearchResults([["Console", "Global Sales", { role: "style" }], ...data])
              
              ;
          }, []);
          console.log(gameSearchResults)

    return(
        <div>
            <h2>
                Number of Copies Sold per Console
            </h2>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={gameSearchResults} />
        </div>
    );

};

export default ConsoleGameCopies;