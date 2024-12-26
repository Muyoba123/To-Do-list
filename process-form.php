<?php
$Full Names = $_POST["Full Names"];
$Email Email = $_POST["Email"];
$Username Username = $_POST["Username"];
$Password Password = $_POST["Password"];
$Date of Birth Date of Birth = $_POST["Date of Birth"];

var_dump($Full Names,$Email,$Username,$Password,$Date of Birth);

$host = "localhost";
$dbname = "todo_db";
$username = "root";
$password = "";

$conn = mysqli_connect(
                      hostname: $host,
                      username: $username,
                      password: $password,
                      database: $dbname);