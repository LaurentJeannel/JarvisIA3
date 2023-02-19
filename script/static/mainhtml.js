//window.resizeTo(800,600)

var xmlhttp;
xmlhttp=new XMLHttpRequest();
myIPinterphone=""

function recobouton(){
  console.log('searchTxt :            ', searchTxt.value);
  var txt=searchTxt.value
  console.log('textsplit        ',txt.split(';'))
  var txt=txt.split(';')
  if (txt.length>1){myIPinterphone=txt[1];txt=txt[0]}
  else{myIPinterphone=""  ; txt=txt[0]}
  sendData(txt)
  //aaa.push(searchTxt.value)
  document.getElementById('searchTxt').value = "";
}

var text = "<marquee>INFOS MONDIALES : </marquee>";
document.getElementById("INFOMODIALE").innerHTML = text;

var textscenario = "<marquee>SCENARIO : </marquee>";
document.getElementById("SCENARIO").innerHTML = textscenario;

coupureson=0 //coupure reco/parole
var Radio=document.getElementById("myRadio")
var Musique=document.getElementById("myMusique")

  function $( selector ) {  return document.querySelector( selector ) }

var DOMnotification = $('.plugin_notification');
var DOMcourse = $('.plugin_course');
var DOMalarmeaudio = $('.plugin_alarmeaudio');

//////////debut
  
// SSE depuis wsrnode
  var channel = new EventSource('/jarvispage');
  channel.addEventListener('message', function(ev) {
   console.log('channel.readyState : '+channel.readyState+'  ev  :   ',ev); jarvispageEvents(ev);
  })

setInterval(function () {
console.log('test connexion : '+channel.readyState)
if(channel.readyState!==1){
  channel.close();console.log('alerte')
  channel = new EventSource('/jarvispage');
    channel.addEventListener('message', function(ev) {
     console.log('channel.readyState : '+channel.readyState+'  ev  :   ',ev); jarvispageEvents(ev);
    })
  }
}, 10000);

// var reco
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
  recognition = new SpeechRecognition()
  recognition.lang = "fr-FR"

 if(OSName.search("Windows")>-1){
     recognition.interimResults = false
     recognition.continuous = false
 }


recognition.onend = function() {
  console.log('SpeechRecognition.onend');

  if((OSName.search("Windows")>-1)&&(coupureson==0)){
   recognition.start()
  }
  if((OSName.search("Linux")>-1)&&(coupureson==0)){
   recognition.start()
  }
  console.log('                       fin de la reco os : '+OSName)
};


if(OSName.search("Windows")>-1){////////alarme
document.getElementById("alarme").innerHTML='<canvas id="meter" width="500" height="5"></canvas>'
}

//if send
    recognition.onresult = function (event) {
          console.log(event.results+"                    event results");
          for (i = event.resultIndex; i < event.results.length; i++) { 

                var result = event.results[ event.resultIndex ];
              
                    if(result.isFinal===true){
                        textarea.value = event.results[i][0].transcript + "\n"
              
                           if(coupureson==0){
                              console.log("area value :                 "+textarea.value)
                              sendData(textarea.value)
                           }
                           else{}
                         
                    }

                    else{textarea.value = event.results[i][0].transcript + "\n";}      
        }

      
  }


////send function
function sendData(txt, confidence, type, force) {
  confidence=myIP
  type="reco"
  txt=txt.replace('%','pour cent')
  if(myIPinterphone==""){console.log("Send without interphone : " + txt + "(" + confidence + ")" + (force==true ? ' - FORCE': '') )}
  else{console.log("Send : par interphone" + txt + "(" + myIPinterphone + ")" + (force==true ? ' - FORCE': '') )};
  
  if(myIPinterphone==""){var url = "/jarvis?" + type + "=" + txt + "&confidence=" +  confidence}
  else{var url = "/jarvis?" + type + "=" + txt + "&confidence=" +  myIPinterphone}
  if (typeof force !== 'undefined') url+= '&force=' + force;
  console.log('url                  ',url);
  xmlhttp.open("GET",url,true);
  xmlhttp.send();
  recognition.stop();
  myIPinterphone=""
}

//////////////////////
//////////////////////
recognition.onspeechend = function() {
    console.log('recognition.onspeechend')
  }

  recognition.onerror = function(event) {
    console.log(event.error);
  }
  
  recognition.onaudiostart = function(event) {
      //Fired when the user agent has started to capture audio.
      console.log('SpeechRecognition.onaudiostart');
  }
  
  recognition.onaudioend = function(event) {
      //Fired when the user agent has finished capturing audio.
      console.log('SpeechRecognition.onaudioend');
  }
  
  //recognition.onend = function(event) {
      //Fired when the speech recognition service has disconnected.
    //  console.log('SpeechRecognition.onend');
 // }
  
  recognition.onnomatch = function(event) {
      //Fired when the speech recognition service returns a final result with no significant recognition. This may involve some degree of recognition, which doesn't meet or exceed the confidence threshold.
      console.log('SpeechRecognition.onnomatch');
  }
  
  recognition.onsoundstart = function(event) {
      //Fired when any sound — recognisable speech or not — has been detected.
      console.log('SpeechRecognition.onsoundstart');
  }
  
  recognition.onsoundend = function(event) {
      //Fired when any sound — recognisable speech or not — has stopped being detected.
      console.log('SpeechRecognition.onsoundend');
  }
  
  recognition.onspeechstart = function (event) {
      //Fired when sound that is recognised by the speech recognition service as speech has been detected.
      console.log('SpeechRecognition.onspeechstart');
  }
  recognition.onstart = function(event) {
      //Fired when the speech recognition service has begun listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.
      console.log('SpeechRecognition.onstart');
  }
recognition.start();