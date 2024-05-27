window.onload=()=> {
    let formElement = document.querySelectorAll("#agregar")
    
    formElement.onsubmit = async (e) =>{
        e.preventDefault()
        let formData =  new FormData(formElement);
        let url = "http://localhost/crud_biblioteca/back/controlador/libro.php?fun=crear"

        let config = {
            method: 'POST',
            body: formData
        }
        
        let respuesta = await fetch(url, config);
        let datos = await respuesta.json();
        console.log(datos);
        
}
}