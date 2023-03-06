import React from "react";
import sary from './browser.png'

function Navbar() {
    return (
        <div className="container-fluid">

            <div className="row">
                <div className="col-md-3"> </div>
                <div className="col-xl-6 nav-left  ">
                    <div className="titre">
                        <img src={sary} className="img-fluid logo-dictionary me-4" alt="" /> <br />

                        <h1 className='text-center  '> <span className='red'>H</span><span className='green'>a</span><span className='blue'>n</span><span className='orange'>d</span>
                            <span className='yellow'>s</span>
                            <span className='orange'>o</span>
                            <span className='green'>m</span>
                            <span className='purple'>e</span>

                        </h1>

                    </div>

      

                  
                </div>
                <div className="col-md-3"> </div>
                
             
            </div>
                


        </div>

    )
}
export default Navbar