<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<?php

echo "<pre>";


// $first_num = [
//     "name" => "SuvashC",
//     "age" => 40,
//     "qualifiation" => "M.sc"
// ];
 
//    //echo  "My first number is :" .$fiert_num[0];
//   // echo  "My 2nd number is :" .$fiert_num[1] ; 

// var_dump ($first_num);


//echo "<h1>Hellow there</h1>";


//print_r( $_REQUEST['getNumber'] ); 
$get_number= ( $_REQUEST['getTable']);


echo "input number is :" . $get_number ."  " ."&";



if ($get_number%2 == 0){
    echo " $get_number is an even number \n";
} else{
    echo " $get_number is an odd number \n";
}







  
echo "</pre>";




?>

</body>
</html>