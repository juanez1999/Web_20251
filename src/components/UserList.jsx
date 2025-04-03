import { useState, useEffect } from 'react';

function UserList() {
	// Estado para almacenar los usuarios obtenidos de la API
	const [users, setUsers] = useState([]);
	// Estado para manejar el texto de búsqueda
	const [search, setSearch] = useState('');
	// Estado para controlar la carga de datos
	const [loading, setLoading] = useState(true);

	// Efecto que se ejecuta al montar el componente para hacer el fetch
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) => {
				setUsers(data); // Guardamos los usuarios en el estado
				setLoading(false); // Terminamos la carga
			})
			.catch((error) => {
				console.error('Error fetching users:', error);
				setLoading(false); // Si hay error, igual terminamos la carga
			});
	}, []); // El array vacío indica que este efecto solo se ejecuta una vez

	// Función que maneja los cambios en el input
	const handleSearchChange = (event) => {
		setSearch(event.target.value);
	};

	// Filtramos los usuarios en base a la búsqueda
	const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));

	return (
		<div>
			<h2>Lista de Usuarios</h2>
			<input
				type='text'
				placeholder='Buscar usuario...'
				value={search}
				onChange={handleSearchChange} // Evento para capturar cambios en el input
			/>
			{loading ? (
				<p>Cargando usuarios...</p>
			) : (
				<ul>
					{filteredUsers.map((user) => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default UserList;
