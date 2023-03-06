// hook 10 isa

// igerena ilay performance ilay application
// 2 , useState
// antsoina anaty react ny useState rehefa hook
import {useState} from "react"

const initialState = {
    number : 0
}

function Counter(){
    // isak ny mclick dia miena na mitombo
    // rehefa manao copie state 

    let [count , setCount] = useState(initialState)

    const handleClick = () => {
        setCount ({
            ...count,
            number : count.number + 1
        })
    } 
    
    
    const handle = () => {
        setCount ({
            ...count,
            number : count.number - 1
        })
    
} 

    return(
        <div>
            <button onClick={handleClick} >+</button>
            <h1>{count.number}</h1>
            <button onClick={handle} >-</button>
        </div>
    )
}
export default Counter