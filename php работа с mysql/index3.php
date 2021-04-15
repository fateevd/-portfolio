<?php 
 require_once 'index1.php';
 $login = $_POST['login'];
 $password = $_POST['password'];
 $cheak = mysqli_query($link,"SELECT * FROM `users` WHERE `login` = '$login' AND `password` = '$password'");
 if(mysqli_num_rows($cheak) > 0)
 {
 	var_dump($cheak); }
 else
 {
 	var_dump($cheak);
 }
?>
 