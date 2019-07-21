var config = { 
  apiKey: "AIzaSyCjmjSfERPRQUqGS-IYxegTEc2hXpr2tM8",
  authDomain: "blockanalyzer.firebaseapp.com",
  databaseURL: "https://blockanalyzer.firebaseio.com",
  projectId: "blockanalyzer",
  storageBucket: "blockanalyzer.appspot.com",
  messagingSenderId: "134357434820",
  appId: "1:134357434820:web:cd65a6922fe15eb6"
};
firebase.initializeApp(config);
var db = firebase.firestore();

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

        var slika = document.getElementById('slika');
         if(slika){
           slika.addEventListener('click', klikSlika, false);
          }

          var slika1 = document.getElementById('slika1');
         if(slika1){
           slika1.addEventListener('click', klikSlika1, false);
          }

          var slika2 = document.getElementById('slika2');
         if(slika2){
           slika2.addEventListener('click', klikSlika2, false);
          }

          var slika3 = document.getElementById('slika3');
         if(slika3){
           slika3.addEventListener('click', klikSlika3, false);
          }

          var slika4 = document.getElementById('slika4');
         if(slika4){
           slika4.addEventListener('click', klikSlika4, false);
          }

          var slika5 = document.getElementById('slika5');
         if(slika5){
           slika5.addEventListener('click', klikSlika5, false);
          }

          var slika6 = document.getElementById('slika6');
         if(slika6){
           slika6.addEventListener('click', klikSlika6, false);
          }

        var gumb_reg_ad = document.getElementById('registration');
        if(gumb_reg_ad){
          gumb_reg_ad.addEventListener('click', test, false);
        }

        var gumb_reg_user = document.getElementById('reg');
        if(gumb_reg_user){
          gumb_reg_user.addEventListener('click', reg_user, false);
        }

        var adm = document.getElementById("admins");
        if(adm){

          db.collection("Admins").get().then(function(querySnapshot) { 
            querySnapshot.forEach(function(doc) {
                var admin=doc.data();

                var option = document.createElement("option");
                option.text = admin.Ime;
                adm.add(option);
             
            });
        });

         
        }
        
});


function redirectUser(){
    window.location.href='registrationUser.html';
  }
  
  function redirectAdmin(){
    window.location.href='registrationAdmin.html';
  }
  
  