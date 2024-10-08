<?php

require_once "../conexion/conexion.php";
require_once "respuesta/respuesta.php";

ini_set('display_errors', '0');
ini_set('display_startup_errors', '0');

ini_set('log_errors', 1);
ini_set('error_log', '../log/php_errors.log');

class libro{

    function obtener(){
        
        $connection = conection();
        $sql = "SELECT * FROM libro;";
        $respuesta = $connection->query($sql);
        $libros = $respuesta->fetch_all(MYSQLI_ASSOC);
        return $libros;
    }

    function ordenObtener($opcion){
        $connection = conection();
        if ($opcion == 'fecha'){
            $sql = "SELECT * FROM libro ORDER BY fecha ASC";
        } else if ($opcion == 'precio'){
            $sql = "SELECT * FROM libro ORDER BY precio ASC";
        }
        $respuesta = $connection->query($sql);
        $libros = $respuesta->fetch_all(MYSQLI_ASSOC);
        return $libros;
    }

    function ingresar($nombre, $fecha, $precio){
        $connection = conection();
        $sql = "INSERT INTO libro VALUES(0, '$nombre', '$fecha', '$precio')";
        $respuesta = $connection->query($sql);

        if ($respuesta){
            $msj = "Se Insertó correctamente";
            return new Respuesta(true, $msj, $respuesta);
        }else{
            $msj = "No se pudo insertar";
            return new Respuesta(false, $msj, $respuesta);
        }
    }

    function eliminar ($id){
        $connection = conection();
        $sql = "DELETE FROM libro WHERE id = $id";
        $respuesta = $connection->query($sql);
        return $respuesta;
    }

    function modificar ($id, $nombre, $fecha, $precio){
        $connection = conection();
        $sql = "UPDATE libro SET nombre = '$nombre' , fecha = '$fecha' , precio = $precio WHERE id = $id";
        $respuesta = $connection->query($sql);
        return $respuesta;
    }


}


?>