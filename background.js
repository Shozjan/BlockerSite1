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
//alert(config);
preberiBazo();

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


 


function dodajArray(){
    webSites.push("www.facebook.com");
    arrayToString();   
}

 function funkcija (host){
    

}

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
            st=user.blocksites;
            //alert("not2");            
            webSites = st.split(' ');                  
          }
      });
  });
    
}
