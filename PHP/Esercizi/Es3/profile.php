<!DOCTYPE html>
<html>

<head>

</head>

<body>
    <a href="login.php">Logout</a>
    <?php
    $users = $_SESSION;
    if (isset($_POST['email']) && isset($_POST['pwd'])) {
        foreach ($_SESSION as $user) {
            if ($_SESSION[$user['user_logged']] == "true") {
                
            } else
                echo "<script type='text/javascript'>alert('Inserire i dati correttamentex');</script>";
        }
    }
    ?>
</body>

</html>