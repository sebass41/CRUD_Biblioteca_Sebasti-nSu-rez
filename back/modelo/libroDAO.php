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

    function ingresar($nombre, $fecha, $precio){
        $connection = conection();
        $sql = "INSERT INTO libro VALUES(0, '$nombre', '$fecha', '$precio')";
        $respuesta = $connection->query($sql);
        return $respuesta;
    }

    function eliminar ($id){
        $connection = conection();
        $sql = "DELETE FROM libro WHERE id = $id";
        $respuesta = $connection->query($sql);
        return $respuesta;
    }

    function modificar ($id, $nombre, $fecha, $precio){
        $connection = conection();
        $sql = "UPDATE libro SET nombre = $nombre, fecha = $fecha, precio = $precio WHERE id = $id;";
        $respuesta = $connection->query($sql);
        return $respuesta;
    }

}


?>