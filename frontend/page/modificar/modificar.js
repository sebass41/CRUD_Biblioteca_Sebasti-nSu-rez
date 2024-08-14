window.onload = ()=>{
    obtenerLibros();
    modificar();
}

async function obtenerLibros(){
    let url = "http://localhost/crud_biblioteca/backend/controlador/libro.php?fun=obtener";
    let consulta = await fetch(url);
    let datos = await consulta.json();
    console.log(datos)
    mostrarLibro(datos);
}

function mostrarLibro(libros){
    let tbodyElement = document.querySelector("#tBodyModificar");
    for (let i=0; i < libros.length; i++){
        tbodyElement.innerHTML = "";
        tbodyElement.innerHTML+= `
        <tr>
            <td>${libros[i].id}</td>
            <td>${libros[i].nombre}</td>
            <td>${libros[i].fecha}</td>
            <td>${libros[i].precio}</td>
            <td><button onclick="cargarDatos('${libros[i].id}', '${libros[i].nombre}', '${libros[i].fecha}', '${libros[i].precio}')">Seleccionar</button></td>
        </tr>        
        `;
    }
}

function cargarDatos(id, nombre, fecha, precio){ 

    let idInput = document.querySelector("#id");
    idInput.value = id;

    let nombreInput = document.querySelector("#nombre");
    nombreInput.value = nombre;
    
    let fechaInput = document.querySelector("#fecha");
    fechaInput.value = fecha;

    let precioInput = document.querySelector("#precio");
    precioInput.value = precio;
}

async function modificar(){
    let formElement = document.querySelector("#formModificar")
    
    formElement.onsubmit = async (e) =>{
        e.preventDefault()
        let formData =  new FormData(formElement);
        let url = "http://localhost/crud_biblioteca/backend/controlador/libro.php?fun=modificar"

        let config = {
            method: 'POST',
            body: formData
        }
        
        let respuesta = await fetch(url, config);
        let datos = await respuesta.json();
        console.log(datos);
        
}
}
