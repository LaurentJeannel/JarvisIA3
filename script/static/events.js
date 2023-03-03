function jarvispageEvents(ev) {
  obj = JSON.parse(ev.data);console.log("commande recus                 "+obj.command);

 if( (obj.command=='texteplugin')&&(obj.texteplugin.search("receivesms")>-1 ) ){
    var text=obj.texteplugin;
    var text=text.replace(new RegExp("receivesms","gi"),"");
    DOMnotification.textContent = text;
}
if( obj.command=='courses'){
    var text=obj.texteplugin
    //.replace('course','');
    //var text=text.replace(new RegExp("course","gi"),"");
    DOMcourse.textContent = text;
}   
 //try{console.log(obj.command,obj.texteplugin)}
//catch(err){console.log(err)}

///////

  switch (obj.command) {
  
    case 'refresh':
      location.reload();
      break;
 
      
    case 'INFOMODIALE':
        var text = '<marquee>INFOS MONDIALES : '+obj.INFOMODIALE+'</marquee>';
        document.getElementById("INFOMODIALE").innerHTML = text;  
    break;

    case 'SCENARIO':
        var textscenario = '<marquee>SCENARIO: '+obj.SCENARIO+'</marquee>';
        document.getElementById("SCENARIO").innerHTML = textscenario;
        // document.getElementById("INFOMODIALE").src=obj.INFOMODIALE    
    break;

    case 'iconedomotique':
        document.getElementById(obj.imgx).src=obj.onoff
        console.log('icne domo                     ',obj.imgx+"    "+obj.onoff+"    ")
    break;
    
    case 'saying':
        speechSynthesis.cancel();  
        recognition.stop() 
        console.log("SAYING  MY IP : "+myIP,' Texte recue : '+obj.html,' IP RETOUR : '+obj.myIPretour)
        try{Radio.pause();}
        catch(err){}
        
        //speech

      var xx=obj.html
      xx=xx.replace(new RegExp('\n', 'ig'),"")
      xx=xx.replace(new RegExp("  ", 'ig')," ")
      msg.text=xx    
      //msg.text=msg.text.slice(0,1700)//////protection longueur vocale
      console.log(msg.text.length,'    txt length')

          if( (myIP==obj.myIPretour) || (obj.myIPretour=='localhost')){
               coupureson=1
               console.log(msg.text,' message txt')
               textarearesponse.value=msg.text        
               console.log("debut de parole               ")
             
              document.getElementById("myImgvisage").src ="icones/Images/anim.gif"
              speechSynthesis.speak(msg);obj.command=""
                
              var r = setInterval(function () {
                     
                     console.log(speechSynthesis.speaking+"                  relancé par sécurité 14 s");
        
                     if (speechSynthesis.speaking==true) {
                        //document.getElementById("myImgvisage").src ="icones/Images/0.gif";
                        speechSynthesis.pause();
                        speechSynthesis.resume();//clearInterval(r) 
                 
                        }
                    else {
                        //speechSynthesis.cancel();clearInterval(r)//document.getElementById("myImgvisage").src ="icones/Images/0.png"
                        coupureson=0 
                        clearInterval(r);clearInterval(r2)
                    }
           
                    //recognition.start()
                    //resume reprendre  cancel cancel  pause pause 
                    //  speechSynthesis.cancel();speechSynthesis.resume();document.getElementById("myImgvisage").src ="icones/Images/0.gif"
            }, 14*1000);
            //32,767 characters

        var r2=setInterval(function(){
            if (speechSynthesis.speaking==true) {
            clearInterval(r);clearInterval(r2);console.log('arret sécurité 60 secondes');speechSynthesis.cancel()
            document.getElementById("myImgvisage").src ="icones/Images/0.gif"
            coupureson=0 ;recognition.start()
            }
            else{speechSynthesis.cancel();recognition.start()}
        }, 60*1000);


                    // speechSynthesis.cancel();             
                    msg.onend = function (event) {document.getElementById("myImgvisage").src ="icones/Images/0.gif"
                        //speechSynthesisInstance.cancel();
                        // speechSynthesis.cancel();speechSynthesis.resume() 
                        clearInterval(r);clearInterval(r2);console.log(event.elapsedTime,' ms onend activé')
                        var Radio=document.getElementById("myRadio")              
                        if(Radio.paused){Radio.play()}
                        msg.text=""
                        coupureson=0
                       
                        if(OSName.search("Windows")>-1){coupureson=0
                            recognition.start()
                        }
                        if(OSName.search("Linux")>-1){coupureson=0
                            recognition.start()
                        } 
                    };
        }
       
    break;
    
 


    case 'alarmeaudio': //alarme on off
        var text=obj.alarmeaudio
        //DOMalarmeaudio.textContent = text;
        console.log(text)
        alarmeaudio=text
    break;  

    case 'ImgAlarme': //alarme on off
        console.log(obj.ImgAlarme+"                     obj alarme")
        //var text=obj.ImgAlarme
        //DOMalarmeaudio.textContent = text;
        document.getElementById("ImgAlarme").src =obj.ImgAlarme
        // document.getElementById("Img0").src =obj.ImgAlarme
        //alarmeaudio=text
    break;



    case 'radio': //alarme on off

        console.log('radi       o'+text+myIP+obj.myIPretour)
        var text=obj.radio
        var Radio=document.getElementById("myRadio")
        //Radio.pause()
            
            if(myIP==obj.myIPretour){
                text=text.replace('"',"");text=text.replace('"',"")
                document.getElementById("myRadio").src=text 
                var Radio=document.getElementById("myRadio")
                    if(Radio.paused){Radio.play()}
                    //catch(err){}
            } 
        recognition.stop()  
    break;

  
     case 'musique': //alarme on off
        //Musique.pause()
         var text=obj.musique
        
            if(myIP==obj.myIPretour){
      
                //document.getElementById("myMusique").load();
                console.log(" MY IP : "+myIP,' Texte recue : '+obj.musique,' IP RETOUR : '+obj.myIPretour)
                //DOMalarmeaudio.textContent = text;
              
                 try{song.pause()}
                catch(err){console.log(err,"555555555555555555")}
                if(text=="pause"){var musique= document.getElementById("myMusique");musique.pause();break}
                if(text=="restard"){var musique= document.getElementById("myMusique");musique.play();break}
                var countmusique=0
                //for(var i=0;i<text.length;i++){
                var musique= document.getElementById("myMusique")
                console.log(text[0]+"                     text")
                var tempmusique=text[0].substring(3)
                console.log(tempmusique+"                       text suite")
                document.getElementById("myMusique").src='http://'+obj.myIPretour+':8091/'+tempmusique
                musique.onended = function() {////document.getElementById("myAudio").src ="musique/3.mp3" 
                countmusique=countmusique+1
                if(countmusique<text.length){
                    var tempmusique=text[countmusique].substring(3)
                    console.log("musique suivante                 "+countmusique+ " "+tempmusique)
                    document.getElementById("myMusique").src='http://'+obj.myIPretour+':8091/'+tempmusique
                }
                else{console.log("                    fin de la musique")}

              } 
    
        }
        //recognition.stop()  ;
    break; 





 case 'Deezer':
    if(myIP==obj.myIPretour){console.log(obj.Deezer,'eeeeeeeeeeee')
     document.getElementById("deezer").src = obj.Deezer;
     console.log(document.getElementById("deezer").src+"                   deezer") 
    }  
      break;


    default:
  }
}