<?php
require "connectionToDB.php";

$host = "localhost";
$db_user = "root";
$db_psw = "root";
$db_name = "Corso18";

$mysql_connector = connectionToDb($host, $db_user, $db_psw, $db_name);

if ($mysql_connector->connect_error) {
    echo "Errore: " . $mysql_connector->connect_errno . " - " . $mysql_connector->connect_error;

} else {
    echo 'Connesso. ' . $mysql_connector->host_info . "\n";
}

useDatabase($mysql_connector);

$result = getUsers($mysql_connector);

echo "<table>";
echo "<tr>";
echo "<td>Matricola</td>";
echo "<td>Username</td>";
echo "<td>Password</td>";
echo "<tr>";
while ($row = $result->fetch_assoc()) {

    echo "<tr>";
    echo "<td>" . $row['matricola'] . "</td>";
    echo "<td>" . $row['user'] . "</td>";
    echo "<td>" . $row['password'] . "</td>";
    echo "<tr>";

}

echo "<table>";
$mysql_connector->close();
/*
$user_da_verificare = "pippo.grasso";
$pass_da_verificare = md5('Ciaociao');

$query_sql = "SELECT * FROM utenti WHERE user = '$user_da_verificare' AND password = '$pass_da_verificare'";

echo "<br>Query: $query_sql ";

$result = $mysql_connector->query($query_sql);
if ($result->num_rows) {
echo "<br>Accesso consentito: " . $result->num_rows;
} else {
echo "<br>Accesso rifiutato: " . $result->num_rows;
}

//createTableUser($mysql_connector);

$user['matricola'] = 123456;
$user['user'] = "pippo.grasso";
$user['password'] = md5("Ciaociao");
$user['nome'] = "Pippo";
$user['cognome'] = "Grasso";
$user['indirizzo'] = "Viale Vinceno Giuffrida 31";
$user['nascita'] = "2021-04-04";

insertUser($user, $mysql_connector);
echo "<br>Ultimo ID inserito: " . $mysql_connector->insert_id . "<br />";
 */
