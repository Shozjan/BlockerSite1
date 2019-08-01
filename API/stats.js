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

var username="";
getCookie("username");

$(document).ready(function(){
spremeniUsername();
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

