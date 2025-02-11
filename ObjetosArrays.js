// 📌 ARRAYS EN JAVASCRIPT

// 🔹 Creación de un array
const frutas = ['Manzana', 'Banana', 'Cereza'];

console.log(frutas); // ["Manzana", "Banana", "Cereza"]

// 🔹 Acceder a elementos del array
console.log(frutas[0]); // "Manzana"
console.log(frutas[1]); // "Banana"

// 🔹 Agregar elementos al final con push
frutas.push('Uva');
console.log(frutas); // ["Manzana", "Banana", "Cereza", "Uva"]

// 🔹 Eliminar el último elemento con pop
frutas.pop();
console.log(frutas); // ["Manzana", "Banana", "Cereza"]

// 🔹 Agregar al inicio con unshift
frutas.unshift('Fresa');
console.log(frutas); // ["Fresa", "Manzana", "Banana", "Cereza"]

// 🔹 Eliminar el primer elemento con shift
frutas.shift();
console.log(frutas); // ["Manzana", "Banana", "Cereza"]

// 🔹 Recorrer un array con forEach
frutas.forEach((fruta, index) => console.log(`Índice ${index}: ${fruta}`));

// 🔹 Transformar un array con map
const frutasEnMayus = frutas.map((fruta) => fruta.toUpperCase());
console.log(frutasEnMayus); // ["MANZANA", "BANANA", "CEREZA"]

// 🔹 Filtrar un array con filter
const frutasConB = frutas.filter((fruta) => fruta.startsWith('B'));
console.log(frutasConB); // ["Banana"]

// 🔹 Encontrar un elemento con find
const frutaEncontrada = frutas.find((fruta) => fruta === 'Cereza');
console.log(frutaEncontrada); // "Cereza"

// 🔹 Comprobar si algún elemento cumple con some
const hayFrutaConA = frutas.some((fruta) => fruta.includes('a'));
console.log(hayFrutaConA); // true

// 🔹 Comprobar si todos cumplen con every
const todasTienenLetras = frutas.every((fruta) => fruta.length > 3);
console.log(todasTienenLetras); // true

// 🔹 Reducir un array a un solo valor con reduce
const totalLetras = frutas.reduce((acc, fruta) => acc + fruta.length, 0);
console.log(totalLetras); // 18 (suma de caracteres de todas las frutas)

// ---------------------------------------------------------------

// 📌 OBJETOS EN JAVASCRIPT

// 🔹 Creación de un objeto
const persona = {
	nombre: 'Juan',
	edad: 30,
	ciudad: 'Bogotá',
};

console.log(persona);

// 🔹 Acceder a propiedades
console.log(persona.nombre); // "Juan"
console.log(persona['edad']); // 30

// 🔹 Modificar propiedades
persona.edad = 31;
console.log(persona.edad); // 31

// 🔹 Agregar nuevas propiedades
persona.ocupacion = 'Desarrollador';
console.log(persona);

// 🔹 Eliminar propiedades
delete persona.ciudad;
console.log(persona);

// 🔹 Recorrer un objeto con for...in
for (let clave in persona) {
	console.log(`${clave}: ${persona[clave]}`);
}

// 🔹 Convertir un objeto en un array de claves y valores
console.log(Object.keys(persona)); // ["nombre", "edad", "ocupacion"]
console.log(Object.values(persona)); // ["Juan", 31, "Desarrollador"]
console.log(Object.entries(persona)); // [["nombre", "Juan"], ["edad", 31], ["ocupacion", "Desarrollador"]]

// 🔹 Combinar objetos con spread operator
const datosExtra = { pais: 'Colombia', hobby: 'Futbol' };
const personaCompleta = { ...persona, ...datosExtra };

console.log(personaCompleta); // {nombre: "Juan", edad: 31, ocupacion: "Desarrollador", pais: "Colombia", hobby: "Futbol"}
