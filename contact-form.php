<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitize input to prevent XSS attacks
    $firstName = htmlspecialchars(trim($_POST['first-name']));
    $lastName = htmlspecialchars(trim($_POST['last-name']));
    $email = htmlspecialchars(trim($_POST['email-adress']));
    $phone = htmlspecialchars(trim($_POST['phone-number']));
    $company = htmlspecialchars(trim($_POST['company-name']));
    $comments = htmlspecialchars(trim($_POST['comments-area']));

    // Validate required fields
    // if (empty($firstName) || empty($lastName) || empty($email) || empty($phone) || empty($company) || empty($comments)) {
    //     echo "All fields are required.";
    //     exit;
    // }

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    // Prepare the email
    $to = "i.drosinos@audvis.gr";
    $subject = "New Contact Form Submission";
    $message = "You have received a new message from your contact form:\n\n" .
               "First Name: $firstName\n" .
               "Last Name: $lastName\n" .
               "Email: $email\n" .
               "Phone: $phone\n" .
               "Company: $company\n\n" .
               "Message:\n$comments\n";

    $headers = "From: $email\r\n" .
               "Reply-To: $email\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        // Redirect to Thank You page
        header("Location: thank-you.html");
        exit;
    } else {
         // Redirect to Error page
         header("Location: error.html");
         exit;
    }
} else {
    // Redirect or handle invalid access
    header("HTTP/1.1 403 Forbidden");
    echo "Access forbidden.";
    exit;
}
?>
