import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';


const MostSuccessfulPublishers = (props) => {

        const [mostSuccessfulPublisher, setMostSuccessfulPublisher] = useState([])
    
    
        useEffect(() => {
            const data = Object.entries(props.parentPublisher).map(([key,value]) => {
                return(
                    [key, value, "magenta"]
                )
              })
    
              console.log(data)
              setMostSuccessfulPublisher([["Console", "Global Sales", { role: "style" }], ...data])
              
              ;
          }, [props.parentPublisher]);
          console.log(mostSuccessfulPublisher)
          
          return(
            <div>
                <h2>
                    The Most Successful Publishers According to Global Games Sales Since 1980
                </h2>
                <Chart chartType="ColumnChart" width="100%" height="400px" data={mostSuccessfulPublisher}/>
            </div>
          )
          
    



}

export default MostSuccessfulPublishers;