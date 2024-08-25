<?php
// Variables
$servername = "localhost";
$username = "Sir Afro";
$password = "Awakening76!";
$db = "accounts";

// Connection
$connection = new mysqli($servername, $username, $password, $db);

// Check Connection
if ($connection->connect_error) {
    die("Connection Failed: " . $conn->connect_error);
}
echo "Connected successfully: " . $db;

// Check Form Type Submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['login'])) {
        header("Location: login.php");
        exit();
    } elseif (isset($_POST["signup"])){
        header("Location: signup.php");
        exit();
    }
}