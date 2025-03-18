// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados. Ejemplo:
let amigos = [];

// ## Implementa una función para agregar amigos

// Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.

// ### Tareas específicas:

// ‌

// - **Capturar el valor del campo de entrada:** Utilizar `document.getElementById` o `document.querySelector` para obtener el texto ingresado por el usuario.
// - **Validar la entrada:** Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un `alert` con un mensaje de error: _"Por favor, inserte un nombre."_
// - **Actualizar el array de amigos:** Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método`.push()`.
// - **Limpiar el campo de entrada:** Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.


function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(nombre);
        document.getElementById('amigo').value = '';
        mostrarAmigos();
    }
}

  

// Crea una función que recorra el array `amigos` y agregue cada nombre como un elemento `<li>` dentro de una lista HTML. Usa `innerHTML` para limpiar la lista antes de agregar nuevos elementos.

// **Tareas específicas:**

// 1. **Obtener el elemento de la lista:** Utilizar `document.getElementById()` o `document.querySelector()` para seleccionar la lista donde se mostrarán los amigos.
// 2. **Limpiar la lista existente:** Establecer `lista.innerHTML = ""` para asegurarse de que no haya duplicados al actualizar.
// 3. **Iterar sobre el arreglo**: Usa un bucle `for` para recorrer el arreglo `amigos` y crear elementos de lista (`<li>`) para cada título.
// 4. **Agregar elementos a la lista:** Para cada amigo, crear un nuevo elemento de lista.

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

// Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array `amigos`. Usa `Math.random()` y `Math.floor()` para obtener un índice aleatorio.

// **Tareas específicas:**

// 1. **Validar que haya amigos disponibles:** Antes de sortear, comprobar si el array `amigos` no está vacío.
// 2. **Generar un índice aleatorio:** Usar `Math.random()` y `Math.floor()` para seleccionar un índice aleatorio del arreglo.
// 3. **Obtener el nombre sorteado:** Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
// 4. **Mostrar el resultado:** Actualizar el contenido del elemento de resultado utilizando `document.getElementById()`  e `innerHTML` para mostrar el amigo sorteado.

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
    } else {
        let indice = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indice];
        document.getElementById('resultado').innerHTML = amigoSorteado;
    }
}