<?php
$array = array(5, 10, 25, 32, 100, 7, 8, 48, 25, 100, 5, 99, 69, 84, 5);
$array2;
$value = 5;
echo "I valori del vettore sono: ";
Stampa($array);
echo "Il valore massimo è: " . Max_Value($array) . ",<br>";
echo "Il valore minimo è: " . Min_Value($array) . ",<br>";
echo "Il valore medio è: " . Media_value($array) . ",<br>";
$dummy = Pari_Dispari($array);
echo "I numeri pari sono: " . $dummy[0] . " i numeri dispari sono: " . $dummy[1] . ".<br>";
$array2 = Trova($array, $value);
echo "Il valore " . $value . " si trova nelle celle: ";
Stampa($array2);
$array = Rimuovi($array, $value);
echo "Valori del vettore modificato: ";
Stampa($array);
StampaCresc(CheckCrescente($array));
function Stampa($vettore)
{
    foreach ($vettore as $item) {
        echo $item . " ";
    }
    echo ".<br>";
}
function StampaCresc($value)
{
    if ($value)
        echo "L'array è crescente.";
    else
        echo "L'array è decrescente.";
}
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
    foreach ($vettore as $value) {
        if ($max < $value)
            $max = $value;
    }
    return $max;
}
function Min_Value($vettore)
{
    $min = $vettore[1];
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
function Trova($vettore, $value)
{
    $arr_pos = 0;
    for ($i = 0; $i < sizeof($vettore); $i++) {
        if ($vettore[$i] == $value) {
            $position[$arr_pos] = $i;
            $arr_pos++;
        }
    }
    return $position;
}
function Rimuovi($vettore, $value)
{
    $array_leght = sizeof($vettore);
    for ($i = 0; $i < $array_leght; $i++) {
        if ($vettore[$i] == $value) {
            unset($vettore[$i]);
        }
    }
    return $vettore;
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
