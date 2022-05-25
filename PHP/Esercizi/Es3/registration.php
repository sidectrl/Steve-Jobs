<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8">
    <title>Registrazione</title>
</head>

<body>
    <form method="POST" action="registration.php">
        <div class="registrazione">
            <h1>Registration page</h1>
            <div>
                <label for="text">Nome:</label><br>
                <input type="text" id="nome" name="nome" placeholder="Nome" required>
            </div>
            <div>
                <label for="cognome">Cognome:</label><br>
                <input type="text" id="cognome" name="cognome" placeholder="Cognome" required>
            </div>
            <div>
                <label for="cf">Codice Fiscale:</label><br>
                <input type="text" name="cod_fiscale" id="cod_fiscale" placeholder="Codice fiscale" required>
            </div>
            <div>
                <label for="email">Email:</label><br>
                <input type="email" name="email" id="email" required placeholder="Inserisci email" required>
            </div>
            <div>
                <label for="Password">Password:</label><br>
                <input type="password" name="pwd" id="pwd" placeholder="Inserisci password" required>
            </div>
            <div>
                <label for="telefono">Tel:</label><br>
                <input type="tel" name="tel" placeholder="Inserisci telefono" required>
            </div>
            <div>
                <label for="cell">Cell:</label><br>
                <input type="cell" name="cell" placeholder="Inserisci cellulare">
            </div>
            <div>
                <input type="checkbox" name="authdata" id="authdata" required>
                <label for="authdata">Autorizzazione trattamento dei dati personali</label>
            </div>
            <div>
                <input class="button" type="submit" name="invio">
            </div>
            <div>
                <p>Sei già registrato? <a href="login.php">Effettua il login.</a></p>
            </div>
        </div>
        <?php
        session_start();
        if (
            (isset($_POST['nome']) && isset($_POST['cognome']) && isset($_POST['cod_fiscale']) &&
                isset($_POST['email']) && isset($_POST['pwd']) && isset($_POST['tel']))
        ) {
            if (!isset($_SESSION[$_POST['cod_fiscale']])) {
                $_SESSION[$_POST['cod_fiscale']] =  array(
                    "Nome" => $_POST['nome'], "Cognome" => $_POST['cognome'], "codice_fiscale" => $_POST['cod_fiscale'],
                    "email" => $_POST['email'], "password" => $_POST['pwd'], "telefono" => $_POST['tel'], "cell" => $_POST['cell'],
                    "user_logged" => "false"
                );
                header("Location: login.php");
            } else
                echo "<script type='text/javascript'>alert('Utente già esistente');</script>";
        }
        print_r($_SESSION);
        ?>

    </form>
</body>

</html>