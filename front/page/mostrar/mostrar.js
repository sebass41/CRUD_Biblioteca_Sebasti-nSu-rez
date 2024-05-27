window.onload = ()=>{
    obtenerUsuarios();
}
async function obtenerUsuarios(){
    let url = "http://localhost/crud_biblioteca/back/controlador/libro.php?fun=obtener";
    let consulta = await fetch(url);
    let datos = await consulta.json();
    console.log(datos)
    mostrarUsuarios(datos);
}


function mostrarUsuarios(libros){
    let tbodyElement = document.querySelector("#tBodyLibros");
    for (let i=0; i < usuarios.length; i++){
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