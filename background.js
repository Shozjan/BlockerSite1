var webSites=[];
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
    var string ="www.facebook.com www.24ur.com";
    webSites = string.split(' ');
}