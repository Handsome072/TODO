import { useState, useEffect } from "react"

function Title() {

    let [state, setState] = useState(0)


    useEffect(() => {
        document.title = `${state} -- nombre`
    }, [state])
    
    const increment = () => {
        setState(state + 1)

        // document.title=`${state}-nombre` 
    }
    return (
        <div>

            <button onClick={increment}>Click me</button>
            <h1>nombre: {state}</h1>
        </div>

    )


}

export default Title