const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const HomePage = require('./pages/home');

const VerVideojuegoPage = require('./pages/ver-videojuego');
const NuevoVideojuegoPage = require('./pages/nuevo-videojuego');
const EditarVideojuegoPage = require('./pages/editar-videojuego');

const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/ver-videojuego/:id', element: <VerVideojuegoPage /> },
	{ path: '/nuevo-videojuego', element: <NuevoVideojuegoPage /> },
	{ path: '/editar-videojuego/:id', element: <EditarVideojuegoPage /> },

])

ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react'))
