// import { useState } from "react"

// const init ={
//     word:0,
//     character:0
// }

// function Exo(){
//     let [state, setState]=useState(init)

//     const handleChange = (event)=>{
//         let char = event.target.value
//         let words = char.split(" ")

//         let tabword= words.filter((value)=> value !=="")

//         setState({
//             ...state,
//             character: char.length,
//             word: tabword.length
//         })


//     }

// return (
//     <form>
//         <div>
//             <label htmlFor="text">Log Text</label><br />
//             <input type="text" onChange={handleChange} />

//         </div>

//         <h3 className="text-white">Word: {state.word}</h3>
//         <h3 >Character: {state.character}</h3>
//     </form>
// )





// }


// export default Exo
import React from 'react'

const person=[
    {
        "name":"Jane doe",
        "age":34
    },
    {
        "name":"Harry Potter",
        "age":45
    },
    {
        "name":"Rakoto be",
        "age":23
    }
]






const init = {
    text: "",
    code: ""
}


const Exo = () => {

    let [nombre, setNombre] = React.useState(init)

//     const transform = (str) => {
     
//         const result = person.filter(item=>item.name.toLowerCase().includes(str))
// // return result
//     }



    const handleText = (event) => {
        setNombre({
            ...nombre,
            [event.target.name]: event.target.value

        })

    }



    return (
        <form >
            <div>
                <label htmlFor="text">Log Text</label> <br />
                <input type="text" name='text' onChange={handleText} className="mt-5" />

            </div>


            {/* <div className='text-white'>{transform(nombre.text)}</div> */}
          
        </form>
    )
}

export default Exo