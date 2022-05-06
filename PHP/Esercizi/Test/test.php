
<?php
if (isset($_GET['numero_persone'])) {
    $numero_persone = $_GET['numero_persone'];
} else {
    $numero_persone = 5;
}
?>
<form method="POST" action="test.php">
<?php
for ($i = 0; $i < $numero_persone; $i++) {
    ?>
<input name="person[<?=$i?>][first_name]" value="john" />
<input name="person[<?=$i?>][last_name]" value="smith" />
<br>
<?php
}
?>
 <input type="submit" value="Cerca" />
</form>

<a href='test.php?numero_persone=<?=$numero_persone + 1?>'>aggiungi</a>

<?php

print_r($_POST);
echo "<br>";
foreach ($_POST['person'] as $person) {
    echo "<br>" . $person['first_name'] . " " . $person['last_name'];
}
