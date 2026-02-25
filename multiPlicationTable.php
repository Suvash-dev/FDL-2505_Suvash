<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php

//echo "<pre>";

$get_number= ( $_REQUEST['multiPlicationTable']);


print_r( "input number is :" . $get_number  . "<br> <br>" );


for ( $i=1; $i <=10; $i++){
      echo " $get_number * $i = ". $get_number * $i . "<br>";
}



//echo "</pre>";
?>
    
</body>
</html>