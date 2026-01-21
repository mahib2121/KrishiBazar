<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $username = $_POST['username'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirm-password'];

    if ($password != $confirmPassword) {
        die("Passwords do not match.");
    }

    $conn = new mysqli('localhost', 'root', '', 'krishi_bazar');

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("INSERT INTO registration (username, email, mobile, password) VALUES (?, ?, ?, ?)");
    if ($stmt === false) {
        die("Error preparing statement: " . $conn->error);
    }

    $stmt->bind_param("ssss", $username, $email, $mobile, $password);

    
    if ($stmt->execute()) {
        
        echo "<script>alert('Registration successful!'); window.location.href='../View/login.html';</script>";
        exit();  
    } else {
        echo "<script>alert('There was an error. Please try again later.'); window.history.back();</script>";
    }

    $stmt->close();
    $conn->close();
}
?>
