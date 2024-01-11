import './Tarjeta.css'

export default function Tarjeta({data,setPeliEliminada}){
    const eliminarPelicula= async ()=>{
        let id=data.id
       // console.log(id)
        await fetch("http://localhost:4500/eliminarPelicula",{
            method:'delete',
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({id:id})
        })
        .then((data)=>{return data.json()})
        .then(()=>{setPeliEliminada(true); setTimeout(()=>{setPeliEliminada(false)},2000)})
        .catch((err)=>console.log(err))
        
    }

    return(
        <div className='bg-secondary card col-sm-4'>
            <div className="card-body text-light d-flex flex-column gap-3">
                <img className='img-tarjeta' src={data.imagen} alt=''/>
                <h3 className="card-title text-center">{data.titulo}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Director: <strong>{data.tickets}</strong></li>
                    <li className="list-group-item">Genero: <strong>{data.genero}</strong></li>
                    <li className="list-group-item">Duracion: <strong>{data.duracion}</strong></li>
                </ul>
            </div> 
            <div className='d-flex gap-2'>
                <button className='btn btn-danger border-0' onClick={eliminarPelicula}>Eliminar Pelicula</button>
                <button className='btn btn-info border-0'>Editar Pelicula</button>
            </div>
            
        </div>
        
    )
}