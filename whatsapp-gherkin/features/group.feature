Feature: Group Chat
Scenario: Creating a group chat
Given the user has logged into WhatsApp Desktop
When the user clicks on the "New Group" button
And the user selects contacts to add to the group
And the user sets a "name" for the group
And the user clicks on the create button
Then the group should be created successfully
