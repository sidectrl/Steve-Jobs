<form method="GET" action="index.php">
    <link rel="stylesheet" type="text/css" href="style.css">
    <div>
        <label for="input">Inserire i valori del vettore: </label>
        <input type="text" name="vettore" />
        
    </div>
    <div>
        <label for="input">Operazione da eseguire: </label>
        <select name="operazione" id="">
            <option value="Somma">Somma</option>
            <option value="Max_Value">Valore massimo</option>
            <option value="Min_Value">Valore minimo</option>
            <option value="Med_Value">Valore medio</option>
            <option value="Pari_dispari">Pari/Disparità numeri</option>
            <option value="Search">Trova un valore</option>
            <option value="Remove">Rimuovi un valore</option>
            <option value="CheckCrescente">Controlla la crescenza</option>
        </select>
    </div>
    <div>
        <label for="input">Inserire il valore da cercare o rimuovere: </label>
        <input type="text" name="search_or_remove">
    </div>
    <input type="submit" value="Esegui"/><br>
    <?php
    #region Main
    if (isset($_GET["vettore"])) {
        $dummy = $_GET["vettore"];
        $array = explode(', ', $dummy);
        ShowVector($array);
    }
    if ((isset($_GET["operazione"])) and (isset($_GET["vettore"]))) {
        switch ($_GET['operazione']) {
            case "Somma":
                $sum = Sum($array);
                echo "La somma di tutti i componenti del vettore è: " . $sum;
                break;
            case "Max_Value":
                $max = Max_Value($array);
                echo "Il valore massimo presente nel vettore è: " . $max;
                break;
            case "Min_Value":
                $min = Min_Value($array);
                echo "Il valore minimo presente nel vettore è: " . $min;
                break;
            case "Med_Value":
                $media = Media_value($array);
                echo "La media di tutti i valori è:" . $media;
                break;
            case "Pari_dispari":
                $pari_dispari = Pari_Dispari($array);
                echo "I numeri pari sono: " . $pari_dispari[0] . ", i numeri dispari sono: " . $pari_dispari[1];
                break;
            case "Search":
                if (isset($_GET["search_or_remove"])) {
                    Trova($array);
                } else
                    echo "Valore da cercare non inserito correttamente";
                break;
            case "Remove":
                if (isset($_GET["search_or_remove"])) {
                    $array = Remove($array);
                    ShowVector($array);
                } else
                    echo "Valore da rimuovere non inserito correttamente";
                break;
            case "CheckCrescente":
                if (CheckCrescente($array))
                    echo "L'array è crescente.";
                else
                    echo "L'array non è crescente.";
                break;

            default:
                break;
        }
    }
    #endregion
    #region Function
    function Sum($vettore)
    {
        $sum = 0;
        foreach ($vettore as $value) {
            $sum = $sum + $value;
        }
        return $sum;
    }
    function Max_Value($vettore)
    {
        $max = 0;
        for ($i = 0; $i < sizeof($vettore); $i++)
            if (isset($vettore[$i])) {
                $max = $vettore[$i];
                break;
            }
        foreach ($vettore as $value) {
            if ($max < $value)
                $max = $value;
        }
        return $max;
    }
    function Min_Value($vettore)
    {
        $min = $vettore[0];
        for ($i = 0; $i < sizeof($vettore); $i++)
            if (isset($vettore[$i])) {
                $max = $vettore[$i];
                break;
            }
        foreach ($vettore as $value) {
            if ($min > $value)
                $min = $value;
        }
        return $min;
    }
    function Media_value($vettore)
    {
        $media = 0;
        foreach ($vettore as $value) {
            $media += $value;
        }
        $media = $media / count($vettore);
        return round($media, 2);
    }
    function Pari_Dispari($vettore)
    {
        $count_pari = 0;
        $count_dispari = 0;
        foreach ($vettore as $value) {
            if ($value % 2 == 0)
                $count_pari++;
            else
                $count_dispari++;
        }
        return array($count_pari, $count_dispari);
    }
    function Trova($vettore)
    {
        $arr_pos = 0;
        $value = $_GET["search_or_remove"];
        echo "Il valore si trova nelle celle: ";
        for ($i = 0; $i < sizeof($vettore); $i++) {
            if ($vettore[$i] == $value) {
                $position[$arr_pos] = $i;
                echo  $position[$arr_pos] . " ";
                $arr_pos++;
            }
        }
    }
    function ShowVector($arrayFunc)
    {
        for ($i = 0; $i < sizeof($arrayFunc); $i++) {
            echo "array[" . $i . "]= " . $arrayFunc[$i] . "<br>";
        }
    }

    function CheckCrescente($vettore)
    {
        $dummy = 0;
        for ($i = 0; $i < sizeof($vettore); $i++)
            if (isset($vettore[$i])) {
                $dummy = $vettore[$i];
                break;
            }
        foreach ($vettore as $value)
            if ($dummy <= $value)
                $dummy = $value;
            else
                return false;

        return true;
    }
    function Remove($vettore)
    {
        $array_leght = sizeof($vettore);
        $value = $_GET["search_or_remove"];
        for ($i = 0; $i < $array_leght; $i++) {
            if ($vettore[$i] == $value) {
                unset($vettore[$i]);
            }
        }
        $count2 = 0;
        for ($i = 0; $i < $array_leght; $i++) {
            if (is_null($vettore[$count2])) {
                $count2++;
                $vettore2[$i] = $vettore[$count2];
            } else
                $vettore2[$i] = $vettore[$count2];
            $count2++;
        }
        return $vettore2;
    }
    #endregion
    ?>
</form>