Feature: Status Updates
Scenario: Posting a status update
Given the user has logged into WhatsApp Desktop
When the user clicks on the status button
And the user "types" a status update
And the user clicks on the post button
Then the status update should be posted successfully
