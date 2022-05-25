<!DOCTYPE html>
<html>

<head>

</head>

<body>
    <p>
        <?php
        session_start();
        foreach ($_SESSION as $user) {
            if ($user["user_logged"] == "true") {
                echo "Nome: " . $user['Nome'] . "<br>Cognome:" . $user['Cognome'] . "<br>Codice fiscale:" . $user['codice_fiscale'] .
                    "<br>Email:" . $user['email'] . "<br>Telefono: " . $user['telefono'] . "cell:" . $user['cell'];
            }
        }
        ?>
    </p>
</body>

</html>