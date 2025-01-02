import React, { useState } from "react"

const Counter = ( ) => {
    const  [ count, setCount ] = React.useState(0)

    const handle = (set) => {
         
        if(set =="+"){
            setCount(count+1)
        }
        else{
            setCount(count-1)
        }
    }

    return(
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={()=>handle("+")}>+</button>
            <button onClick={()=>handle("-")}>-</button>
        </div>
    )
}

export default Counter