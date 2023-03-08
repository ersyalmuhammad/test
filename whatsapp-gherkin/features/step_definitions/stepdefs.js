const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function successfullyLogin(code){
 
}

         Given('the user has installed WhatsApp Desktop', function () {
           
         });

         When('the user opens WhatsApp Desktop', function () {
           
         });

         When('the user enters their valid phone number and password', function () {
            
         });

         When('the user clicks on the Log in button', function () {
            
        });

         Then('the user should be "logged in" successfully', function () {
          
         });

         //chatting features
  
         function sending(message){

         }

           Given('the user has logged into WhatsApp Desktop', function () {
             
           });

  
           When('the user selects a contact to chat with', function () {
            
           });

  
           When('the user types a message in the chat window', function () {
            
           });
  
           When('the user clicks on the {string} button', function (string) {
            
           });

  
           Then('the message should be sent successfully to the contact', function () {
            
           });
  

           //group feature

           function group(chat){
             
           }

           When('the user selects contacts to add to the group', function () {
            
          });

 
          When('the user sets a {string} for the group', function (string) {
            
          });
 
          When('the user clicks on the create button', function () {
            
          });

          Then('the group should be created successfully', function () {
            
          });


          function sharing(file){

          }

          When('the user selects a {string} to send', function (string) {
            
          });

          When('the user clicks on the send button', function () {
            
          });
 
 
          Then('the file should be sent successfully to the contact', function () {
            
          });

      function voice(video){

      }


      When('the user selects a {string} to call', function (string) {
        
      });

      When('the user clicks on the voice call button', function () {
        
      });

      When('the call is connected', function () {
        
      });

      Then('the user should be able to talk with the contact', function () {
        
      });


      function notif(message){

      }

      When('the user receives a message from a contact', function () {
        
      });

      Then('a notification should appear on the screen', function () {
        
      });


      function status(update){

      }


      When('the user clicks on the status button', function () {
     
      });


      When('the user {string} a status update', function (string) {
       
      });


      When('the user clicks on the post button', function () {
       
      });


      Then('the status update should be posted successfully', function () {
        
      });


      function setting(add){

      }

      When('the user selects the {string} tab', function (string) {
        
      });

      When('the user clicks on the {string} button for the profile picture', function (string) {
       
      });

      When('the user selects a new picture to upload', function () {
        
      });

      Then('the profile picture should be updated successfully', function () {
        
      });


      function secure(priv){

      }

      When('the user clicks on the {string} option', function (string) {
        
      });

      When('the user changes the privacy settings', function () {
        
      });

      Then('the privacy settings should be updated successfully', function () {
      
      });

      Then('the user should be logged out successfully', function () {
        
      });

