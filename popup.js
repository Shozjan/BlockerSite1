
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

        chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "http://www.youtube.com/watch?v=oHg5SJYRHA0";
    chrome.tabs.create({ url: newURL });
});

        //dodan listener za spremembo tab-a v prvotno
        var elStran = document.getElementById('toStran');
        if(elStran){
          elStran.addEventListener('click', spremeniVpodatke, false);
        }

        var gumb = document.getElementById('blockBut');
        if(gumb){
          gumb.addEventListener('click', dodajVbazo, false);
        }

});
});

  // Your web app's Firebase configuration
  

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



