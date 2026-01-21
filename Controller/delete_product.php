<?php
session_start();

if (!isset($_SESSION['username'])) {
    header("Location: ../View/login.html");
    exit();
}

if (isset($_GET['id'])) {
    $product_id = intval($_GET['id']); 

    $conn = new mysqli('localhost', 'root', '', 'krishi_bazar');
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $seller_username = $_SESSION['username'];

    $stmt = $conn->prepare("DELETE FROM products WHERE id = ? AND seller_username = ?");
    $stmt->bind_param("is", $product_id, $seller_username);

    if ($stmt->execute()) {
        $stmt->close();
        $conn->close();
        header("Location: ../Model/seller_profile.php"); 
        exit();
    } else {
        echo "Error deleting product: " . $conn->error;
    }
} else {
    exit();
}
?>
