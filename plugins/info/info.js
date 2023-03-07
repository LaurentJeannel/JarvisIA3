exports.action = function(data){



var moment=require('moment');moment.locale('fr')
var informationtexte=[]
let Parser = require('rss-parser');
let parser = new Parser();

(async () => {

  let feed = await parser.parseURL('https://news.google.com/rss?hl=fr&gl=FR&ceid=FR:fr');
  console.log(feed.title);

  //feed.items.forEach(item => {
 
    //console.log(item.title + ' : ')
    //informationtexte.push(item.title+" : ")
  //});

for(var i=0;i<5;i++){
 console.log(feed.items[i].title)
informationtexte.push(feed.items[i].title+" : ")
}


JarvisIAInfo(moment().calendar()+" "+informationtexte)
var informationtextejson= JSON.stringify(informationtexte)
if(data.infomiroir=="0"){ 
JarvisIASpeech(informationtextejson+"|le monde est fou|j'espère que tout vas s'arranger|demain est en autre jour|cela ira mieux")
}

})();


}

 
