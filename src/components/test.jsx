import React from "react";

const Test=()=>{
    const init = {
        text:"",
        code:""
    }

    let[test , setTest] = React.useState(init)
  
    const handleTest=(event)=>{
           setTest({
              ...test,
               [event.target.name]:event.target.value
           })
    }
    return(
        <div>
               
               <label htmlFor="texte"> votre texte:</label>
               <input type="text" id="texte" name="text" onChange={handleTest}/> <br /><br /><br /><br />


               <label htmlFor="passe"> votre Password:</label>
               <input type="password" id="passe" name="code" onChange={handleTest} />


               <h1>{test.text}</h1>
               <h1>{test.code} </h1>

        </div>
    )
}

export default Test