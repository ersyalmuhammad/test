Feature: Settings
Scenario: Changing the profile picture
Given the user has logged into WhatsApp Desktop
When the user clicks on the "settings" button
And the user selects the "profile" tab
And the user clicks on the "change" button for the profile picture
And the user selects a new picture to upload
And the user clicks on the "save" button
Then the profile picture should be updated successfully
