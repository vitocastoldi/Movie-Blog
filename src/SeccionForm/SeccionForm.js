import "./seccionForm.css"

export default function SeccionForm(){
    return(
            <form>
                <label className="form-label mt-3" htmlFor="titulo" >Título de la pelicula</label>
                <input type="text" className="form-control" id="titulo" name="titulo"/>   

                <label className="form-label mt-3" htmlFor="director">Director de la pelicula</label>
                <input type="text" className="form-control" id="director" name="director"/>

                <label className="form-label mt-3" htmlFor="genero">Género de la pelicula</label>
                <select className="form-select" id="genero" name="genero">
                    <option value="Documental">Documental</option>
                    <option value="Aventura">Aventura</option>
                    <option value="Acción">Acción</option>
                    <option value="Drama">Drama</option>
                    <option value="Crimen">Crimen</option>
                    <option value="Ciencia">Ciencia Ficción</option>
                    <option value="Comedia">Comedia</option>
                </select>

                <label className="form-label mt-3" htmlFor="duracion">Duración de la pelicula</label>
                <input type="text" className="form-control" id="duracion" name="duracion"/>

                <label className="form-label mt-3" htmlFor="portada">Portada de la pelicula</label>
                <input className="ms-2" type="file" id="portada" name="imagen"/>

                <input className="btn btn-success d-block" type="submit" value={"Cargar"}/>
            </form>
    )
}