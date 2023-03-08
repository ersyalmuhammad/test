Feature: Login
Scenario: Successful Login
Given the user has installed WhatsApp Desktop
When the user opens WhatsApp Desktop
And the user enters their valid phone number and password
And the user clicks on the Log in button
Then the user should be "logged in" successfully
