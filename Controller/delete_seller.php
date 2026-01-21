<?php

$conn = new mysqli('localhost', 'root', '', 'krishi_bazar');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_GET['id'])) {
    $id = intval($_GET['id']); 

    $sql = "DELETE FROM seller_registration WHERE id = $id";
    if ($conn->query($sql) === TRUE) {
        header("Location: ../Model/admin_seller.php"); 
        exit();
    } else {
        echo "Error deleting record: " . $conn->error;
    }
}

$conn->close();
?>
