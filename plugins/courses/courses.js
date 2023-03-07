exports.init = function(){
setTimeout(function(){ 
 try{
    var path=require('path')
 var filePath = path.resolve('%CD%', './plugins/courses/coursesmemoire.json').replace('\\%CD%', '');
  var fs = require('fs');
  var fichiercourse = fs.readFileSync(filePath,{encoding:'utf8', flag:'r'}); 
  console.log(fichiercourse,'rrrrrrrrrrrrrrrrrr')
     
}

catch(err){console.log(err,"ésssssssssé")}
JarvisCourses(fichiercourse)  ; },5000);
}

exports.action = (data) => {//nécéssite plug push pour envoie sur smart
console.log(data+JarvisIA.reco)

  var filePath = path.resolve('%CD%', './plugins/courses/coursesmemoire.json').replace('\\%CD%', '');
  var fs = require('fs');
  var fichiercourse = fs.readFileSync(filePath,{encoding:'utf8', flag:'r'}); 
  console.log(fichiercourse)
  var objet = JSON.parse(fichiercourse);var longueur = objet.length;var jsonStr = JSON.stringify(objet);var cd=(objet[1]);
try{
    var query=JarvisIA.reco   
    var rgxp = /courses (.+)/i; var query = query.match(rgxp);
    var query=query[1]
    console.log(query+" : recus")
}catch(err){var query=""}

if (data.courses == "on") {      
    
  if(query==""){JarvisIASpeech('rien à ajouter') ;return }
  if (jsonStr.indexOf(query) > -1  ){JarvisIASpeech (query + ", est déja présent dans les courses|tu as peur de manquer|tu vas pas acheter tout en double");}
  else {
         JarvisIASpeech(query+" ajouté à la liste de course")
         objet.push(query); var new_jsonStr = JSON.stringify(objet);        
         fs.writeFile(filePath,new_jsonStr ,  (err) => {});//fin fs write
         JarvisCourses(new_jsonStr)
  }
  return
}//fin if on

if (data.courses == "off") {
    if(query==""){JarvisIASpeech('rien à ajouter') ;return }
    if(objet.indexOf(query)==-1){JarvisIASpeech('inconnu');return}
    objet.splice(objet.indexOf(query) ,1);
    var new_jsonStr = JSON.stringify(objet);                           
    fs.writeFile(filePath, new_jsonStr,  (err) => {  if (err) throw err });JarvisCourses(new_jsonStr)
    return
}//fin if

if (data.courses == "pushliste"){
 JarvisIA.reco= "envoie un sms à laurent disant "+jsonStr
 JarvisIARun(['push','data.push="envoie un sms à laurent disant"'])
return 
}//fin if

if (data.courses =="liste"){console.log('chhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhoi&    ',jsonStr)
 JarvisIASpeech(jsonStr);JarvisCourses(jsonStr)
}//fin if

if (data.courses=="vide"){
     var filePath = path.resolve('%CD%', './plugins/courses/coursesmemoire.json').replace('\\%CD%', '');
		 fs.writeFileSync(filePath,'[]',"UTF-8"); // Remet le fichier courses.json a zéro pour une utilisation future
	   JarvisIASpeech("suppression de la liste de course|tu est sur de tout avoir acheter|ne manque t'il rien|as tu tout acheter ?");JarvisCourses("vide")
     return
}//fin if

return
}