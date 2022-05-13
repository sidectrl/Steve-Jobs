<?php
session_start();
$_SESSION['name'] = 'pippo';
echo $_SESSION['name'];
?>