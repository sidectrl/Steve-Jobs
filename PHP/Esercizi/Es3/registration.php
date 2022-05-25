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
                header("Location: login.html");
            } else
            {
                print_r("<script type='text/javascript'>alert('Utente già esistente');</script>");
                sleep(2);
                header("location: registration.html");
            }
        }
        print_r($_SESSION);
