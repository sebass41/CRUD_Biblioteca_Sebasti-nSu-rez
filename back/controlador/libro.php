<?php

require_once "../modelo/libroDAO.php";

$funcion = $_GET['fun'];

switch ($funcion){
    case "obtener":
        obtener();
    break;
    case "crear":
        ingresar();
    break;
    case "eliminar":
        eliminar();
    break;
}

function obtener(){
    $resultado = (new libro())->obtener();
    echo json_encode($resultado);
}

function ingresar(){
    $nombre = $_POST['nombre'];
    $fecha = $_POST['fecha'];
    $precio = $_POST['precio'];
    $resultado = (new libro())->ingresar($nombre, $fecha, $precio);
    echo json_encode($resultado);
}

function eliminar(){
    $id = $_POST['id'];
    $resultado = (new libro())->eliminar($id);
    echo json_encode($resultado);
}

?>