import React, {useState} from 'react'

function Counter() {
const state = useState(0);
    function increase(){
        console.log(state)
    }
    return (
        
        <div>
            <h1>{state}</h1>
            <button onClick={increase}>+</button>
        </div>
    )
}

export default Counter;
