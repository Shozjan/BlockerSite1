var config = { 
    apiKey: "AIzaSyCjmjSfERPRQUqGS-IYxegTEc2hXpr2tM8",
    authDomain: "blockanalyzer.firebaseapp.com",
    databaseURL: "https://blockanalyzer.firebaseio.com",
    projectId: "blockanalyzer",
    storageBucket: "blockanalyzer.appspot.com",
    messagingSenderId: "134357434820",
    appId: "1:134357434820:web:cd65a6922fe15eb6"
  };
 
function reg_user(){
  var db = firebase.firestore();
  
  var ePosta="";
  var admin="";
  var hostname="";


var ePosta_el=document.getElementById("eposta");
if(ePosta_el){
    ePosta=ePosta_el.value;
}

var host_el=document.getElementById("host");
if(host_el){
    hostname=host_el.value;
}

var admin_el=document.getElementById("admins");
if(admin_el){
    admin=admin_el.value;
}

if(ePosta==""){
    alert("Email je obvezen");
    ePosta_el.style.border="2px solid red";
}

if(hostname==""){
    alert("Hostname je obvezen");
    ePosta_el.style.border="2px solid red";
}

var id=makeid(15);
 
db.collection("Users").doc(id).set({
    blocks:[],
    emall: ePosta,
    hostname: hostname,
    admin :admin,
    visitSites:[]
})
.then(function() {
    alert("Registracija uspešna")
    setCookie(hostname); //zaradi identifikacije ustvarimo piškotek 
})
.catch(function(error) {
    alert("Napaka pri vnosu");
});
}



function setCookie(value) {
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
        image.style.border="2px solid red";
    }
   
    else
    {
        image.className="";
        image.style.border="0px solid red";
    }
    
   // image.style.border="2px solid red";

}
