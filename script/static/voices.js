//old
voicess=function(){
        speechSynthesis.getVoices().forEach(function(voice) {});

setTimeout(function(){ //mise en forme voice
        nbvoice=-1
        msg = new SpeechSynthesisUtterance();
        voices = window.speechSynthesis.getVoices();
        //msg.voice = voices[0]; // Note: some voices don't support altering params
        msg.voiceURI = 'native';
        msg.volume = 1; // 0 to 1
        msg.rate = 1; // 0.1 to 10
        msg.pitch = 1; //0 to 2
        msg.lang = 'fr-FR';
        speechSynthesis.getVoices().forEach(function(voice) { nbvoice=nbvoice+1
        console.log("numéro "+nbvoice+" : "+voice.name, voice.default ? voice.default :''+voices[0]);
            for(var j=0;j<voices.length;j++){
                if(voices[j].name.search('Google français')>-1){console.log("voice  ; ",j);msg.voice = voices[j]}
            }
        });
}, 1000);
}
//voicess()

//new
               function setSpeech() {
                        return new Promise(
                                function (resolve, reject) {
                                    let synth = window.speechSynthesis;
                                    let id;

                                    id = setInterval(() => {
                                        if (synth.getVoices().length !== 0) {
                                            resolve(synth.getVoices());
                                            clearInterval(id);
                                        }
                                    }, 10);
                                }
                        )
                }

let s = setSpeech();
s.then((voices) => {
        msg = new SpeechSynthesisUtterance();
        msg.voiceURI = 'native';
        msg.volume = 1; // 0 to 1
        msg.rate = 1; // 0.1 to 10
        msg.pitch = 1; //0 to 2
        msg.lang = 'fr-FR';
                for(var j=0;j<voices.length;j++){
                        if(voices[j].name.search('Google français')>-1){console.log("voice  ; ",j);msg.voice = voices[j]}
                }
});    // Or any other actions you want to take...
