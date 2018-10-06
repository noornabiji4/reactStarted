import React from 'react'

//function componants 
const Car = function(props){
    return(
        <ol>
        {props.cars.map((cars)=><li key={cars.id}>{cars.name}</li>
           )}
        </ol>
    )
}

export default Car

