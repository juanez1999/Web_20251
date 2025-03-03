import { useState, useEffect } from 'react';

function FetchDataExample() {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users/1')
			.then((response) => response.json())
			.then((data) => {
				setUser(data);
				setLoading(false);
			});
	}, []);

	return (
		<div>
			<h2>Fetching Data Example</h2>
			{loading ? <p>Loading...</p> : <p>Usuario: {user.name}</p>}
		</div>
	);
}

export default FetchDataExample;
