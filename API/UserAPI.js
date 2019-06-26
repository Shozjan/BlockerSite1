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


function reg_user(){
  var db = firebase.firestore();
  
  var ePosta="";
  var hostname="";
  var pcName="";
  var blockSites="";

var ePosta_el=document.getElementById("eposta");
if(ePosta_el){
    ePosta=ePosta_el.value;
}

var host_el=document.getElementById("host");
if(host_el){
    hostname=host_el.value;
}

setCookie("username",hostname); //zaradi identifikacije ustvarimo piškotek 

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
/*
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
});*/
}

function setCookie(c_name, value) {
    chrome.storage.local.set({key: value}, function() {
        alert("Piškotek ustvarjen");
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

 
function klikSlika(image){

   
    if(image.className =="")
    {
        image.className="clicked";
    }
   
    else
    {
        image.className="";
    }
    
   // image.style.border="2px solid red";

}
