/*Le jeu du morpion*/
/*function player */
function isWin(button) {
    return button.innerHTML.length == 0;
  }
  
  function setSymbol(btn, symbole) {
    btn.innerHTML = symbole;
  }
  
  /*8 Combinaisons gagnantes*/ 
  function rechercherVainqueur(element, player, tour) {
    if (
      element[0].innerHTML == player[tour] &&
      element[1].innerHTML == player[tour] &&
      element[2].innerHTML == player[tour]
    ) {
      element[0].style.backgroundColor = "#9ACD32";
      element[1].style.backgroundColor = "#9ACD32";
      element[2].style.backgroundColor = "#9ACD32";
      return true;
    }
    if (
      element[3].innerHTML == player[tour] &&
      element[4].innerHTML == player[tour] &&
      element[5].innerHTML == player[tour]
    ) {
      element[3].style.backgroundColor = "#9ACD32";
      element[4].style.backgroundColor = "#9ACD32";
      element[5].style.backgroundColor = "#9ACD32";
      return true;
    }
    if (
      element[6].innerHTML == player[tour] &&
      element[7].innerHTML == player[tour] &&
      element[8].innerHTML == player[tour]
    ) {
      element[6].style.backgroundColor = "#9ACD32";
      element[7].style.backgroundColor = "#9ACD32";
      element[8].style.backgroundColor = "#9ACD32";
      return true;
    }
  
    if (
      element[0].innerHTML == player[tour] &&
      element[3].innerHTML == player[tour] &&
      element[6].innerHTML == player[tour]
    ) {
      element[0].style.backgroundColor = "#9ACD32";
      element[3].style.backgroundColor = "#9ACD32";
      element[6].style.backgroundColor = "#9ACD32";
      return true;
    }
  
    if (
      element[1].innerHTML == player[tour] &&
      element[4].innerHTML == player[tour] &&
      element[7].innerHTML == player[tour]
    ) {
      element[1].style.backgroundColor = "#9ACD32";
      element[4].style.backgroundColor = "#9ACD32";
      element[7].style.backgroundColor = "#9ACD32";
      return true;
    }
  
    if (
      element[2].innerHTML == player[tour] &&
      element[5].innerHTML == player[tour] &&
      element[8].innerHTML == player[tour]
    ) {
      element[2].style.backgroundColor = "#9ACD32";
      element[5].style.backgroundColor = "#9ACD32";
      element[8].style.backgroundColor = "#9ACD32";
      return true;
    }
  
    if (
      element[0].innerHTML == player[tour] &&
      element[4].innerHTML == player[tour] &&
      element[8].innerHTML == player[tour]
    ) {
      element[0].style.backgroundColor = "#9ACD32";
      element[4].style.backgroundColor = "#9ACD32";
      element[8].style.backgroundColor = "#9ACD32";
      return true;
    }
  
    if (
      element[2].innerHTML == player[tour] &&
      element[4].innerHTML == player[tour] &&
      element[6].innerHTML == player[tour]
    ) {
      element[2].style.backgroundColor = "#9ACD32";
      element[4].style.backgroundColor = "#9ACD32";
      element[6].style.backgroundColor = "#9ACD32";
      return true;
    }
  }
  /*Si match nul*/
  function matchNul(element) {
    for (var i = 0, len = element.length; i < len; i++) {
      if (element[i].innerHTML.length == 0) return false;
    }
  
    return true;
  }
  
  var Afficheur = function(element) {
    var affichage = element;
    
      function setText(message) {
      affichage.innerHTML = message;
      }
    
      return { envoiMessage: setText };
    };
    
    function main() {
      var element = document.querySelectorAll("#game button"); /* tout les button*/
      var player = ["X", "O"];
      var tour = 0;
      var jeuEstFini = false;
      var afficheur = new Afficheur(document.querySelector("#game_status"));
      afficheur.envoiMessage(
        "Le jeu peut commencer !Joueur " +
          player[tour] +
          " c'est votre tour."
      );
      for (var i = 0, len = element.length; i < len; i++) {
        element[i].addEventListener("click", function() {
          if (jeuEstFini) return;
    
          /*Vérifie si il y à déjà un player placé*/ 
          if (!isWin(this)) {
            afficheur.envoiMessage(
              "Case occupée !  Joueur " +
                player[tour] +
                " c'est toujours à vous !"
            );
            /*Sinon rempli avec le joueur en fonction du tour*/
          } else {
            setSymbol(this, player[tour]);
            jeuEstFini = rechercherVainqueur(element, player, tour);
  
         /*Si combinaison ok - affiche vert */
            if (jeuEstFini) {
              afficheur.envoiMessage(
                "Le joueur " +
                  player[tour] +
                  ' a gagné ! <a href="morpion.html">Rejouer</a>'
              );
              return;
            }
    
            if (matchNul(element)) {
              afficheur.envoiMessage(
                'Match Nul ! <br/> <a href="morpion.html">Rejouer</a>'
              );
              return;
            }
    
            tour++;
            tour = tour % 2;
            afficheur.envoiMessage("Joueur " + player[tour] + " c'est à vous !");
          }
        });
      }
    }
    
    main();
    