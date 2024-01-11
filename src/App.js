
import { Fragment, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SeccionTarjetas from './SeccionTarjetas/SeccionTarjetas';
import SeccionForm from './SeccionForm/SeccionForm';
//import Home from './Components/Home/Home';
//import Peliculas from './Components/Peliculas/Peliculas';


function App() {
  const[mostrarForm,setMostrarForm]=useState(false)
  const[mostrarPelis,setMostrarPelis]=useState(false)
  return (
    <div className='App'>
      <Header/>
        <nav className='d-flex flex-column w-100 align-items-center gap-4'>
          <button className='btn btn-mostrar' onClick={()=>{setMostrarPelis(true);setMostrarForm(false)}}>Mostrar Peliculas</button>
          <button className='btn btn-cargar' onClick={()=>{setMostrarForm(true);setMostrarPelis(false)}}>Cargar Nueva Pelicula</button>
        </nav>

        {mostrarPelis?
          <section className='container d-flex flex-column align-items-center'>
            <button className='btn btn-info row align-self-end' onClick={()=>setMostrarPelis(false)}>X</button>
            <SeccionTarjetas/>
          </section>
            :''}

        {mostrarForm?
          <section className='container d-flex flex-column align-items-center'>
            <button className='btn btn-info row align-self-end' onClick={()=>setMostrarForm(false)}>X</button>
            <SeccionForm/>
          </section>
        :''}
     
    </div>
  );
}

export default App;
 /* <Home/> */