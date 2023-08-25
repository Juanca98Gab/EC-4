const React = require('react');
const {useState, useEffect} = require('react');
const { Link, useParams } = require('react-router-dom');
const client = require('../client');

const EditarVideojuegoPage = ()=>{

    const [videojuego, setVideojuego] = useState({})
    let { id } = useParams();

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/videojuegos/'+id
        }).done((response)=>setVideojuego(response.entity))
    },[])

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/videojuegos/'+id,
            entity: videojuego,
            headers: {'Content-Type': 'application/json'}
        }).done(()=>window.location = '/')
    }

    return(
        <>
            <h1>Editar Videojuego</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" id="nombre" name="nombre" value={videojuego.nombre} onChange={(e)=>setVideojuego({...videojuego, nombre: e.target.value})} /> <br/>
                <label>Categoria</label>
                <input type="text" id="categoria" name="categoria" value={videojuego.categoria} onChange={(e)=>setVideojuego({...videojuego, categoria: e.target.value})}  /> <br/>
                <label>Descripcion</label>
                <input type="text" id="descripcion" name="descripcion" value={videojuego.descripcion} onChange={(e)=>setVideojuego({...videojuego, descripcion: e.target.value})}  /> <br/>
                
                <input type="submit" value="Editar Videojuego" />
            </form>

        </>
    )
}

module.exports = EditarVideojuegoPage