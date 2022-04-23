<?php 
$array = array (5, 10, 25, 32, 100, 7, 8);
echo "La somma è: ". Sum($array) . ".<br>";
echo "Il valore massimo è: " . Max_Value($array) .".<br>";
echo "Il valore minimo è: " . Min_Value($array) .".<br>";
echo "Il valore medio è: ". Media_value($array) .".<br>";
$dummy = Pari_Dispari($array);
echo "I numeri pari sono: " . $dummy[0] . " i numeri dispari sono: " . $dummy[1] . ".<br>";

function Sum($vettore)
{
    $sum = 0;
    foreach ($vettore as $value){
        $sum = $sum + $value; 
    }
    return $sum;
}
function Max_Value($vettore)
{
    $max = 0;
    foreach ($vettore as $value)
    {
        if ($max < $value)
            $max = $value;
    }
    return $max;
}
function Min_Value($vettore)
{
    $min = $vettore[1];
    foreach ($vettore as $value)
    {
        if ($min > $value)
            $min = $value;
    }
    return $min;
}
function Media_value($vettore)
{
    $media = 0;
    foreach ($vettore as $value){
        $media += $value; 
    }
    $media = $media/count($vettore);
    return round($media, 2);
}
function Pari_Dispari($vettore)
{
    $count_pari = 0;
    $count_dispari = 0;
    foreach ($vettore as $value)
    {
        if ($value % 2 == 0)    
            $count_pari++;
        else
            $count_dispari++;
    }
    return array ($count_pari, $count_dispari);
}
?>
