package com.genzeetech.backend.contact;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class ContactEmailService {
    private static final Logger logger = LoggerFactory.getLogger(ContactEmailService.class);

    private final JavaMailSender mailSender;
    private final String recipient;
    private final String sender;

    public ContactEmailService(JavaMailSender mailSender,
                               @Value("${app.mail.recipient}") String recipient,
                               @Value("${app.mail.sender}") String sender) {
        this.mailSender = mailSender;
        this.recipient = recipient;
        this.sender = sender;
    }

    @Async
    public void sendEmails(ContactMessage contact) {
        sendInternalNotification(contact);
        sendThankYouEmail(contact);
    }

    private void sendInternalNotification(ContactMessage contact) {
        SimpleMailMessage email = new SimpleMailMessage();
        email.setFrom(sender);
        email.setTo(recipient);
        email.setReplyTo(contact.getEmail());
        email.setSubject("New GenzeeTech contact message from " + contact.getName());
        email.setText("Name: " + contact.getName() + "\nEmail: " + contact.getEmail()
                + "\n\nMessage:\n" + contact.getMessage());
        sendSafely(email, "internal notification", contact.getId());
    }

    private void sendThankYouEmail(ContactMessage contact) {
        SimpleMailMessage email = new SimpleMailMessage();
        email.setFrom(sender);
        email.setTo(contact.getEmail());
        email.setReplyTo(recipient);
        email.setSubject("Thank you for contacting GenZeeTech");
        email.setText("Hi " + contact.getName() + ",\n\n"
                + "Thank you for reaching out to GenZeeTech. We have received your message and "
                + "our team will get back to you as soon as possible.\n\n"
                + "Best regards,\nGenZeeTech Team");
        sendSafely(email, "thank-you email", contact.getId());
    }

    private void sendSafely(SimpleMailMessage email, String emailType, Long contactId) {
        try {
            mailSender.send(email);
        } catch (MailException exception) {
            logger.error("Contact message {} was saved but its {} could not be sent", contactId, emailType, exception);
        }
    }
}
