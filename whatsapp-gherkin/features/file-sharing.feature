Feature: File Sharing
Scenario: Sending a file
Given the user has logged into WhatsApp Desktop
When the user selects a contact to chat with
And the user clicks on the "Attach" button
And the user selects a "file" to send
And the user clicks on the send button
Then the file should be sent successfully to the contact
