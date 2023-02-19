setInterval(()=>{
           const time = document.querySelector(".display #time");
           const date1 = document.querySelector(".display1 #date");
           let date = new Date();
           let hours = date.getHours();
           let minutes = date.getMinutes();
           let seconds = date.getSeconds();
           let day_night = "AM";
           if(hours > 12){
             day_night = "PM";
             hours = hours - 12;
           }
           if(seconds < 10){
             seconds = "0" + seconds;
           }
           if(minutes < 10){
             minutes = "0" + minutes;
           }
           if(hours < 10){
             hours = "0" + hours;
           }
      let jours = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
      let mois = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");
      var resultat = jours[date.getDay()] + " ";   // nom du jour
     resultat += date.getDate() + " ";   // numero du jour
     resultat += mois[date.getMonth()] + " ";   // mois
     resultat += date.getFullYear();
      time.textContent = hours + ":" + minutes + ":" + seconds + " "+ day_night;
      date1.textContent = resultat;
         });
