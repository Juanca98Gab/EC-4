const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { videojuegos: [], musicos: [], bandas: [] };
	}
	componentDidMount() {

		client({ method: 'GET', path: '/api/videojuegos' }).done(response => {
			this.setState({ videojuegos: response.entity._embedded.videojuegos });
		});

		client({ method: 'GET', path: '/api/musicos' }).done(response => {
			this.setState({ musicos: response.entity._embedded.musicos });
		});

		client({ method: 'GET', path: '/api/bandas' }).done(response => {
			this.setState({ bandas: response.entity._embedded.bandas });
		});

	}
	render() {
		return (
			<>
				<h1>Tienda de Videojuego</h1>
				<h2>Alcantara Navarra Juan</h2>

				<div style={  {"width": "100%", "display": "flex"}   }>
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Videojuegos" emoji="🎮" />
						<VideojuegoList videojuegos={this.state.videojuegos} />
						<Link to="/nuevo-videojuego">Nuevo Videojuego</Link>
					</div>
				</div>


			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<hr />
			Lista completa de {props.entidad.toLowerCase()}
		</>
	)
}


class VideojuegoList extends React.Component {
	render() {
		const videojuegos = this.props.videojuegos.map(videojuego =>
			<Videojuego key={videojuego._links.self.href} videojuego={videojuego} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Categoría</th>
						<th>Acciones</th>
					</tr>
					{videojuegos}
				</tbody>
			</table>
		)
	}
}



class Videojuego extends React.Component {
	render() {
		const id = this.props.videojuego._links.self.href.split("/").slice(-1)
		return (
			<tr>
				<td>{this.props.videojuego.nombre}</td>
				<td>{this.props.videojuego.categoria}</td>
				<td>
					<Link to={"/ver-videojuego/" + id}>Ver</Link> |
					<Link to={"/editar-videojuego/" + id}>Editar</Link>
				</td>
			</tr>
		)
	}
}



module.exports = HomePage;