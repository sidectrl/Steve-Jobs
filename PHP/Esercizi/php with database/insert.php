<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8">
    <title>Registrazione</title>
</head>

<body>
    <div class="registration_container">
        <h1>Registration page</h1>
        <form method="POST" action="insert.php">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Samsung Galaxy S2022" required>

            <label for="code">Codice:</label>
            <input type="text" id="code" name="code" placeholder="20202020202" required>

            <label for="brand">Marca:</label>
            <input type="text" name="brand" id="brand" placeholder="Samsung" required>

            <label for="cost">Prezzo:</label>
            <input type="text" name="cost" id="cost" required placeholder="999.000" required>

            <label for="desc">Descrizione:</label>
            <textarea name="desc" id="desc" cols="30" rows="10" required></textarea>

            <label for="OS">Sistema operativo:</label>
            <input type="text" name="OS" id="OS" placeholder="Android">

            <label for="resolution">Risoluzione:</label>
            <input type="resolution" name="resolution" id="resolution" placeholder="1920x1080" required>

            <input type="submit" name="invio">
        </form>
    </div>
</body>

</html>

<?php
$host = "localhost";
$db_user = "root";
$db_psw = "";
$db_name = "esamephp2022";

$mysqli = new mysqli($host, $db_user, $db_psw, $db_name);
if ($mysqli->connect_error) {
    echo "Errore: " . $mysqli->connect_errno . " - " . $mysqli->connect_error;

} else {
     echo 'Connesso. ' . $mysqli->host_info . "\n";
}

    $sql = "INSERT INTO `products` (name , code, brand, price, description, SO, resolution)
    VALUES (
        '".$_POST["name"]."','"
        . $_POST["code"] ."','"
        .$_POST["brand"]."','"
        .$_POST["cost"]."','"
        .$_POST["desc"]."','"
        .$_POST["OS"]."','"
        .$_POST["resolution"]."')";

    echo "<br>SQL: " . $sql;

    if (!$mysqli->query($sql)) {
        echo "errore: " . $mysqli->error;
    } else {
        return true;
    }


if ($mysqli->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $mysqli->error;
}

$mysqli->close();
?>