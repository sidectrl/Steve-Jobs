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

$result = getProducts($mysql_connector);

echo "<table>";
echo "<tr>";
echo "<td>Code</td>";
echo "<td>Name</td>";
echo "<td>Brand</td>";
echo "<td>Price</td>";
echo "<td>Description</td>";
echo "<td>Operation system</td>";
echo "<td>Resolution</td>";
echo "<tr>";
while ($row = $result->fetch_assoc()) {

    echo "<tr>";
    echo "<td><a href=detail.php?filter=". $row['code'] .">" . $row['code'] . "<a/></td>";
    echo "<td>" . $row['name'] . "</td>";
    echo "<td>" . $row['brand'] . "</td>";
    echo "<td>" . $row['price'] . "</td>";
    echo "<td>" . $row['description'] . "</td>";
    echo "<td>" . $row['so'] . "</td>";
    echo "<td>" . $row['resolution'] . "</td>";
    echo "<tr>";
}

echo "</table>";
$mysql_connector->close();
