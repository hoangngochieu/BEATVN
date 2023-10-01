<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$conn = new mysqli('localhost','root','','test');
if($conn->connect_error){
   echo "$conn->connect_error";
    die("Connection Failed : ". $conn->connect_error);
} else {
    $stmt = $conn->prepare("insert into contact(name, email, subject, message) values(?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $subject, $message);
    $execval = $stmt->execute();
    echo("Gửi thành công!!!!!");


     $stmt->close();
    $conn->close();
}
?>
