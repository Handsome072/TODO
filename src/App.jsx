import Form from './components/Form'
import Navbar from './components/Navbar'

import Exo from './components/exo'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './font-awesome/css/font-awesome.min.css'


export default function App() {


  //   let res= data.map((value, index)=>{
  //     return (
  //       <li key={index}>{value.name}, {value.age}</li>
  //     )
  // })
  // return(
  //   <div>
  //       <ul>{res}</ul>
  //        <Form />
  //        <Exo />
  //       <Title />
  //   </div>
  // )


  return (
    <div>
      <div className='background'></div>
      <nav className="navbar navbar-expand-lg navbar-dark navbar-head p-4">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">To do list</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-4">
                <a className="nav-link active" aria-current="page" href="#">Acceuil</a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#">Produits</a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#">Pages</a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link disabled">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <Navbar /> */}
      <Form />

    </div>
  )

}