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

});

function spremeniAdminPanel(){
  window.location.href='statistika.html';
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



