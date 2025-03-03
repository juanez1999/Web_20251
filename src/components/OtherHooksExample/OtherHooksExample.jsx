import { useState, useRef, useMemo, useCallback, createContext, useContext } from 'react';

// Creación de un contexto global para manejar temas (dark/light)
const ThemeContext = createContext();

function OtherHooksExample() {
	// 1️⃣ useState: Manejo del estado
	const [count, setCount] = useState(0);

	// 2️⃣ useRef: Referencia a un input sin provocar re-render
	const inputRef = useRef(null);

	// Sin useMemo, este cálculo se ejecuta en cada render
	// const squaredCount = count * count;

	// 3️⃣ useMemo: Memoriza el cálculo del cuadrado de count
	// Solo se recalcula si `count` cambia, optimizando rendimiento.
	const squaredCount = useMemo(() => {
		console.log('Calculando el cuadrado...');
		return count * count;
	}, [count]);

	// 4️⃣ useCallback: Memoriza la función para evitar recrearla en cada render
	const handleClick = useCallback(() => {
		alert(`Valor actual: ${count}`);
	}, [count]);

	return (
		// 5️⃣ Proveedor de contexto: Permite que ThemeConsumer acceda al tema
		<ThemeContext.Provider value='dark'>
			<div>
				<h2>Otros Hooks en React</h2>

				{/* Mostrar el estado actual del contador */}
				<p>Contador: {count}</p>

				{/* Mostrar el valor del contador al cuadrado usando useMemo */}
				<p>Cuadrado: {squaredCount}</p>

				{/* Botón para incrementar el contador */}
				<button onClick={() => setCount(count + 1)}>Incrementar</button>

				{/* Botón que muestra el valor actual en un alert */}
				<button onClick={handleClick}>Mostrar valor</button>

				{/* Input con referencia a useRef (se podría acceder con inputRef.current) */}
				<input ref={inputRef} placeholder='Escribe aquí...' />

				{/* Componente que consume el contexto del tema */}
				<ThemeConsumer />
			</div>
		</ThemeContext.Provider>
	);
}

// 6️⃣ useContext: Obtiene el valor del contexto para mostrar el tema actual
function ThemeConsumer() {
	const theme = useContext(ThemeContext);
	return <p>El tema actual es: {theme}</p>;
}

export default OtherHooksExample;
