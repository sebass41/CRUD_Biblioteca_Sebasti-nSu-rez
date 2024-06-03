window.onload = ()=>{
    obtenerLibros();
    eventoFiltroTabla();
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
    tbodyElement.innerHTML = "";
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

function eventoFiltroTabla(){
    let opcion = document.querySelector("#opcionFiltro");
    console.log(opcion)
    opcion.onchange = ()=>{
        let seleccion =opcion.options[opcion.selectedIndex].value;
        console.log(seleccion);
        filtrar(seleccion);
    }
}

async function filtrar(opcion){
    let formdata = new FormData();
    formdata.append('opcion', opcion)
    let config = {
        method: 'POST',
        body: formdata
    }
    if (opcion != 'default'){
        let url = "http://localhost/crud_biblioteca/backend/controlador/libro.php?fun=ordenado";
        let consulta = await fetch(url, config);
        let datos = await consulta.json();
        console.log(datos)
        mostrarLibro(datos);
    }else if (opcion == 'default'){
        let url = "http://localhost/crud_biblioteca/backend/controlador/libro.php?fun=obtener";
        let consulta = await fetch(url);
        let datos = await consulta.json();
        console.log(datos)
        mostrarLibro(datos);
    }
}