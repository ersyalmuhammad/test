Feature: Voice and Video Calls
Scenario: Making a voice call
Given the user has logged into WhatsApp Desktop
When the user selects a "contact" to call
And the user clicks on the voice call button
And the call is connected
Then the user should be able to talk with the contact