// 1er composant principale 
import React from "react"
import List from "./components/List"
import Navbar  from "./components/Navbar"
import Hello from "./components/Hello"
import Users from "./components/Users"
import State from "./components/State"
import Counter from "./components/State"
const App = () =>{
    let data = [<li>Jane</li> , <li>Harry</li> , <li>peter</li>]
    function handleClick(event){
        console.log('test')
        console.log(event.target)
    }

    return(
        <div>
            <Counter/>
            <ul>
            {data}
            </ul>
            <Navbar/>
            <h1 className="titre">mon premier component</h1>
            <label htmlFor=""></label> 
            <input type="text" />
            <p>test</p>
            
            <List/>
            <img src="/logo192.png" alt="" />
            <Hello name="Harry" age="34"/>

            <div className="box">
                <Users fullname="Harry Potter"/>
                <Users fullname="Jane Doe"/>
                <Users fullname="Harry Potter"/>
                <Users fullname="Harry Potter"/>
            </div>
            <button onClick={handleClick}>log</button>
            
        </div>
        
        
    )
    // place return () pas {}
}
// rehefa mavita zavtr iray dia mila exportena mba ahafahana mampiasa azy amin'ny zavtr iray

export default App  //antsoina anaty js izy

