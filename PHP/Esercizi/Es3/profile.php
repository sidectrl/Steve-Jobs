<?php
session_start();
$login = "";
if(isset($_SESSION['login'])){
$login = $_SESSION['login'];
unset($_SESSION['login']);
}
?>
<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8">
    <title>Profile</title>
    <style>
        .container {
            border-style: outset;
            width: 400px;
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
        }

        .profile--container {
            width: 100%;
            min-height: 50px;
            display: flex;
            justify-content: space-evenly;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Profile page</h1>
        <div class="profile--container">
            <div class="column">
                <p><?php echo "Nome: " ?></p>
                <p><?php echo "Cognome: " ?></p>
                <p><?php echo "Email: " ?></p>
                <p><?php echo "Codice fiscale: " ?></p>
                <p><?php echo "Telefono: " ?></p>
                <p><?php echo "Cellulare: " ?></p>
            </div>
            <div class="column">
                <?php if ($login != "") { ?>
                    <p><?php echo $_SESSION[$login]['Nome']; ?></p>
                    <p><?php echo $_SESSION[$login]['Cognome']; ?></p>
                    <p><?php echo $_SESSION[$login]['email']; ?></p>
                    <p><?php echo $_SESSION[$login]['codice_fiscale']; ?></p>
                    <p><?php echo $_SESSION[$login]['telefono']; ?></p>
                    <p><?php if (isset($_SESSION['login']['cell'])) {
                            echo $_SESSION[$login]['cell'];
                        } else echo "null" ?></p> <?php } else
                                                    print_r("<script type='text/javascript'>alert('Nessun utente loggato');</script>"); ?>
            </div>
        </div>
        <a href="login.html"><button style="margin-bottom: 15px;">Logout</button></a>
    </div>

</body>

</html>