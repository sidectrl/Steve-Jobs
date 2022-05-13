<form action="index.php" method="post">
    <input type="text" name="test_valori" value="<?php if(isset($_POST['test_valori'])){echo $_COOKIE['value'];}?>">
    <input type="submit">
    <?php
    if (isset($_POST['test_valori'])) {
        setcookie("value", $_POST['test_valori'], strtotime("+1 year"));
        echo '<script type="text/javascript"> location.reload();</script>';
    }
    ?>
</form>