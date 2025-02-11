// 📌 1. CALLBACKS (Funciones pasadas como argumento a otra función)

// 🔹 Simulación de una operación asíncrona con setTimeout
function operacionAsincronaCallback(mensaje, callback) {
	setTimeout(() => {
		console.log(mensaje);
		callback(); // Llamamos al callback cuando la operación finaliza
	}, 2000);
}

console.log('Inicio');

// Llamamos a la función y pasamos un callback
operacionAsincronaCallback('Procesando datos...', function () {
	console.log('Operación completada.');
});

console.log('Fin');
// 🔹 Aunque el código sigue ejecutándose, el mensaje "Procesando datos..." aparece después de 2s

// ---------------------------------------------------------------

// 📌 2. PROMESAS (Manejan asincronía de forma más estructurada)

// 🔹 Definición de una función que retorna una promesa
function operacionAsincronaPromesa(mensaje) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (mensaje) {
				resolve(`✅ Éxito: ${mensaje}`); // Se resuelve la promesa
			} else {
				reject('❌ Error: No se recibió un mensaje'); // Se rechaza la promesa
			}
		}, 2000);
	});
}

console.log('Inicio');

// 🔹 Usando then() y catch() para manejar la promesa
operacionAsincronaPromesa('Cargando datos...')
	.then((resultado) => {
		console.log(resultado);
	})
	.catch((error) => {
		console.error(error);
	});

console.log('Fin');

// ---------------------------------------------------------------

// 📌 3. ASYNC/AWAIT (Sintaxis más clara para trabajar con Promesas)

// 🔹 Función asíncrona usando async/await
async function ejecutarOperacion() {
	console.log('Inicio');

	try {
		let resultado = await operacionAsincronaPromesa('Descargando archivo...');
		console.log(resultado);
	} catch (error) {
		console.error(error);
	}

	console.log('Fin');
}

// Llamamos a la función
ejecutarOperacion();

/* 🔥 Explicación del orden de ejecución:

1. "Inicio" se imprime primero.
2. La operación asíncrona inicia y se ejecuta en segundo plano.
3. "Fin" se imprime antes de que termine la operación (porque JS sigue ejecutando el código).
4. Después de 2s, la promesa se resuelve y se imprime "✅ Éxito: Descargando archivo...".
*/

// ---------------------------------------------------------------

// 📌 4. FETCH API (Para hacer peticiones HTTP de forma asíncrona)

// 🔹 Petición GET a una API pública
async function obtenerUsuarios() {
	try {
		let respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
		if (!respuesta.ok) throw new Error('Error en la petición');

		let datos = await respuesta.json(); // Convertimos la respuesta a JSON
		console.log('Usuarios obtenidos:', datos);
	} catch (error) {
		console.error('Error:', error);
	}
}

// Llamamos a la función
obtenerUsuarios();
