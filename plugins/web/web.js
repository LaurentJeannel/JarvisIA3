exports.action = function(data){

var request = require('request') ; var cheerio = require('cheerio');

try{
var url=JarvisIA.reco
var reg="/"+data.website+"(.+)/i" ; var rgxp = eval(reg) ; var urlchercher = url.match(rgxp) ; console.log(urlchercher)
var urlchercher = urlchercher[1].trim() ; console.log("on cherche : ",urlchercher)

//var urlchercher=urlchercher.replace(new RegExp("\\b" + "de" + "\\b","gi"),"");
 //var urlchercher=urlchercher.replace(new RegExp("\\b" + "des" + "\\b","gi"),"");
 //var urlchercher=urlchercher.replace(new RegExp("\\b" + "la" + "\\b","gi"),"");
 //var urlchercher=urlchercher.replace(new RegExp("\\b" + "les" + "\\b","gi"),"");
 //var urlchercher=urlchercher.replace(new RegExp("\\b" + "le" + "\\b","gi"),"");
 //var urlchercher=urlchercher.replace(new RegExp("\\b" + "l'" + "\\b","gi"),"");
 //var urlchercher=urlchercher.replace(new RegExp("\\b" + "au" + "\\b","gi"),"");
 //var urlchercher=urlchercher.replace(new RegExp("\\b" + "à" + "\\b","gi"),"");
 //var  urlchercher=urlchercher.replace(new RegExp("\\b" + "du" + "\\b","gi"),"");
 //var urlchercher=urlchercher.replace(new RegExp("\\b" + "aux" + "\\b","gi"),"");
 //var  urlchercher=urlchercher.replace(new RegExp("\\b" + "un" + "\\b","gi"),"");
 var urlchercher=urlchercher.replace(new RegExp("\\b" + " " + "\\b","gi"),"");
 //var urlchercher=urlchercher.replace(new RegExp("\\b" + "d'" + "\\b","gi"),""); 
var urlchercher=urlchercher.replace(new RegExp("\\b" + "é" + "\\b","gi"),"e");
 

function chrome(url){
  var exec = require('child_process').exec;
  //var proc = 'start firefox -new-window '+url ;
  var proc = 'start chrome --new-tab "'+url+'"'
  console.log(proc)
  var child = exec(proc);
  var valeurduspeak="|bonne lecture|n'y passe pas trop de temps|j'ai trouvé ceci|je t'affiche celà de suite"//phrase à dire
  //SARAH.run('speak', { 'nomduplugin' : nomduplugin , 'valeurduspeak' : valeurduspeak});
  JarvisIASpeech(valeurduspeak)
   return false
}//fin fnct chrome

        request({'uri':'https://www.google.fr/search?q='+urlchercher}, function (error, response, html) {
             var $ = cheerio.load(html);console.log("url cherché   ",urlchercher)
             var url = $('div.BNeawe.UPmit.AP7Wnd').first().text().trim()
             var url=url.split(' ')
             var url=url[0]
             chrome(url)

        });//fin request

}catch(err){console.log(err);return false}

}