//  evento click del botón 2 
document.getElementById('boton2').addEventListener('click', async function() {
    const nombreSigno = document.getElementById('signoInput').value;
    try {
        const descripcion = await obtenerDescripcion(nombreSigno);
        mostrarResultado(descripcion);
    } catch (error) {
        console.error('Error al obtener la descripción:', error);
    }
});

//  función obtenerDescripcion para utilizar async-await y Fetch
async function obtenerDescripcion(nombreSigno) {
    try {
        const response = await fetch('signos.json'); // Cambia 'signos.json' al archivo que contiene los datos de los signos
        if (!response.ok) {
            throw new Error('No se pudo cargar los datos de los signos');
        }
        const signos = await response.json();
        const signoEncontrado = signos.find(signo => signo.nombre.toLowerCase() === nombreSigno.toLowerCase());
        return signoEncontrado ? signoEncontrado.descripcion : null;
    } catch (error) {
        console.error('Error al obtener la descripción del signo:', error);
    }
}


function mostrarResultado(descripcion) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; 

    if (descripcion) {
        const descripcionParrafo = document.createElement('p');
        descripcionParrafo.textContent = descripcion;
        resultadoDiv.appendChild(descripcionParrafo);
    } else {
        const mensaje = document.createElement('p');
        mensaje.textContent = 'No se encontró ninguna descripción para el signo ingresado.';
        resultadoDiv.appendChild(mensaje);
    }
}

