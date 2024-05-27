window.onload = ()=>{
    obtenerLibros();
}
async function obtenerLibros(){
    let url = "http://localhost/crud_biblioteca/back/controlador/libro.php?fun=obtener";
    let consulta = await fetch(url);
    let datos = await consulta.json();
    console.log(datos)
    mostrarLibro(datos);
}

async function eliminarLibro(id){
    let formData = new FormData();
    formData.append("id", id);
    let url = "http://localhost/crud_biblioteca/back/controlador/libro.php?fun=eliminar";

    let config = {
        method: 'POST',
        body: formData
    }

    let respuesta = await fetch(url, config);
    let datos = await respuesta.json();
    console.log(datos);
    location.reload();
    alert(ci);
}

function mostrarLibro(libros){
    let tbodyElement = document.querySelector("#tBodyEliminar");
    for (let i=0; i < libros.length; i++){
        tbodyElement.innerHTML+= `
        <tr>
            <td>${libros[i].id}</td>
            <td>${libros[i].nombre}</td>
            <td>${libros[i].fecha}</td>
            <td>${libros[i].precio}</td>
            <td><button onclick="eliminarLibro(${libros[i].id})">Eliminar</button></td>
        </tr>
            
            
        `;
    }
}