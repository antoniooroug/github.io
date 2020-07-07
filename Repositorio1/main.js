//let miTitulo = document.querySelector('h1');/* querySelector() para obtener una referencia al título y almacenarla en una variable llamada miTitulo*/
//miTitulo.innerHTML = 'Hello world!';/*se establecio el valor de la propiedad innerHTML de la variable miTitulo (que representa el contenido del título) como «Hello world!»*/

let miImage = document.querySelector('img');

miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'imagen-firefox.jpg') {
      miImage.setAttribute('src','firefox2.png');
    } else {
      miImage.setAttribute('src', 'imagen-firefox.jpg');
    }
}
/*Al hacer click:
El código recupera el valor del atributo src de la imagen.
El código usa una condicional para comprobar si el valor src es igual a la ruta de la imagen original:
  Si es así, el código cambia el valor de src a la ruta de la segunda imagen, forzando a que se cargue la otra imagen en el elemento <img>.
  Si no es así (significa que ya fue modificada), se cambiará el valor de src nuevamente a la ruta de la imagen original, regresando a como era en un principio*/

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');
//toma referencia al nuevo botón que se agregó y al título y los almacena en variables

function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Mozilla es genial, ' + miNombre;
  }
}
if (!localStorage.getItem('nombre')) {
  estableceNombreUsuario();
}
else {
  let nombreAlmacenado = localStorage.getItem('nombre');
  miTitulo.textContent = 'Mozilla es genial, ' + nombreAlmacenado;
}
miBoton.onclick = function() {
  estableceNombreUsuario();
}