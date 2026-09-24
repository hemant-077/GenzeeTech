package com.genzeetech.backend.contact;

import org.springframework.stereotype.Service;

@Service
public class ContactService {
    private final ContactMessageRepository repository;
    private final ContactEmailService contactEmailService;

    public ContactService(ContactMessageRepository repository, ContactEmailService contactEmailService) {
        this.repository = repository;
        this.contactEmailService = contactEmailService;
    }

    public ContactMessage saveAndNotify(ContactRequest request) {
        ContactMessage contact = new ContactMessage();
        contact.setName(request.name().trim());
        contact.setEmail(request.email().trim().toLowerCase());
        contact.setMessage(request.message().trim());
        ContactMessage saved = repository.save(contact);

        contactEmailService.sendEmails(saved);
        return saved;
    }
}
