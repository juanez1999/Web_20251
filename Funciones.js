// 📌 FUNCIONES EN JAVASCRIPT

// 🔹 Función tradicional (function declaration)
function saludar(nombre) {
	return `Hola, ${nombre}!`;
}

console.log(saludar('Ana')); // "Hola, Ana!"

// 🔹 Función anónima (function expression)
const despedir = function (nombre) {
	return `Adiós, ${nombre}!`;
};

console.log(despedir('Carlos')); // "Adiós, Carlos!"

// 🔹 Función flecha (Arrow Function) - Sintaxis moderna
const multiplicar = (a, b) => a * b;
console.log(multiplicar(4, 5)); // 20

// 🔹 Función con valores por defecto
function bienvenida(nombre = 'Invitado') {
	return `Bienvenido, ${nombre}!`;
}

console.log(bienvenida()); // "Bienvenido, Invitado!"
console.log(bienvenida('Luis')); // "Bienvenido, Luis!"

// ---------------------------------------------------------------

// 📌 ÁMBITO DE LAS VARIABLES (SCOPE)

// 🔴 Scope Global: La variable es accesible desde cualquier parte del código
let variableGlobal = 'Soy global';

function mostrarGlobal() {
	console.log(variableGlobal);
}

mostrarGlobal(); // "Soy global"

// ---------------------------------------------------------------

// 🔵 Scope de función: La variable solo existe dentro de la función
function ejemploLocal() {
	let variableLocal = 'Solo existo aquí';
	console.log(variableLocal);
}

ejemploLocal(); // "Solo existo aquí"
// console.log(variableLocal); ❌ Error: variableLocal no está definida fuera de la función

// ---------------------------------------------------------------

// 🔵 Scope de bloque: Variables definidas con let o const dentro de un bloque `{}` solo existen ahí.
if (true) {
	let mensaje = 'Estoy dentro del bloque';
	console.log(mensaje); // "Estoy dentro del bloque"
}

// console.log(mensaje); ❌ Error: mensaje no está definido fuera del bloque

// ---------------------------------------------------------------

// 📌 Closures (Funciones que recuerdan su ámbito donde fueron creadas)
function contador() {
	let count = 0; // Variable privada dentro del closure
	return function () {
		count++;
		return count;
	};
}

const miContador = contador();
console.log(miContador()); // 1
console.log(miContador()); // 2
console.log(miContador()); // 3
// La variable count persiste en memoria dentro del closure
