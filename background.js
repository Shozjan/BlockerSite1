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
var webSites=[];

chrome.runtime

//alert(config);


setInterval(function() {
 
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        var link=document.createElement('a');
         link.href= tabs[0].url;
        
         var i;
            for (i = 0; i < webSites.length; i++) { 
                if(link.host==webSites[i])
                {
                   chrome.tabs.update(undefined,{url: "newtab.html"});
                }
            }      
    });
   
  }, 1);

function arrayToString(){
    var blockSites=webSites.join(" ");
    prenosVBazo(blockSites);
}

function prenosVBazo(blockSites) {
    //TODO prenos v bazo glede na uporabnika
  
    alert(blockSites);
}

function preberiBazo(){
    //TODO povezava z bazo glede na uporabnika
    var host="simke";
    var st="www.24ur.com";
 
   // alert("not");
    var db = firebase.firestore();
   
    db.collection("Users").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          var user=doc.data();
          if(user.hostname==host){
            st=user.blocks;
          
            for(var i=0;i<st.length;i++){    
              webSites.push(st[i]);
              //alert(webSites[i]);
            }     
                      
          }
      });
  });
    
}

function dodajVbazo(){
  var host="simke";
  var db = firebase.firestore();
  
  setTimeout(function (){ //zaradi izvajanja..prej se mora izvesti branje
    var current="";
    var current_okno = document.getElementById('current');
    if(current_okno){
     current=current_okno.value;  
     webSites.push(current); 
    }
    //Update Array for blockSites
    db.collection("Users").get().then(function(querySnapshot) { 
      querySnapshot.forEach(function(doc) {
          var user=doc.data();
          if(user.hostname=="simke"){

            var docData = {
              blocks:webSites
            };
            
            db.collection("Users").doc(doc.id).update(docData).then(function() {
              alert("Uspešno posodobljen");
          });
                          
          }
      });
  });
  
  }, 1000);
 
  if(webSites.length==0) //Če je prebrano polje strani enako nič
  preberiBazo();
 

}

