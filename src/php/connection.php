<?php

session_start();

// Vars
$servername = "localhost";
$db_username = "Sir Afro";
$db_password = "Awakening76!";
$db_name = "accounts";

// Connection Var
$connection = new mysqli($servername, $db_username, $db_password, $db_name);

// Check Connection
if ($connection->connect_error) {
    error_log("Connection Failed: " . $connection->connect_error);
} else {
    echo '<script>console.log("Connected successfully: ' . "$db_name" . '");</script>';
}

if ($_SERVER['REQUEST_METHOD'] === "POST") {
    if (isset($_POST["signup_submit"])) {
        header("Location: signup.php");
        exit();
        if (isset($_POST["login_submit"])) {
            header("Location: login.php");
            exit();
        }

    }
}

// Close the connection
$connection->close();
