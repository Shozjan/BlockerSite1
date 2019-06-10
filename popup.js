
var sec = 0;

chrome.windows.onCreated.addListener(function() {
  chrome.tabs.create({url:"registration.js"});
  });

$(document).ready(function(){
  //query za pridobitev URL trenutnega tab-a
  chrome.tabs.query({
    active: true,
    currentWindow: true
}, function(tabs) {
    var link=document.createElement('a');
     link.href= tabs[0].url;

    $("#current").val(link.host);

     //dodan listener za spremembo tab-a v statistiko
        var elStats = document.getElementById('toStatistics');
        if(elStats){
          elStats.addEventListener('click', spremeniStatiskika, false);
        }

        //dodan listener za spremembo tab-a v prvotno
        var elStran = document.getElementById('toStran');
        if(elStran){
          elStran.addEventListener('click', spremeniVpodatke, false);
        }

        var gumb = document.getElementById('blockBut');
        if(gumb){
          gumb.addEventListener('click', dodajArray, false);
        }

});
});



function timer(){
  var timer = setInterval(function(){
      document.getElementById('cas').innerHTML=sec+" sekund";
      sec++;    
  }, 1000);
}

function spremeniStatiskika(){
  window.location.href='statistika.html';
}

function spremeniVpodatke(){
  window.location.href='popup.html';
}



