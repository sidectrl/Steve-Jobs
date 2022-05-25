<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8">
    <title>Login</title>
</head>

<body>
    <form method="POST" action="login.php" <?php //if($_SESSION['user_logged']){ echo 'action="login.php"';} else  echo 'action=\"profile.php\"'
                                            ?>>
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
        session_start();
        $users = $_SESSION;
        if (isset($_POST['email']) && isset($_POST['pwd'])) {
            foreach ($_SESSION as $user) {
                if ($user['email'] == $_POST['email'] && $user['password'] == $_POST['pwd']) {
                    $_SESSION[$user['user_logged']] = "true";
                    header("Location: profile.php");
                } else
                    echo "<script type='text/javascript'>alert('Inserire i dati correttamentex');</script>";
            }
        }
        print_r($_SESSION);
        ?>
    </form>
</body>

</html>