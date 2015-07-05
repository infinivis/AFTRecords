var lockQuery = false;
var partieMaxSemaine = {};
var partieMaxJour = {};
 $(".logo").on("click", function() {
     
     if(!lockQuery){
         
     lockQuery = true;
     
     $.get("http://serveur:3000/api/parties")
            .done(function (data) {
                console.log(data);
                $.each(data, function (key, partie) {
                    
                var figure = $("<figure>");
                //joueurL
                var player1 = $("<article>").attr("class", "player1");
                var fig11 = $("<figcaption>");
                var h31 = $("<h3>").text("Joueur 1");
                $(fig11).append(h31);
                var fig12 = $("<figcaption>").text("Souffle moyen: "+partie.kmLmoy+" km/h");
                var fig13 = $("<figcaption>").text("Souffle max: "+partie.kmLmax+" km/h");
                player1.append(fig11).append(fig12).append(fig13);
                
                //joueurR
                var player2 = $("<article>").attr("class", "player2");
                var fig21 = $("<figcaption>");
                var h32 = $("<h3>").text("Joueur 2");
                $(fig21).append(h32);
                var fig22 = $("<figcaption>").text("Souffle moyen: "+partie.kmRmoy+" km/h");
                var fig23 = $("<figcaption>").text("Souffle max: "+partie.kmRmax+" km/h");
                player2.append(fig21).append(fig22).append(fig23);
                //score
                var score = $("<article>").attr("class", "score");
                var fig31 = $("<figcaption>").text("Abricots récoltés: "+partie.point);
                score.append(fig31);
                   //kmLmax
                   //partie.kmLmoy
                   //kmRmax
                   //kmLmoy
                   //point
                   //jour
                   //noPartie à ajouter
                    $.get("http://serveur:3000/api/images/" + partie.image_id) //fonctionne pas, il renvoit toutes les mimages et pas seulement celle dont l'id corrspond
                            .done(function (data) {
                                var img = $("<img>");
                                img.attr("src", data.dataUrl);
                                figure.append(img).append(player1).append(player2).append(score);
                                $(".slider").append(figure);
                                
                               
                               
                               
//intéresant pour la sécurité
//var u32 = new Uint32Array([data.dataUrl]);
//var b64encoded = btoa(String.fromCharCode.apply(null, u32));
//img.src="data:image/png;base64,"+b64encoded;
                                



                            });
                })


            });
     
     
    $.get("http://serveur:3000/api/parties/week")
            .done(function (semaine) {
               //bestWEEK  
                
                //joueurL
                var player1 = $("<article>").attr("class", "player1");
                var h31 = $("<h3>").text("Joueur 1");
                var div1 = $("<div>").text("Souffle moyen: "+semaine.kmLmoy+" km/h");
                var div2 = $("<div>").text("Souffle max: "+semaine.kmLmax+" km/h");
                
                player1.append(h31).append(div1).append(div2);
                
                //joueurR
                var player2 = $("<article>").attr("class", "player2");
                var h32 = $("<h3>").text("Joueur 1");
                var div21 = $("<div>").text("Souffle moyen: "+semaine.kmRmoy+" km/h");
                var div22 = $("<div>").text("Souffle max: "+semaine.kmRmax+" km/h");
                
                player2.append(h32).append(div21).append(div22);
                
                //score
                var score = $("<article>").attr("class", "score");
                var div31 = $("<div>").text("Abricots récoltés: "+semaine.point);
                score.append(div31);
                   //kmLmax
                   //partie.kmLmoy
                   //kmRmax
                   //kmLmoy
                   //point
                   //jour
                   //noPartie à ajouter
                    $.get("http://serveur:3000/api/images/"+semaine.image_id) //partieMaxSemaine.image_id) //fonctionne pas, il renvoit toutes les mimages et pas seulement celle dont l'id corrspond
                            .done(function (data) {
                                var img = $("<img>");
                                img.attr("src", data.dataUrl);
                                $(".bestStatsWeek")
                                        .append(img)
                                        .append(player1)
                                        .append(player2)
                                        .append(score);
                            });
                           })
                           
                  //bestDAY
            $.get("http://serveur:3000/api/parties/day")
            .done(function (day) {
                
                //joueurL
                var Dplayer1 = $("<article>").attr("class", "player1");
                var Dh31 = $("<h3>").text("Joueur 1");
                var Ddiv1 = $("<div>").text("Souffle moyen: "+day.kmLmoy+" km/h");
                var Ddiv2 = $("<div>").text("Souffle max: "+day.kmLmax+" km/h");
                
                Dplayer1.append(Dh31).append(Ddiv1).append(Ddiv2);
                
                //joueurR
                var Dplayer2 = $("<article>").attr("class", "player2");
                var Dh32 = $("<h3>").text("Joueur 1");
                var Ddiv21 = $("<div>").text("Souffle moyen: "+day.kmRmoy+" km/h");
                var Ddiv22 = $("<div>").text("Souffle max: "+day.kmRmax+" km/h");
                
                Dplayer2.append(Dh32).append(Ddiv21).append(Ddiv22);
                
                //score
                var Dscore = $("<article>").attr("class", "score");
                var Ddiv31 = $("<div>").text("Abricots récoltés: "+day.point);
                Dscore.append(Ddiv31);
                   //kmLmax
                   //partie.kmLmoy
                   //kmRmax
                   //kmLmoy
                   //point
                   //jour
                   //noPartie à ajouter
                    $.get("http://serveur:3000/api/images/" + day.image_id) //fonctionne pas, il renvoit toutes les mimages et pas seulement celle dont l'id corrspond
                            .done(function (data) {
                                var Dimg = $("<img>");
                                Dimg.attr("src", data.dataUrl);
                                $(".bestStatsDay")
                                        .append(Dimg)
                                        .append(Dplayer1)
                                        .append(Dplayer2)
                                        .append(Dscore);
                            });
                }) 
     
     }//end lock
     
     
     
 });
  
  