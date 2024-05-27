window.onload=()=> {
    insertar();
}

async function insertar(){
    let formElement = document.querySelector("#agregar")
    
    formElement.onsubmit = async (e) =>{
        e.preventDefault()
        let formData =  new FormData(formElement);
        let url = "http://localhost/crudusuarios-sebass41/Repositorios/back/controlador/usuario_controlador.php?fun=crear"

        let config = {
            method: 'POST',
            body: formData
        }
        
        let respuesta = await fetch(url, config);
        let datos = await respuesta.json();
        console.log(datos);
        
}
}