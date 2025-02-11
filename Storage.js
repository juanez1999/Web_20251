// 🔹 Guardar un dato en localStorage
localStorage.setItem('nombre', 'Juan Pérez');

// 🔹 Recuperar un dato almacenado en localStorage
let nombre = localStorage.getItem('nombre');
console.log('Nombre guardado en localStorage:', nombre);

// 🔹 Eliminar un dato específico
localStorage.removeItem('nombre');

// 🔹 Limpiar todo el almacenamiento
localStorage.clear();

// 🔹 Guardar un dato en sessionStorage
sessionStorage.setItem('sesionUsuario', 'Activo');

// 🔹 Recuperar un dato almacenado en sessionStorage
let estadoSesion = sessionStorage.getItem('sesionUsuario');
console.log('Estado de la sesión:', estadoSesion);

// 🔹 Eliminar un dato específico
sessionStorage.removeItem('sesionUsuario');

// 🔹 Limpiar todo el almacenamiento
sessionStorage.clear();

// 🔹 Crear un objeto
const usuario = {
	id: 1,
	nombre: 'Ana Gómez',
	edad: 28,
};

// 🔹 Guardar el objeto en localStorage (convirtiéndolo a JSON)
localStorage.setItem('usuario', JSON.stringify(usuario));

// 🔹 Recuperar el objeto de localStorage
let usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
console.log('Usuario guardado:', usuarioGuardado);
