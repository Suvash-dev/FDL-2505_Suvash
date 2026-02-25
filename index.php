<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

<link rel="stylesheet" href="style.css">
</head>
<body>


<div class="container">

<!-- even / odd number check------------------------------------------------ -->

        <form action="./multiNumber.php" method= "POST">

            <!-- <input type="text" name="getNumber"> <br> -->
            

            <input type="text" name="getTable"> 
            <button>click Odd/Even?</button>

        </form>

        <br>  <br>

<!-- Generating multiplication table  ------------------------------------------------ -->


        <form action="./multiPlicationTable.php" method= "POST">

            <input type="text" name="multiPlicationTable"> 
            <button>click to get Multiplication</button>

        </form>
            <br>  <br>
<!-- Generating multiplication table  ------------------------------------------------ -->

        <form action="./multiTable.php" method= "POST">

            <input type="text" name="multiTable"> 
            <button>click to get MultiTable</button>

        </form>

              <br>  <br>
        <!-- Youtube Thumbnail -->

        <form action="./thumb_genearte.php" method= "POST">

            <input type="text" name="youtube_url"> 
            <button>Generate Thumbnail</button>

        </form>



</div>

<!-- http://localhost/php%20claas-3%20assingnment/ -->
 <!-- youtube thumbnail api stackoverflow -->
 <!-- youtube thumbnail generator -->


</body>
</html>