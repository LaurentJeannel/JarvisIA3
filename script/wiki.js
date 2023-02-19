exports.init = function () {
try{


var requestjarviswsrnodejs = require('request') ; var cheerio = require('cheerio')

console.log('passage par wikiiiii stopppppppppp')

var temp=JarvisIA.reco ; var reg=["de ","qui est","recherche","  ","qui était"]

for(var a=0;a<reg.length;a++){ temp=temp.replace(reg[a],"") }

temp=temp.replace('€','euros') ; temp=temp.replace("œ","oe") ; temp=temp.trim()
//temp=temp.replace(new RegExp(" ", 'ig'),"-")

var url="https://www.google.fr/search?q="+temp
console.log(url)

        requestjarviswsrnodejs({'uri':url, 'headers':{'Accept-Charset': 'utf-8'},'encoding':'binary'}, function (error, response, html) {
             var $ = cheerio.load(html);
            
             var search=$(".BNeawe .iBp4i").text()
             console.log(search," first ")
             var search1=$(".BNeawe .s3v9rd").eq(0).text()
             console.log(search1," second ") ;
             if (search.length!==0){console.log('FIND : ',search) ; JarvisIASpeech(search);return}
             if (search1.length!==0){console.log('FIND : ',search1) ; JarvisIASpeech(search1);return}
             else(JarvisIASpeech("je n'ai rien trouvé"))
        });//fin request

return

//si CHAT GPT enlever ligne 5 à 32 et remplir apikey
var temp=JarvisIA.reco
const { Configuration, OpenAIApi } = require("./openai");
JarvisIASpeech('je réfléchis à ta question')

const configuration = new Configuration({
  apiKey: 'XXXXXXXXXXXXXXXXXXXXXXXX',
});
const openai = new OpenAIApi(configuration);


(async() => {
      const gptResponse = await openai.createCompletion({
      model: "text-curie-001",
      prompt: temp,
      temperature: 1,
      max_tokens: 1000,
      })

      console.log("question : "+temp)
      console.log("réponse GTP : "+gptResponse.data.choices[0].text)
      JarvisIASpeech(gptResponse.data.choices[0].text)
    })()

//Davinci (text-davinci-003) : c’est le modèle le plus avancé. Davinci est particulièrement adapté aux intentions complexes, aux relations de cause à effet et à la création de résumés de contenus.
//Curie (text-curie-001) : performant et beaucoup plus rapide. Idéal pour la traduction, la classification complexe, l’analyse de texte et les résumés.
//Babbage (text-babbage-001) : un modèle efficace pour les catégorisations plus simples et la classification sémantique.
//Ada (text-ada-001) : très rapide et peu coûteux, à privilégier pour les classifications les plus simples, l’extraction de texte et la correction d’adresses.


return false
}catch(err){console.log(err)}
}
