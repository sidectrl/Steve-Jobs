<?php

function connectionToDb($host, $db_user, $db_psw, $db_name)
{
    $mysqli = new mysqli($host, $db_user, $db_psw, $db_name);
    if ($mysqli->connect_error) {
        echo "Errore: " . $mysqli->connect_errno . " - " . $mysqli->connect_error;

    } else {
        // echo 'Connesso. ' . $mysqli->host_info . "\n";
    }
    return $mysqli;
}

function useDatabase($mysqli)
{
    if (!$mysqli->query("USE Corso18")) {
        return false;
    } else {
        return true;
    }

}

function insertUser($user, $mysqli)
{
    $sql = "INSERT INTO `products` ( `name`, `code`, `brand`, `price`, `description`, `so`, `resolution`)
    VALUES ( " . $user['matricola'] . ",'" . $user['user'] . "', '" . $user['password'] . "', '" . $user['nome'] . "', '" . $user['cognome'] . "', '" . $user['indirizzo'] . "', '" . $user['nascita'] . "')";

    echo "<br>SQL: " . $sql;

    if (!$mysqli->query($sql)) {
        echo "errore: " . $mysqli->error;
    } else {
        return true;
    }

}

function getUsers($mysqli)
{
    $query_sql = "SELECT * FROM utenti ";
    $result = $mysqli->query($query_sql);
    return $result;
}

