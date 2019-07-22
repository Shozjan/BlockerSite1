var config = { 
    apiKey: "AIzaSyCjmjSfERPRQUqGS-IYxegTEc2hXpr2tM8",
    authDomain: "blockanalyzer.firebaseapp.com",
    databaseURL: "https://blockanalyzer.firebaseio.com",
    projectId: "blockanalyzer",
    storageBucket: "blockanalyzer.appspot.com",
    messagingSenderId: "134357434820",
    appId: "1:134357434820:web:cd65a6922fe15eb6"
  };

  var selectPics=0;
  var slika=false;
  var slika1=false;
  var slika2=false;
  var slika3=false;
  var slika4=false;
  var slika5=false;
  var slika6=false;
  var star_rang="nedefiniran";
  
  var slika = document.getElementById('slika');
  if(slika){
      alert("naj");
    slika.addEventListener('click', klikSlika, false);
  }
 
function reg_user(){
    if(selectPics==2){
        var db = firebase.firestore();
  
        var ePosta="";
        var admin="";
        var hostname="";
      
      
      var ePosta_el=document.getElementById("eposta");
      if(ePosta_el){
          ePosta=ePosta_el.value;
      }
      
      var host_el=document.getElementById("host");
      if(host_el){
          hostname=host_el.value;
      }
      
      var admin_el=document.getElementById("admins");
      if(admin_el){
          admin=admin_el.value;
      }
      
      if(ePosta==""){
          alert("Email je obvezen");
          ePosta_el.style.border="2px solid red";
      }
      
      if(hostname==""){
          alert("Hostname je obvezen");
          ePosta_el.style.border="2px solid red";
      }
      
      var id=makeid(15);
       
      db.collection("Users").doc(id).set({
          blocks:[],
          emall: ePosta,
          hostname: hostname,
          old_rang:star_rang,
          admin :admin,
          visitSites:[]
      })
      .then(function() {
          alert("Registracija uspešna")
          setCookie(hostname); //zaradi identifikacije ustvarimo piškotek 
      })
      .catch(function(error) {
          alert("Napaka pri vnosu");
      });
    }
    else{
        alert("Izbrati morate 2 sliki!");
    }
  
}



function setCookie(value) {
    chrome.storage.local.set({key: value}, function() {
        alert("Piškotek ustvarjen");
      });
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

 
function klikSlika(){
    var image = document.getElementById("slika");
    if(image.className =="" && selectPics<2)
    {
        image.className="clicked";
        image.style.border="2px solid red";
        selectPics++;
        slika=true;
        console.log(selectPics);
        star_rang="srednji";
    }
   
    else if(selectPics<3 && image.className !="")
    {
        image.className="";
        image.style.border="0px solid red";
        selectPics--;
        slika=false;
    }
}

function klikSlika1(){
    var image = document.getElementById("slika1");
    if(image.className ==""&& selectPics<2)
    {
        image.className="clicked";
        image.style.border="2px solid red";
        selectPics++;
        slika1=true;
        console.log(selectPics);
        if(slika){
            star_rang="srednji";
        }
    }
   
    else if(selectPics<3 && image.className !="")
    {
        image.className="";
        image.style.border="0px solid red";
        selectPics--;
        slika1=false;
    }
}

function klikSlika2(){
    var image = document.getElementById("slika2");
    if(image.className ==""&& selectPics<2)
    {
        image.className="clicked";
        image.style.border="2px solid red";
        selectPics++;
        slika2=true;
        console.log(selectPics);
        star_rang="mladi";
    }
   
    else if(selectPics<3 && image.className !="")
    {
        image.className="";
        image.style.border="0px solid red";
        selectPics--;
        slika2=false;
        console.log(selectPics);
    }
}

function klikSlika3(){
    var image = document.getElementById("slika3");
    if(image.className ==""&& selectPics<2)
    {
        image.className="clicked";
        image.style.border="2px solid red";
        selectPics++;
        slika3=true;
        if(slika){
            star_rang="starejši";
        }
        console.log(selectPics);
    }
   
    else if(selectPics<3 && image.className !="")
    {
        image.className="";
        image.style.border="0px solid red";
        selectPics--;
        slika3=false;
    }
}

function klikSlika4(){
    var image = document.getElementById("slika4");
    if(image.className ==""&& selectPics<2)
    {
        image.className="clicked";
        image.style.border="2px solid red";
        selectPics++;
        slika4=true;

        if(slika1||slika2){
            star_rang="mladina";
        }
    }
   
    else if(selectPics<3 && image.className !="")
    {
        image.className="";
        image.style.border="0px solid red";
        selectPics--;
        slika4=false;
    }
}

function klikSlika5(){
    var image = document.getElementById("slika5");
    if(image.className ==""&& selectPics<2)
    {
        image.className="clicked";
        image.style.border="2px solid red";
        selectPics++;
        slika5=true;

      
            star_rang="otroci";
        
    }
   
    else if(selectPics<3 && image.className !="")
    {
        image.className="";
        image.style.border="0px solid red";
        selectPics--;
        slika5=false;
    }
}

function klikSlika6(){
    var image = document.getElementById("slika6");
    if(image.className ==""&& selectPics<2)
    {
        image.className="clicked";
        image.style.border="2px solid red";
        selectPics++;
        slika6=true;
        star_rang="otroci";
    }
   
    else if(selectPics<3 && image.className !="")
    {
        image.className="";
        image.style.border="0px solid red";
        selectPics--;
        slika6=false;
    }
}
