<?php

require_once "../conexion/conexion.php";

class libro{

    function obtener(){
        $connection = conection();
        $sql = "SELECT * FROM libro;";
        $respuesta = $connection->query($sql);
        $libros = $respuesta->fetch_all(MYSQLI_ASSOC);
        return $libros;
    }

    function ingresar($id, $nombre, $fecha, $precio){
        $connection = conection();
        $sql = "INSERT INTO libro VALUES($id, '$nombre', '$fecha', '$precio')";
        $respuesta = $connection->query($sql);
        return $respuesta;
    }

    function eliminar ($id){
        $connection = conection();
        $sql = "DELETE FROM libro WHERE id = $id";
        $respuesta = $connection->query($sql);
        return $respuesta;
    }
}


?>