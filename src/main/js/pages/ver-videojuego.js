const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState, useEffect} = require('react');
const client = require('../client');

const VerVideojuegoPage = () => {

    let { id } = useParams();
    const [videojuego, setVideojuego] = useState({});

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/videojuegos/' + id
        }).done(response=>setVideojuego(response.entity))
    }, [])



    return (
        <>
            <h1>Ver Videojuego</h1>

            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{videojuego.nombre}</td>
                </tr>
                <tr>
                    <th>Categoría</th>
                    <td>{videojuego.categoria}</td>
                </tr>
                <tr>
                    <th>Descripción</th>
                    <td>{videojuego.descripcion}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerVideojuegoPage;