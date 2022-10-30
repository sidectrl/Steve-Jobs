<form action="edit.php" method="POST">
    <div class="insert">
        <h1>Insert page</h1>
        <div>
            <label for="nome">name:</label><br>
            <input type="text" name="name" id="name" required placeholder="Insert product's name" required>
        </div>
        <div>
            <label for="cod">Code:</label><br>
            <input type="text" name="code" id="code" required placeholder="Insert code" required>
        </div>
        <div>
            <label for="Brand">Brand:</label><br>
            <input type="text" name="brand" id="brand" required placeholder="Insert brand" required>
        </div>
        <div>
            <label for="price">Price:</label><br>
            <input type="text" name="price" id="price" placeholder="Insert price" required>
        </div>
        <div>
            <label for="Description">Description:</label><br>
            <textarea id="description" name="description" rows="4" cols="20" placeholder="Insert descritpion"></textarea>
        </div>
        <div>
            <label for="Operation sistem">Operation sistem:</label><br>
            <input type="text" name="so" id="so" placeholder="Insert so" required>
        </div>
        <div>
            <label for="resolution">Resolution:</label><br>
            <input type="text" name="resolution" id="resolution" placeholder="Insert resolution" required>
        </div>
        <div>
            <input type="submit" name="invio">
        </div>
    </div>
</form>
<?php
require "connectionToDB.php";
$host = "localhost";
$db_user = "root";
$db_psw = "";
$db_name = "esamephp2022";

if (
    isset($_POST["name"]) &&
    isset($_POST["code"]) &&
    isset($_POST["brand"]) &&
    isset($_POST["price"]) &&
    isset($_POST["description"]) &&
    isset($_POST["so"]) &&
    isset($_POST["resolution"])
) {
    $mysqli = connectionToDb($host, $db_user, $db_psw, $db_name);
    
}

?>