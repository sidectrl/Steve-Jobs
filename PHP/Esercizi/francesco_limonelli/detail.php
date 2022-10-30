<?php
require "connectionToDB.php";

$host = "localhost";
$db_user = "root";
$db_psw = "";
$db_name = "esamephp2022";

$mysql_connector = connectionToDb($host, $db_user, $db_psw, $db_name);

if ($mysql_connector->connect_error) {
    echo "Errore: " . $mysql_connector->connect_errno . " - " . $mysql_connector->connect_error;
} else {
    echo 'Connesso. ' . $mysql_connector->host_info . "\n";
}
useDatabase($mysql_connector);
$result = getFilteredProduct($mysql_connector, $_GET['filter']);
while ($row = $result->fetch_assoc()) {
    echo "<br>" . "Name: " . $row['name'];
    echo "<br>" . "Brand: " . $row['brand'];
    echo "<br>" . "Price: €" . $row['price'];
    echo "<br>" . "Description: " . $row['description'];
    echo "<br>" . "Operation system: " . $row['so'];
    echo "<br>" . "Resolution: " . $row['resolution'];
}
?>
<form action="detail.php?filter=<?php echo $_GET['filter'] ?>" method="POST">

    <input type="submit" value="delete" name="delete" id="delete">
    <?php
    echo "<button><a href=edit.php?filter=" . $_GET['filter'] . ">" . "Edit" . "<a/></button>";
    if (isset($_POST["delete"])) {
        removeProduct($mysql_connector, $_GET['filter']);
        header("location: products.php");
    }
    $mysql_connector->close();
    ?>
</form>