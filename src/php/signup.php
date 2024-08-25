<?php

session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['uname'];
    $password = $_POST['pwd'];
    $email = $_POST['email'];
    $dn = $_POST['dname'];

}

$sql = "INSERT INTO users (email,username,passaword,dn) VALUES ('$username','$password',''email','dn')";

if (mysqli_query($connection, $sql)) {
    $_SESSION['message'] = '<span class="success">Success</span>';
} else { {
        $_SESSION['message'] = '<span class="failed">Error ' . mysqli_error($connection) . '</span>';
    }
    mysqli_close($connection);
    
    header("Location: signup.php");
    exit();
}

