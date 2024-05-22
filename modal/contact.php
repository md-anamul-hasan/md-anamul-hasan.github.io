<?php

// Main contact email address
$php_main_email = "anam@mdanamulhasan.com";

// Fetching Values from POST request
$php_name = $_POST['ajax_name'] ?? '';
$php_email = $_POST['ajax_email'] ?? '';
$php_message = $_POST['ajax_message'] ?? '';

// Sanitize email to remove illegal characters
$php_email = filter_var($php_email, FILTER_SANITIZE_EMAIL);

// Validate sanitized email
if (filter_var($php_email, FILTER_VALIDATE_EMAIL)) {
    // Email subject
    $php_subject = "Message from contact form";
    
    // HTML email headers
    $php_headers = 'MIME-Version: 1.0' . "\r\n";
    $php_headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $php_headers .= 'From: ' . $php_email . "\r\n"; // Sender's Email
    $php_headers .= 'Cc: ' . $php_email . "\r\n"; // Carbon copy to Sender
    
    // Email content template
    $php_template = '<div style="padding:50px;">Hello ' . htmlspecialchars($php_name) . ',<br/>'
        . 'Thank you for contacting us.<br/><br/>'
        . '<strong style="color:#f00a77;">Name:</strong> ' . htmlspecialchars($php_name) . '<br/>'
        . '<strong style="color:#f00a77;">Email:</strong> ' . htmlspecialchars($php_email) . '<br/>'
        . '<strong style="color:#f00a77;">Message:</strong> ' . nl2br(htmlspecialchars($php_message)) . '<br/><br/>'
        . 'This is a Contact Confirmation mail.<br/>'
        . 'We will contact you as soon as possible.</div>';
    $php_sendmessage = "<div style=\"background-color:#f5f5f5; color:#333;\">" . $php_template . "</div>";
    
    // Wrap message lines to 70 characters
    $php_sendmessage = wordwrap($php_sendmessage, 70);
    
    // Send email using PHP mail function
    if (mail($php_main_email, $php_subject, $php_sendmessage, $php_headers)) {
        echo "Message sent successfully!";
    } else {
        echo "<span class='contact_error'>* Failed to send email. Please try again later. *</span>";
    }
} else {
    echo "<span class='contact_error'>* Invalid email *</span>";
}

?>
