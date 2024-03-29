let datosGuardados = []; 

function enviarDatos(event) {
    event.preventDefault(); // Evitar la recarga de la página al enviar el formulario
  let nombre = document.getElementById("nombre").value;
  let mensaje = document.getElementById("mensaje").value;

  guardarDatos(nombre, mensaje);
}

function guardarDatos(nombre, mensaje) {
  // Crear un objeto para almacenar los datos
  let datos = {
    nombre: nombre,
    mensaje: mensaje
  };

  // Agregar los datos al array datosGuardados
  datosGuardados.push(datos);

  console.log("Datos guardados:", datosGuardados);
  console.log("Datos:", datos);
}

function traerDatos() {
  let datosMostrados = document.getElementById("datosMostrados");
console.log(datosGuardados)

  // Recorrer el array datosGuardados y mostrar cada conjunto de datos
  datosGuardados.forEach((item, index) => {
    let div = document.createElement("div");
    div.classList.add("datos-item"); // Agregar clase para estilos
    div.innerHTML = `<p>Nombre: ${item.nombre}</p><p>Mensaje: ${item.mensaje}</p>`;
    datosMostrados.appendChild(div);
  });
}
