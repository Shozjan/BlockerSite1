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


function test(){
  var db = firebase.firestore();
  /*
   var host="simke";
    db.collection("Users").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          var user=doc.data();
          if(user.hostname==host){
        
            alert("not2");            
                  
          }
      });
  });*/

  var geslo="";
  var rep_geslo="";
  var ime="";
  var ePosta="";

  var geslo_el=document.getElementById("geslo");
  if(geslo_el){
      geslo=geslo_el.value;
  }

  var rep_geslo_el=document.getElementById("rep-geslo");
  if(rep_geslo_el){
    rep_geslo=rep_geslo_el.value;
}

var ime_el=document.getElementById("name");
if(ime_el){
    ime=ime_el.value;
}

var ePosta_el=document.getElementById("email");
if(ePosta_el){
    ePosta=ePosta_el.value;
}
/*
 if(geslo!=rep_geslo){
     alert("Gesli nista enaki!"); 
     geslo_el.style.border="2px solid red";
     rep_geslo_el.style.border="2px solid red";
    
    }

if(ime==""){
   alert("ime je obvezno!");
   ime_el.style.border="2px solid red";
}

if(ePosta==""){
    alert("Email je obvezen");
    ePosta_el.style.border="2px solid red";
}
*/
var id=makeid(15);
 
db.collection("Admins").doc(id).set({
    Ime: ime,
    emall: ePosta,
    geslo: geslo,
    user_gp :"test"
})
.then(function() {
    alert("uspešno!")
})
.catch(function(error) {
    alert("Napaka pri vnosu");
});
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
