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
  var chart;

var username="";
getCookie("username");

$(document).ready(function(){
spremeniUsername();
addBlockSites();
addVisits();
});

function getCookie(c_name) {
    chrome.storage.local.get(['key'], function(result) {
        username=result.key;
    });
  }

  function spremeniUsername(){
    var host = document.getElementById("userSt");
    if(host){
     host.innerHTML = "Uporabnikško: "+username;
    }
  }

  function addBlockSites(){
    var db = firebase.firestore();
    var docRef = db.collection("Users"); 

    var blocks = document.getElementById("blocksSite");
    if(blocks){
      docRef.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            var user=doc.data();
           
            if(user.hostname==username){
              st=user.blocks;    
             
              for(var i=0;i<st.length;i++){    
                blocks.innerHTML += "<div class='okno'> <br>"+ st[i]+"     "+"<button class='button4'>odstrani</button> <br> </div>"+"<br>";                       
              }
            }
        });
    });
    }
  }

  function addVisits(){
    chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      title: {
        text: "Število obiskov spletnih strani"
      },
      data: [{
        type: "pie",
        startAngle: 240,
        yValueFormatString: "##0.00\"%\"",
        indexLabel: "{label} {y}",         
        dataPoints: [ 
        ]
      }]
    });
    chart.render();

    var db = firebase.firestore();
    var docRef = db.collection("Users"); 

    var visit = document.getElementById("visits");
    if(visit){
      docRef.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            var user=doc.data();
           
            if(user.hostname==username){
              st=user.blocks;    
              arraySites=user.visitSites;
              var steviloVisit=0;

              for(var j=0;j<arraySites.length;j++) {
               steviloVisit=steviloVisit+arraySites[j].visits;
              }        

                for(var j=0;j<arraySites.length;j++) {
                  var procent=(arraySites[j].visits*100) /steviloVisit;
                  chart.options.data[0].dataPoints.push({ y: procent, label: arraySites[j].site});
                }            
                
                chart.render(); 
                
               
              }  
            });
          });
    }
  }


