// Declaración de variables con var, let y const

// 🔴 var (Evitar su uso en código moderno)
// 'var' tiene un ámbito de función y permite redeclaración.
var nombre = 'Juan';
console.log(nombre); // Juan

var nombre = 'Carlos'; // Redeclaración permitida
console.log(nombre); // Carlos

// 🔵 let (Usar en la mayoría de los casos)
// 'let' tiene un ámbito de bloque y NO permite redeclaración en el mismo bloque.
let edad = 25;
console.log(edad); // 25

// let edad = 30; ❌ Esto generaría un error (ya declarada en el mismo bloque)
edad = 30; // ✅ Se puede reasignar
console.log(edad); // 30

// 🟢 const (Usar para valores que NO cambian)
// 'const' también tiene un ámbito de bloque y no se puede reasignar.
const PI = 3.1416;
console.log(PI); // 3.1416

// PI = 3.15; ❌ Error: No se puede reasignar un valor a una constante

// ---------------------------------------------------------------

// 📌 Tipos de datos primitivos en JavaScript

let numero = 42; // Número (integer o float)
let texto = 'Hola'; // String (texto)
let booleano = true; // Booleano (true o false)
let indefinido; // undefined (sin valor asignado)
let nulo = null; // null (ausencia de valor)

console.log(typeof numero); // number
console.log(typeof texto); // string
console.log(typeof booleano); // boolean
console.log(typeof indefinido); // undefined
console.log(typeof nulo); // object (peculiaridad de JS)

// ---------------------------------------------------------------

// 📌 Uso de backticks (`) para interpolación de strings
let nombrePersona = 'Ana';
let edadPersona = 28;

// En lugar de usar concatenación con +
console.log('Hola, mi nombre es ' + nombrePersona + ' y tengo ' + edadPersona + ' años.');

// Se recomienda usar backticks y ${} para mejor legibilidad:
console.log(`Hola, mi nombre es ${nombrePersona} y tengo ${edadPersona} años.`);
