<?php
    header("Access-Control-Allow-Origin: *");
    $result = mail('jony635molina@gmail.com', 'Asunto', 'Hola mundo');
    
    echo $result;

    // if ($_POST)
    // {
    //     // set response code - 200 OK

    //     http_response_code(200);

    //     $subject = $_POST['subject'];
    //     $to = "jony635molina@gmail.com";
    //     $from = $_POST['email'];

    //     // data
    //     $msg = $_POST['message'];

    //     // Headers
    //     $headers = "MIME-Version: 1.0\r\n";
    //     $headers.= "Content-type: text/html; charset=UTF-8\r\n";
    //     $headers.= "From: <" . $from . ">";
    //     mail($to, $subject, $msg, $headers);
    // }
?>