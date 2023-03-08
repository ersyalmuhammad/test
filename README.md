Feature: Login
Scenario: Successful Login
Given the user has installed WhatsApp Desktop
When the user opens WhatsApp Desktop
And the user enters their valid "phone number" and "password"
And the user clicks on the "Log in" button
Then the user should be logged in successfully

Feature: Chatting
Scenario: Sending a message
Given the user has logged into WhatsApp Desktop
When the user selects a contact to chat with
And the user types a message in the chat window
And the user clicks on the "Send" button
Then the message should be sent successfully to the contact

Feature: Group Chat
Scenario: Creating a group chat
Given the user has logged into WhatsApp Desktop
When the user clicks on the "New Group" button
And the user selects contacts to add to the group
And the user sets a name for the group
And the user clicks on the "Create" button
Then the group should be created successfully

Feature: File Sharing
Scenario: Sending a file
Given the user has logged into WhatsApp Desktop
When the user selects a contact to chat with
And the user clicks on the "Attach" button
And the user selects a file to send
And the user clicks on the "Send" button
Then the file should be sent successfully to the contact

Feature: Voice and Video Calls
Scenario: Making a voice call
Given the user has logged into WhatsApp Desktop
When the user selects a contact to call
And the user clicks on the "Voice call" button
And the call is connected
Then the user should be able to talk with the contact

Feature: Notifications
Scenario: Receiving a message notification
Given the user has logged into WhatsApp Desktop
When the user receives a message from a contact
Then a notification should appear on the screen

Feature: Status Updates
Scenario: Posting a status update
Given the user has logged into WhatsApp Desktop
When the user clicks on the "Status" button
And the user types a status update
And the user clicks on the "Post" button
Then the status update should be posted successfully

Feature: Settings
Scenario: Changing the profile picture
Given the user has logged into WhatsApp Desktop
When the user clicks on the "Settings" button
And the user selects the "Profile" tab
And the user clicks on the "Change" button for the profile picture
And the user selects a new picture to upload
And the user clicks on the "Save" button
Then the profile picture should be updated successfully

Feature: Privacy and Security
Scenario: Changing the privacy settings
Given the user has logged into WhatsApp Desktop
When the user clicks on the "Settings" button
And the user selects the "Account" tab
And the user clicks on the "Privacy" option
And the user changes the privacy settings
And the user clicks on the "Save" button
Then the privacy settings should be updated successfully

Feature: Logout
Scenario: Successful Logout
Given the user has logged into WhatsApp Desktop
When the user clicks on the "Logout" button
Then the user should be logged out successfully
