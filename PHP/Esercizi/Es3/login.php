<?php
        session_start();
        $flag=false;
        if (isset($_POST['email']) && isset($_POST['pwd'])) {
            foreach ($_SESSION as $cf) {
                if ($cf['email'] == $_POST['email'] && $cf['password'] == $_POST['pwd']) {
                    $_SESSION['login'] = $cf['codice_fiscale'];
                    header("Location: profile.php");
                    exit();
                }
                else
                {
                    $flag = true;
                }      
            }
        }
        if($flag)
        {
            header("Location: login.html");
            exit();
        }
        ?>