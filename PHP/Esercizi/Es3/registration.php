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
                );
                header("Location: login.html");
                exit();
            } else
            {
                print_r("<script type='text/javascript'>alert('Utente già esistente');</script>");
                header("location: registration.html");
                exit();
            }
        }
