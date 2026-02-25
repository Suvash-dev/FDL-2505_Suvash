<?php 


$videoUrl = $_REQUEST['youtube_url'];

$sepertaed_url = explode('v=',$videoUrl);

// echo $videoUrl;

$id = end($sepertaed_url);

$api = "https://img.youtube.com/vi/$id/maxresdefault.jpg";

//print_r ($id);

//echo "<image src='$api'>";
//echo "<img src='$api'>";

echo "<a href= '$api' download> <img src='$api'></a>"

?>

<!-- anchor download attribute -->
 <!-- <a href="/images/myw3schoolsimage.jpg" download> -->