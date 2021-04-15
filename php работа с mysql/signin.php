<?php

    session_start();
    require_once 'index1.php';

    $login = $_POST['login'];
    $password = $_POST['password'];

    $check_user = mysqli_query($link, "SELECT * FROM `users` WHERE `login` = '$login' AND `password` = '$password'");
    if (mysqli_num_rows($check_user) > 0) {

        echo "1";

    } else {
        echo "lox";
    }
    ?>

<pre>
    <?php
    print_r($check_user);
    print_r($user);
    ?>
</pre>
