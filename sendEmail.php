<?php

// Include the necessary PHPMailer files manually
require_once 'PHPMailer/src/PHPMailer.php';  // Main PHPMailer class
require_once 'PHPMailer/src/SMTP.php';       // SMTP class for sending emails via SMTP
require_once 'PHPMailer/src/Exception.php';  // Exception class for error handling

// Create a new instance of PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

// SMTP Configuration
$mail->isSMTP();
$mail->Host = 'smtp.hostinger.com'; // SMTP server for Hostinger
$mail->SMTPAuth = true;
$mail->Username = 'sales@ectorious.com';  // SMTP username (your email)
$mail->Password = 'd4L3Fpo[Du8';      // SMTP password (your email password)
$mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;  // SSL encryption
$mail->Port = 465;  // Port for SSL

// Collect form data with sanitization
$name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
$user_email = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : '';
$message = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : '';

// Validation: Check if all fields are provided
if (empty($name) || empty($user_email) || empty($message)) {
    echo 'All fields are required.';
    exit;
}

// Set sender and recipient details
$mail->setFrom('sales@ectorious.com', 'Ectorious');
$mail->addAddress('sales@ectorious.com');  // Send the email to your sales email

// Set the email subject and body
$mail->Subject = 'New Contact Form Query from ' . $name;
$mail->Body    = 'You have received a new message from ' . $name . ' (' . $user_email . '):\n\n' . $message;

// Try sending the email and provide response
if ($mail->send()) {
    // Send a receipt to the user
    $response_mail = new PHPMailer\PHPMailer\PHPMailer();
    $response_mail->isSMTP();
    $response_mail->Host = 'smtp.hostinger.com';
    $response_mail->SMTPAuth = true;
    $response_mail->Username = 'sales@ectorious.com';
    $response_mail->Password = 'd4L3Fpo[Du8';
    $response_mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
    $response_mail->Port = 465;
    $response_mail->setFrom('sales@ectorious.com', 'Ectorious');
    $response_mail->addAddress($user_email);  // Send a receipt to the user's email
    $response_mail->Subject = 'Query Received ECTORIOUS';
    $response_mail->Body = "
    <p>Dear <strong>$name</strong>,</p>
    <p>Thank you for reaching out to us. We have received your query and will get back to you within 2-3 business days.</p>
    <p>If you have any urgent concerns, feel free to contact us at sales@ectorious.com.</p>
    <p>Best regards,<br><b>ECTORIOUS </b> Team</p>
";
    $response_mail->IsHTML(true); 
    if ($response_mail->send()) {
        echo json_encode(['success' => true, 'message' => 'Message sent successfully and receipt sent to user!']);
        exit;
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to send the receipt to the user. Error: ' . $response_mail->ErrorInfo]);
        exit;
        // echo 'Failed to send the receipt to the user. Error: ' . $response_mail->ErrorInfo;
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Mailer Error: ' . $mail->ErrorInfo]);
        exit;
    // echo 'Mailer Error: ' . $mail->ErrorInfo;  // Output error if the email fails to send
}
?>