window.onload = ()=>{
    obtenerLibros();
}
async function obtenerLibros(){
    let url = "http://localhost/crud_biblioteca/backend/controlador/libro.php?fun=obtener";
    let consulta = await fetch(url);
    let datos = await consulta.json();
    console.log(datos)
    mostrarLibro(datos);
}


function mostrarLibro(libros){
    let tbodyElement = document.querySelector("#tBodyLibros");
    for (let i=0; i < libros.length; i++){
        tbodyElement.innerHTML+= `
        <tr>
            <td>${libros[i].id}</td>
            <td>${libros[i].nombre}</td>
            <td>${libros[i].fecha}</td>
            <td>${libros[i].precio}</td>
        </tr>
        `;
    }
}