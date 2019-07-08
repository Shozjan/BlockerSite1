
var db = firebase.firestore();

chrome.windows.onCreated.addListener(function() {
  chrome.tabs.create({url:"registration.js"});
  });

$(document).ready(function(){
  console.log(chrome.tabs);
  //query za pridobitev URL trenutnega tab-a
  chrome.tabs.query({
    active: true,
    currentWindow: true
}, function(tabs) {
    var link=document.createElement('a');
     link.href= tabs[0].url;
     $("#current").val(link.host);
});

   var gumb = document.getElementById('blockBut');
   if(gumb){
     gumb.addEventListener('click', dodajVbazo, false);
   }

   var gumb2= document.getElementById('toStatistics');
   if(gumb2){
     gumb2.addEventListener('click',spremeniAdminPanel,false);
   }

});

function spremeniAdminPanel(){
  var adminName="";

  db.collection("Users").get().then(function(querySnapshot) { 
    querySnapshot.forEach(function(doc) {
        var user=doc.data();
        if(user.hostname==identy){
          adminName=user.admin;
        }
    });
});

db.collection("Admins").get().then(function(querySnapshot) { 
  querySnapshot.forEach(function(doc) {
      var admin=doc.data();
      if(admin.Ime==adminName){
        var psw = prompt("Vpiši administratorsko geslo:", "");
        if(psw==admin.geslo){
          window.open('statistika.html','_blank');
        }
        else{
          alert("napačno geslo");
        }
      }
  });
});


 
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



