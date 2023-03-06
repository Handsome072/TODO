import React from 'react';
import sary from './browser.png'


const Form = () => {

    let [liste, setListe] = React.useState("")
    let [tab, setTab] = React.useState([])


    const handlesubmit = (e) => {
        e.preventDefault();
        if (liste !== "") {
            setTab([
                ...tab,
                { id: `${liste}-${Date.now()}`, liste }
            ])
            setListe("")
        }
    }
    const handleDelete = (id) => {
        const delListe = tab.filter((mot) => mot.id !== id);
        setTab([...delListe])
    }
    return (
        <div>
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
                            <div className="col-12">
                            <form className='recherche' onSubmit={handlesubmit}>
                                <input type="text" value={liste} id="text" onChange={(e) => setListe(e.target.value)} name="text" placeholder='Ecrivez ... ' />
                                <button type='submit' className="btn btn-info enreg ms-3 ">Enregistrer</button >
                            </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"> </div>
                </div>
                

            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 contenu mt-5">

                        <ul>
                            {
                                tab.map((t) => (
                                    <li className='liste ' key={t.id} >
                                        <span  >{t.liste}</span>
                                        <button className='btn btn-danger' onClick={() => handleDelete(t.id)}>X</button>
                                    </li>
                                ))
                            }


                        </ul>


                    </div>

                    <div className="col-md-3"></div>

                </div>



            </div>
        </div>

    )
}

export default Form