window.onload=()=> {
    let formElement = document.querySelector("#agregar")
    
    formElement.onsubmit = async (e) =>{
        e.preventDefault()
        let formData =  new FormData(formElement);
        let url = "http://localhost/crud_biblioteca/backend/controlador/libro.php?fun=crear"

        let config = {
            method: 'POST',
            body: formData
        }
        
        let respuesta = await fetch(url, config);
        let datos = await respuesta.json();
        console.log(datos);
        
}
}