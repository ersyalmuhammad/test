Feature: Chatting
Scenario: Sending a message
Given the user has logged into WhatsApp Desktop
When the user selects a contact to chat with
And the user types a message in the chat window
And the user clicks on the "Send" button
Then the message should be sent successfully to the contact