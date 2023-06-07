<?php
    $name = $_POST['name'];
    $visitorsmail = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $email_from ="domain of my website";

    $email_subject ="New Form Submission";
    
    $email_body="User Name: $name.\n".
                "User Email: $visitorsmail.\n".
                "Subject: $subject.\n".
                "User Message: $message.\n";
    
    $to="khanalgaurav0@gmail.com";
    $headers="From: $email_from \r\n";
    $headers .="Reply-To: $visitorsmail \r\n";

    mail($to,$email_subject,$email_body,$headers);
    header("Location: contact.html");
?>