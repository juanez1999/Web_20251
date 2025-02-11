// 📌 OPERADORES EN JAVASCRIPT

// 🔹 Operadores aritméticos
let a = 10;
let b = 3;

console.log(a + b); // 13 (Suma)
console.log(a - b); // 7  (Resta)
console.log(a * b); // 30 (Multiplicación)
console.log(a / b); // 3.333... (División)
console.log(a % b); // 1  (Módulo - Residuo)
console.log(a ** b); // 1000 (Exponenciación)

// 🔹 Operadores de comparación
console.log(a > b); // true  (Mayor que)
console.log(a < b); // false (Menor que)
console.log(a == '10'); // true  (Compara solo el valor)
console.log(a === '10'); // false (Compara valor y tipo de dato)
console.log(a != b); // true  (Diferente en valor)
console.log(a !== '10'); // true (Diferente en valor y tipo)

// 🔹 Operadores lógicos
let x = true;
let y = false;

console.log(x && y); // false (AND: ambas deben ser true)
console.log(x || y); // true  (OR: al menos una true)
console.log(!x); // false (NOT: invierte el valor booleano)

// ---------------------------------------------------------------

// 📌 ESTRUCTURAS DE CONTROL

// 🔴 Condicionales if - else - else if
let edad = 20;

if (edad >= 18) {
	console.log('Eres mayor de edad');
} else {
	console.log('Eres menor de edad');
}

// 🔵 Condicional múltiple con else if
let nota = 85;

if (nota >= 90) {
	console.log('Calificación: A');
} else if (nota >= 80) {
	console.log('Calificación: B');
} else if (nota >= 70) {
	console.log('Calificación: C');
} else {
	console.log('Reprobado');
}

// ---------------------------------------------------------------

// 🔵 Switch: Ideal para múltiples condiciones fijas
let dia = 'lunes';

switch (dia) {
	case 'lunes':
		console.log('Inicio de semana 😴');
		break;
	case 'viernes':
		console.log('¡Fin de semana cerca! 🎉');
		break;
	case 'domingo':
		console.log('Día de descanso 😌');
		break;
	default:
		console.log('Día normal.');
}

// ---------------------------------------------------------------

// 🔴 Bucles en JavaScript

// 🔵 Bucle for: cuando sabemos cuántas veces repetir
console.log('Números del 1 al 5:');
for (let i = 1; i <= 5; i++) {
	console.log(i);
}

// 🔵 Bucle while: cuando la condición debe cumplirse antes de iterar
let contador = 0;
while (contador < 3) {
	console.log(`Iteración ${contador}`);
	contador++;
}

// 🔵 Bucle do-while: se ejecuta al menos una vez
let numero = 5;
do {
	console.log(`Número actual: ${numero}`);
	numero--;
} while (numero > 2);

// 📌 MÉTODOS DE ARRAY: forEach y map

// 🔹 Ejemplo de un array
const numeros = [1, 2, 3, 4, 5];

// 🔴 forEach: Recorre cada elemento del array pero NO devuelve un nuevo array
console.log('Usando forEach:');
numeros.forEach((numero, indice) => {
	console.log(`Índice ${indice}: Valor ${numero}`);
});
// ⚠️ Importante: forEach no retorna un nuevo array, solo ejecuta la función para cada elemento.

// ---------------------------------------------------------------

// 🔵 map: Recorre cada elemento y devuelve un nuevo array transformado
console.log('Usando map:');
const numerosDoblados = numeros.map((numero) => numero * 2);
console.log(numerosDoblados); // [2, 4, 6, 8, 10]

// ---------------------------------------------------------------

// 🔵 Diferencia clave entre forEach y map:
const resultadoForEach = numeros.forEach((numero) => numero * 2);
console.log(resultadoForEach); // undefined (forEach no devuelve nada)

const resultadoMap = numeros.map((numero) => numero * 2);
console.log(resultadoMap); // [2, 4, 6, 8, 10] (map sí devuelve un nuevo array)

// ---------------------------------------------------------------

// 🔹 Ejemplo práctico con objetos
const personas = [
	{ nombre: 'Ana', edad: 25 },
	{ nombre: 'Carlos', edad: 30 },
	{ nombre: 'Beatriz', edad: 22 },
];

// 🔴 forEach solo imprime sin modificar el array original
console.log('Nombres de personas:');
personas.forEach((persona) => console.log(persona.nombre));

// 🔵 map crea un nuevo array con los nombres en mayúsculas
const nombresMayus = personas.map((persona) => persona.nombre.toUpperCase());
console.log(nombresMayus); // ["ANA", "CARLOS", "BEATRIZ"]
