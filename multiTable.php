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

$get_number= ( $_REQUEST['multiTable']);



echo " <strong> Generating tables from 1 to " . $get_number . "</strong><br><br>";

// Outer loop: Handles the tables (1, 2, 3... up to input)
for ($table = 1; $table <= $get_number; $table++) {
    
    echo "<strong>Multiplication Table for $table:</strong><br>";
    
    // Inner loop: Handles the multiplication (1 to 10)
    for ($i = 1; $i <= 10; $i++) {
        echo "$table * $i = " . ($table * $i) . "<br>";
    }
    
   
    echo "<br>---------------------------<br><br>";
}

echo "</pre>";
?>
    

    
</body>
</html>