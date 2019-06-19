 
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

var identy="simke";
var webSites=[];

preberiBazo();


function preberiBazo(){ 
    var st="";
   var db = firebase.firestore();
   var docRef = db.collection("Users"); 
    var currentSite = getCurrent(); 
    docRef.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          var user=doc.data();
          if(user.hostname==identy){
            st=user.blocks;       
            for(var i=0;i<st.length;i++){    
              webSites.push(st[i]);                         
            }
           checkIfBlocked(webSites,currentSite);       
          }
      });
  });
}

function dodajVbazo(){
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
          if(user.hostname==identy){

            var docData = {
              blocks:webSites
            };
            
            db.collection("Users").doc(doc.id).update(docData).then(function() {
              alert("Uspešno posodobljen");
              check();
          });
                          
          }
      });
  });
  
  }, 1000);
 
  if(webSites.length==0) //Če je prebrano polje strani enako nič
  preberiBazo();

}

function getCurrent(){
return window.location.hostname;
}

function checkIfBlocked(webs,current){
  for(var i=0;i<webs.length;i++){
    if(current==webs[i]){    
      window.document.write("<h1>Blocked site</h1>");
      check();
    }
  }
}



function check(){
   
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
   
}


