 
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

var bodyElement = document.querySelector("body");
bodyElement.addEventListener("mousemove", getMouseDirection, false);

var identy="";
var webSites=[];

//za čekiranje premikov 
var xDirection = "";
var yDirection = "";
 
var oldX = 0;
var oldY = 0;
 
var scrollPos = 0;
var smerScroll="";

getCookie("username");
preberiBazo();

//detekcija skrolanja gor in dol
window.addEventListener('scroll', function(){
  if ((document.body.getBoundingClientRect()).top > scrollPos){ 
    smerScroll="GOR";
  }
		
  else
  { 
    smerScroll="DOL";
  }
  scrollPos = (document.body.getBoundingClientRect()).top;
});



//funkcija ki beleži premike miške
function getMouseDirection(e) {
   
    if (oldX < e.pageX) {
        xDirection = "right";
    } else {
        xDirection = "left";
    }
 
   
    if (oldY < e.pageY) {
        yDirection = "down";
    } else {
        yDirection = "up";
    }
 
    oldX = e.pageX;
    oldY = e.pageY;
 
    console.log(xDirection + " " + yDirection);
}


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

function getCookie(c_name) {
  chrome.storage.local.get(['key'], function(result) {
     identy=result.key;
     //alert(identy);
  });
}

