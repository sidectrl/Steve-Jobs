<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Esercizio PHP con HTML</title>
</head>

<body>
    <h1> ESERCIZIO 1 con HTML </h1>
    <form method="GET" action="esercizio2.php">
        <label> Inserisci i valori dell'array </label>
        <input type="text" name="valori_array">
        <label><br>Cosa vuoi fare?</label>
        <select name="operazione">
            <option value="somma">Somma</option>
            <option value="media">Media</option>
            <option value="massimo">Massimo</option>
            <option value="minimo">Minimo</option>
            <option value="pari">Pari</option>
            <option value="dispari">Dispari</option>
            <option value="trova">Trova</option>
            <option value="remove">Rimuovi</option>
            <option value="crescente">è crescente l'array?</option>
        </select>
        <label><br>Vuoi trovare/rimuovere un valore? <br>Inserisci il valore</label>
        <input type="text" name="remove">
        <br>
        <input type="submit" name="pulsante"><br>

        <?php
        if (isset($_GET['valori_array'])) {
            $temp = $_GET['valori_array'];
            $array = explode(',', $temp);
            if (isset($_GET['pulsante'])) {
                switch ($_GET['operazione']) {
                    case "somma":
                        echo somma($array);
                        break;

                    case "media":
                        echo media($array);
                        break;

                    case "massimo":
                        echo massimo($array);
                        break;

                    case "minimo":
                        echo minimo($array);
                        break;

                    case "pari":
                        echo pari($array);
                        break;

                    case "dispari":
                        echo dispari($array);
                        break;

                    case "trova":
                        echo trova($array);
                        break;

                    case "remove":
                        echo remove($array);
                        break;

                    case "crescente":
                        echo crescente($array);
                        break;
                }
            }
        }
        ?>
    </form>
</body>

</html>

<?php
function stamp($array)
{
    foreach ($array as $stampa) {
        echo "  " . $stampa;
    }
}

function somma($array)
{
    $risultato = 0;
    foreach ($array as $value) {
        $risultato +=$value;
    }
    return $risultato;
}

function media($array)
{
    $media = 0;
    $risultato = 0;
    $n_elementi = count($array);
    foreach ($array as $somma) {
        $risultato += $somma;
    }
    $media = $risultato / $n_elementi;

    return $media;
}

function massimo($array)
{
    $max = 0;
    foreach ($array as $value) {
        if ($value > $max) {
            $max = $value;
        }
    }
    return $max;
}

function minimo($array)
{
    $min = $array[1];
    foreach ($array as $value) {
        if ($value < $min) {
            $min = $value;
        }
    }
    return $min;
}

function pari($array)
{
    $contatore = 0;
    foreach ($array as $pari) {
        if ($pari % 2 == 0) {
            $contatore++;
        }
    }
    return $contatore;
}

function dispari($array)
{
    $contatore = 0;
    foreach ($array as $dispari) {
        if ($dispari % 2 == 1) {
            $contatore++;
        }
    }
    return $contatore;
}

function trova($array)
{
    $posizione = array();
    $j = 0;
    foreach ($array as $key => $value) {
        $i = 0;
        if (($value) == 5) {
            $posizione[$j] = $key;
            $j++;
        }
    }
    return $posizione;
}

function remove($array)
{
    $x = sizeof($array);
    for ($i = 0; $i < $x; $i++) {
        if ($array[$i] == 5) {
            unset($array[$i]);
        }
    }
    return $array;
}

function crescente($array)
{
    $memo = $array[0];
    $crescente = "";
    foreach ($array as $value) {
        if ($value > $memo) {
            $memo = $value;
            $crescente = "SI";
        } elseif ($value < $memo) {
            $crescente = "NO";
            break;
        }
    }
    return $crescente;
}
?>