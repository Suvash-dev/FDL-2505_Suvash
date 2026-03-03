<?php

//Form data

$title = $_REQUEST['title'];
$description = $_REQUEST['description'];
$deadline = $_REQUEST['deadline'];

//Form data validation

// if(empty($title)){
//     echo "Please write Title";
// } else if(strlen($title) < 5){
//    echo "Please write min five cheracters!";
// };


// if(empty($description)){
//     echo "Please enter a description";
// } elseif(strlen($title) < 20){
//    echo "Please enter a description with at least 20 characters.";
// }



$errors = [];

// Validate Title
if (empty($title)) {
    $errors[] = "Title is required.";
} elseif (strlen($title) < 5) {
    $errors[] = "Title must be at least 5 characters.";
}

// Validate Description
if (empty($description)) {
    $errors[] = "Description is required.";
} elseif (strlen($description) < 20) {
    $errors[] = "Description must be at least 20 characters.";
}

// Check if there are any errors
if (!empty($errors)) {
    foreach ($errors as $error) {
        // Wrap in a Bootstrap Alert
        echo "<div class='alert alert-danger mb-2'>$error</div>";
    }
} else {
    // Proceed with saving to database
}