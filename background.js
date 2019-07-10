 
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
var odScrollPos=0.0;
var smerScroll="";
var digits=[];
getCookie("username");
preberiBazo();

//detekcija skrolanja gor in dol
window.addEventListener('scroll', function(){
   if(digits[digits.length-1]==0 && digits[digits.length-2]==0){ //premik na scrool vedno zaokroži na stotice(zadnji dve sta vedno 0)
    
    if ((document.body.getBoundingClientRect()).top > scrollPos){ 
      smerScroll="GOR";
    }
      
    else
    { 
      smerScroll="DOL";
    }
    odScrollPos=scrollPos;
   }
 
  
  scrollPos = (document.body.getBoundingClientRect()).top;

  var razl=Number(odScrollPos)-Number(scrollPos); //izračunamo razliko med prejšnjim položajem in sedanjim
   digits = (""+razl).split("");

 
});

     var contXR=0;
     var contXL=0;
     var contYD=0;
     var contYU=0;

//funkcija ki beleži premike miške
function getMouseDirection(e) {
     if (oldX < e.pageX) {
        xDirection = "right";
        contXR++;
    } else {
        xDirection = "left";
        contXL++;
    }
 
   
    if (oldY < e.pageY) {
        yDirection = "down";
        contYD++;
    } else {
        yDirection = "up";
        contYU++;
    }
 
    oldX = e.pageX;
    oldY = e.pageY;
 
    if(contXR==30){
      console.log("Right");
      contXR=0;
    }

    if(contXL==30){
      console.log("Left");
      contXL=0;
    }

    if(contYD==30){
      console.log("Down");
      contYD=0;
    }
    
    if(contYU==30){
      console.log("Up");
      contYU=0;
    }
  
}


function preberiBazo(){ 
    var st="";
    var arraySites= {};
   var db = firebase.firestore();
   var docRef = db.collection("Users"); 
    var currentSite = getCurrent(); 
    docRef.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          var user=doc.data();
         
          if(user.hostname==identy){
            st=user.blocks;    
            arraySites=user.visitSites;
            console.log("dol: "+arraySites.length);
           
            //seznam strani za blokiranje
            for(var i=0;i<st.length;i++){    
              webSites.push(st[i]);                         
            }

           var obstaja=checkIfExist(arraySites,currentSite);

           //statistika za trenutno obiskano stran
            for(var j=0;j<arraySites.length;j++){

              if(arraySites[j].site == currentSite){
                    var stObisk=arraySites[j].visits;
                    stObisk++;
                    arraySites[j].visits=stObisk;  

                    docRef.doc(doc.id).update({
                      visitSites: arraySites
                     
                     }).then(function() {
                      
                      
                   });
                                               
              }
            }

            if(!obstaja){
              var nova={site:currentSite,visits:1};
              arraySites.push(nova);

              docRef.doc(doc.id).update({
                visitSites: arraySites
               
               }).then(function() {
                
                
             });
              
            }


           checkIfBlocked(webSites,currentSite);       
          }
      });
  });
}

function checkIfExist(araj,trenutno){
  var obstaja=false;

for(var i=0;i<araj.length;i++){
  if(araj[i].site == trenutno){
    obstaja=true
}
}
  return obstaja;

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
   //  alert(identy);
  });
}

