
$(document).ready(function(){
  
     //dodan listener za spremembo tab-a v statistiko
        var elRegUpor = document.getElementById('regUpor');
        if(elRegUpor){
            elRegUpor.addEventListener('click', redirectUser, false);
        }

        //dodan listener za spremembo tab-a v prvotno
        var elRegAdmin = document.getElementById('regAdmin');
        if(elRegAdmin){
            elRegAdmin.addEventListener('click', redirectAdmin, false);
        } 

        var gumb_reg_ad = document.getElementById('registration');
        if(gumb_reg_ad){
          gumb_reg_ad.addEventListener('click', test, false);
        }

        var gumb_reg_user = document.getElementById('reg');
        if(gumb_reg_user){
          gumb_reg_user.addEventListener('click', reg_user, false);
        }
});


function redirectUser(){
    window.location.href='registrationUser.html';
  }
  
  function redirectAdmin(){
    window.location.href='registrationAdmin.html';
  }
  
  