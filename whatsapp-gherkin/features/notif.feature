Feature: Notifications
Scenario: Receiving a message notification
Given the user has logged into WhatsApp Desktop
When the user receives a message from a contact
Then a notification should appear on the screen
