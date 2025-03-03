import { useState, useEffect } from 'react';

function UseEffectExample() {
	const [count, setCount] = useState(0);

	// Se ejecuta en cada render
	useEffect(() => {
		console.log('Renderizado!');

		return () => {
			console.log('Cleanup al desmontar!');
		};
	});

	// Se ejecuta solo al montar
	useEffect(() => {
		console.log('Componente montado!');

		return () => {
			console.log('Componente desmontado!');
		};
	}, []);

	// Se ejecuta cuando `count` cambia
	useEffect(() => {
		console.log(`El contador cambió a ${count}`);
	}, [count]);

	return (
		<div>
			<h2>useEffect en acción</h2>
			<p>Contador: {count}</p>
			<button onClick={() => setCount(count + 1)}>Incrementar</button>
		</div>
	);
}

export default UseEffectExample;
