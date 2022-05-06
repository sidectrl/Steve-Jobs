<form method="GET" action="index.php">
    <label for="input">Valori vettore</label>
    <input type="text" name="vettore" value="5, 6, 7, 8, 9, 10, 5, 20, 7, 8" />
    <input type="submit" value="Inserimento valori" />
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
    <input type="text" name="search_or_remove"><br>
    <?php
    if (isset($_GET["vettore"])) {
        $dummy = $_GET["vettore"];
        $array = explode(', ', $dummy);
        ShowVector($array);
    }
    if ((isset($_GET["operazione"]))) {
        switch ($_GET['operazione']) {
            case "Somma":
                $sum = 0;
                foreach ($array as $value) {
                    $sum = $sum + $value;
                }
                echo "La somma di tutti i componenti del vettore è: " . $sum;
                break;
            case "Max_Value":
                $max = 0;
                for ($i = 0; $i < sizeof($array); $i++)
                    if (isset($array[$i])) {
                        $max = $array[$i];
                        break;
                    }
                foreach ($array as $value) {
                    if ($max < $value)
                        $max = $value;
                }
                echo "Il valore massimo presente nel vettore è: " . $max;
                break;
            case "Min_Value":
                $min = $array[0];
                for ($i = 0; $i < sizeof($array); $i++)
                    if (isset($array[$i])) {
                        $max = $array[$i];
                        break;
                    }
                foreach ($array as $value) {
                    if ($min > $value)
                        $min = $value;
                }
                echo "Il valore minimo presente nel vettore è: " . $min;
                break;
            case "Med_Value":
                $media = 0;
                foreach ($array as $value) {
                    $media += $value;
                }
                $media = $media / count($array);
                echo "La media di tutti i valori è:" . round($media, 2);
                break;
            case "Pari_dispari":
                $count_pari = 0;
                $count_dispari = 0;
                foreach ($array as $value) {
                    if ($value % 2 == 0)
                        $count_pari++;
                    else
                        $count_dispari++;
                }
                echo "I numeri pari sono: " . $count_pari . ", i numeri dispari sono: " . $count_dispari;
                break;
            case "Search":
                if (isset($_GET["search_or_remove"])) {
                    $arr_pos = 0;
                    $value = $_GET["search_or_remove"];
                    echo "Il valore si trova nelle celle: ";
                    for ($i = 0; $i < sizeof($array); $i++) {
                        if ($array[$i] == $value) {
                            $position[$arr_pos] = $i;
                            echo  $position[$arr_pos] . " ";
                            $arr_pos++;
                        }
                    }
                } else
                    echo "Valore da cercare non inserito correttamente";
                break;
            case "Remove":
                if (isset($_GET["search_or_remove"])) {
                    $array_leght = sizeof($array);
                    for ($i = 0; $i < $array_leght; $i++) {
                        if ($array[$i] == $value) {
                            unset($array[$i]);
                        }
                    }
                    ShowVector($vettore);
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
    ?>
</form>