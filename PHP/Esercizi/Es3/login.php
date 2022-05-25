<?php
        session_start();
        $users = $_SESSION;
        if (isset($_POST['email']) && isset($_POST['pwd'])) {
            foreach ($users as $cf => $user) {
                if ($cf['email'] == $_POST['email'] && $cf['password'] == $_POST['pwd']) {
                    $_SESSION[$cf]["user_logged"] = "true";
                    header("Location: profile.php");
                } else
                {
                    echo "<script type='text/javascript'>alert('Inserire i dati correttamente');</script>";
                    header("Location: login.html");
                }
                    
            }
        }
        print_r($_SESSION);
        ?>