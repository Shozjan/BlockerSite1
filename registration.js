
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
});


function redirectUser(){
    window.location.href='registrationUser.html';
  }
  
  function redirectAdmin(){
    window.location.href='registrationAdmin.html';
  }
  
  