Feature: Login
<br>Scenario: Successful Login
<br>Given the user has installed WhatsApp Desktop
<br>When the user opens WhatsApp Desktop
<br>And the user enters their valid "phone number" and "password"
<br>And the user clicks on the "Log in" button
<br>Then the user should be logged in successfully

Feature: Chatting
<br>Scenario: Sending a message
<br>Given the user has logged into WhatsApp Desktop
<br>When the user selects a contact to chat with
<br>And the user types a message in the chat window
<br>And the user clicks on the "Send" button
<br>Then the message should be sent successfully to the contact

Feature: Group Chat
<br>Scenario: Creating a group chat
<br>Given the user has logged into WhatsApp Desktop
<br>When the user clicks on the "New Group" button
<br>And the user selects contacts to add to the group
<br>And the user sets a name for the group
<br>And the user clicks on the "Create" button
<br>Then the group should be created successfully

Feature: File Sharing
<br>Scenario: Sending a file
<br>Given the user has logged into WhatsApp Desktop
<br>When the user selects a contact to chat with
<br>And the user clicks on the "Attach" button
<br>And the user selects a file to send
<br>And the user clicks on the "Send" button
<br>Then the file should be sent successfully to the contact

Feature: Voice and Video Calls
<br>Scenario: Making a voice call
<br>Given the user has logged into WhatsApp Desktop
<br>When the user selects a contact to call
<br>And the user clicks on the "Voice call" button
<br>And the call is connected
<br>Then the user should be able to talk with the contact

Feature: Notifications
<br>Scenario: Receiving a message notification
<br>Given the user has logged into WhatsApp Desktop
<br>When the user receives a message from a contact
<br>Then a notification should appear on the screen

Feature: Status Updates
<br>Scenario: Posting a status update
<br>Given the user has logged into WhatsApp Desktop
<br>When the user clicks on the "Status" button
<br>And the user types a status update
<br>And the user clicks on the "Post" button
<br>Then the status update should be posted successfully

Feature: Settings
<br>Scenario: Changing the profile picture
<br>Given the user has logged into WhatsApp Desktop
<br>When the user clicks on the "Settings" button
<br>And the user selects the "Profile" tab
<br>And the user clicks on the "Change" button for the profile picture
<br>And the user selects a new picture to upload
<br>And the user clicks on the "Save" button
<br>Then the profile picture should be updated successfully

Feature: Privacy and Security
<br>Scenario: Changing the privacy settings
<br>Given the user has logged into WhatsApp Desktop
<br>When the user clicks on the "Settings" button
<br>And the user selects the "Account" tab
<br>And the user clicks on the "Privacy" option
<br>And the user changes the privacy settings
<br>And the user clicks on the "Save" button
<br>Then the privacy settings should be updated successfully

Feature: Logout
<br>Scenario: Successful Logout
<br>Given the user has logged into WhatsApp Desktop
<br>When the user clicks on the "Logout" button
<br>Then the user should be logged out successfully
