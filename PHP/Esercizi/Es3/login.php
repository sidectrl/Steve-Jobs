<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8">
    <title>Login</title>
</head>

<body>
    <form method="POST" action="login.php">
        <div class="registrazione">
            <h1>Login page</h1>
            <div>
                <label for="email">Email:</label><br>
                <input type="email" name="email" id="email" required placeholder="Inserisci email" required>
            </div>
            <div>
                <label for="Password">Password:</label><br>
                <input type="password" name="pwd" id="pwd" placeholder="Inserisci password" required>
            </div>
            <div>
                <input type="submit" name="invio">
            </div>
            <div>
                <p>Non sei registrato? <a href="registration.php">Registrati.</a></p>
            </div>

        </div>
        <?php

        ?>
    </form>
</body>

</html>