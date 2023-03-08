Feature: Privacy and Security
Scenario: Changing the privacy settings
Given the user has logged into WhatsApp Desktop
When the user clicks on the "Settings" button
And the user selects the "Account" tab
And the user clicks on the "Privacy" option
And the user changes the privacy settings
And the user clicks on the "Save" button
Then the privacy settings should be updated successfully
