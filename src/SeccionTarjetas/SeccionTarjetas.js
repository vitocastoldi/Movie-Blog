import Tarjeta from "../Tarjeta/Tarjeta";
import { useState,useEffect, Fragment } from "react";



export default function SeccionTarjetas(){
    const[peliculas,setPeliculas]=useState([{id:"A"}])
    const [peliEliminada,setPeliEliminada]=useState(false)
    const[peliEliminadaID,setPeliEliminadaID]=useState('');

    const traerInfo=async()=>{
        let info= await fetch( "http://localhost:4500/todasLasPeliculas" )
        .then((data)=>{return data.json()})
        .then((resp)=>{setPeliculas(resp)})
        .catch((error)=>{console.log(error)})

        return info
    }

    const filtrarPelis=(peliId)=>{
        let nuevaListaPelis=peliculas.filter((peli)=>{return peli.id !== peliId});
        setPeliculas(nuevaListaPelis)
    }
    
    
    
    useEffect(()=>{
        filtrarPelis(peliEliminadaID)
    },[peliEliminadaID])
    
    
    
    useEffect(()=>{
        traerInfo()
    },[]);

    
    
    return(
        <Fragment>
            {peliEliminada === false?
                <div className="row gap-4">
                {peliculas.map((peli)=>{
                    return <Tarjeta key={peli.id} data={peli} setPeliEliminada={setPeliEliminada}/>})
                } 
                </div>:
                <p className="alert-succes text-black text-center">Pelicula Eliminada con exito!</p>
            }
        </Fragment>
        
      
    )
}