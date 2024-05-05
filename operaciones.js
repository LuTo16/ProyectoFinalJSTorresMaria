console.log(signos);

//click boton 1
document.getElementById('boton1').addEventListener('click', function() {
    const fechaNacimiento = document.getElementById('fechaInput').value;
    const signo = encontrarSigno(fechaNacimiento);
    mostrarResultado(signo);
});

function encontrarSigno(fechaNacimiento) {
    const fechaIngresada = fechaNacimiento.split('-');
    const dia = parseInt(fechaIngresada[0]);
    const mes = parseInt(fechaIngresada[1]);

    for (const signo of signos) {
        const fechaInicio = parseInt(signo.fechaInicio.split('-')[0]);
        const fechaFin = parseInt(signo.fechaFin.split('-')[0]);

        if ((mes === parseInt(signo.fechaInicio.split('-')[1]) && dia >= fechaInicio) || (mes === parseInt(signo.fechaFin.split('-')[1]) && dia <= fechaFin)) {
            return signo;
        }
    }

    return null;
}

function mostrarResultado(signo) {
    const tablaBody = document.getElementById('tablabody');
    tablaBody.innerHTML = ''; // Limpiar el contenido previo

    if (signo) {
        const row = tablaBody.insertRow(); // Insertar una nueva fila en la tabla

        // Insertar celdas con los datos del signo
        const cell1 = row.insertCell();
        const cell2 = row.insertCell();
        const cell3 = row.insertCell();
        const cell4 = row.insertCell();
        const cell5 = row.insertCell();

        // Llenar las celdas con los datos del signo
        cell1.textContent = signo.nombre;
        cell2.textContent = signo.descripcion;
        cell3.textContent = signo.fechaInicio;
        cell4.textContent = signo.fechaFin;
        cell5.textContent = signo.elemento;
    } else {
        // Mostrar un mensaje si no se encontró ningún signo para la fecha ingresada
        const row = tablaBody.insertRow(); // Insertar una nueva fila en la tabla
        const cell = row.insertCell(); // Insertar una celda en la fila
        cell.colSpan = 5; // Establecer el colspan para ocupar todas las columnas
        cell.textContent = 'No se encontró ningún signo para la fecha ingresada.';
    }
} 

//swet alert
Swal.fire({
    title: "Bienvenido/a!",
    text: "A tu viaje de autodescubrimiento!✨"
});

//storage + inner
const cartaNatal = document.getElementById('cartanatal');

let botonesClickeados = localStorage.getItem('clicks');
botonesClickeados != null ? localStorage.setItem('clicks', parseInt(botonesClickeados)+1) : localStorage.setItem('clicks', 1);

// si clickearon mas de 3 veces, sale un innertext que dice "pedi tu carta natal para mas detalles"
parseInt(botonesClickeados)>=3 && (cartaNatal.innerText = "Pedí tu carta natal para más detalles!");


//transformar el array signos con JSON
localStorage.setItem('signosZodiaco',JSON.stringify(signos));   

let signosObjeto = JSON.parse(localStorage.getItem('signosZodiaco'));
console.log(signosObjeto);
