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
    case "modificar":
        modificar();
    break;
    case "ordenar":
        mostrarOrdenado();
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

function modificar(){
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $fecha = $_POST['fecha'];
    $precio = $_POST['precio'];
    $resultado = (new libro())->modificar($id, $nombre, $fecha, $precio);
    echo json_encode($resultado);
}

function mostrarOrdenado(){
    $opcion = $_POST['opcion'];
    $resultado = (new libro())->ordenObtener($opcion);
    echo json_encode($resultado);
}
?>