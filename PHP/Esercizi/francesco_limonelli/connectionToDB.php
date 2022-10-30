<?php

function connectionToDb($host, $db_user, $db_psw, $db_name)
{
    $mysqli = new mysqli($host, $db_user, $db_psw, $db_name);
    if ($mysqli->connect_error) {
        echo "Errore: " . $mysqli->connect_errno . " - " . $mysqli->connect_error;
    } else {
        echo 'Connesso. ' . $mysqli->host_info . "\n";
    }
    return $mysqli;
}

function useDatabase($mysqli)
{
    if (!$mysqli->query("USE esamephp2022")) {
        return false;
    } else {
        return true;
    }
}

function insertProduct($product, $mysqli)
{
    $verify_code = $product['code'];
    $verify_code = strtolower($verify_code);
    $sql = "SELECT * 
                        FROM products 
                        WHERE code = '$verify_code'";
    $result = mysqli_query($mysqli, $sql);
    if (!mysqli_num_rows($result)) {
        $sql = "INSERT INTO `products` (name , code, brand, price, description, so, resolution)
    VALUES ('"
            . $product["name"] . "','"
            . $product["code"] . "','"
            . $product["brand"] . "','"
            . $product["price"] . "','"
            . $product["description"] . "','"
            . $product["so"] . "','"
            . $product["resolution"] . "')";
        echo "<br>SQL: " . $sql;

        if ($mysqli->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $mysqli->error;
        }
    } else
        echo "Impossible to insert the product";
}

function getProducts($mysqli)
{
    $query_sql = "SELECT * FROM products ";
    $result = $mysqli->query($query_sql);
    return $result;
}

function getFilteredProduct($mysqli, $filter)
{
    $query_sql = "SELECT * FROM products WHERE code = '$filter'";
    $result = $mysqli->query($query_sql);
    return $result;
}

function removeProduct($mysqli, $filter)
{
    $query_sql = "DELETE FROM products WHERE code = '$filter'";
    $mysqli->query($query_sql);
}



