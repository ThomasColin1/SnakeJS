/*function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}*/
var pos;
var dir;
var posPomme;
var dir2;

function Jeu() {
    pos = [0]
    dir = 1;
    dir2 = 1;
    var posString = pos[0].toString();
    document.getElementById(posString).style.backgroundColor = "blue";
    posPomme = Pomme();
    var boucle = setInterval(function() {
        if (dir == 1) {
            dir2=dir;
            if ((pos[0] % 10) != 9) {
                pos.unshift(pos[0] + 1);
            } else {
                pos.unshift(pos[0] - 9);
            }
        }
        if (dir == 2) {
            dir2=dir;
            if (pos[0] < 90) {
                pos.unshift(pos[0] + 10);
            } else {
                pos.unshift(pos[0] - 90);
            }
        }
        if (dir == 3) {
            dir2=dir;
            if ((pos[0] % 10) != 0) {
                pos.unshift(pos[0] - 1);
            } else {
                pos.unshift(pos[0] + 9);
            }
        }
        if (dir == 4){
            dir2=dir;
            if (pos[0] > 10) {
                pos.unshift(pos[0] - 10);
            } else {
                pos.unshift(pos[0] + 90);
            }
        }
        if (pos[0] == posPomme) {
            pos.push(pos[pos.length - 1]);
            while (pos.includes(posPomme)) {
                document.getElementById(posPomme).style.backgroundColor = "blue";
                posPomme = Pomme();
            }
        }
        if(pos.slice(1,pos.length-1).includes(pos[0])){
            alert("MORT !!!! Score : "+pos.length);
            clearInterval(boucle);
        }
        posString = pos[pos.length - 1].toString();
        document.getElementById(posString).style.backgroundColor = "green";
        pos.pop();
        posString = pos[0].toString();
        document.getElementById(posString).style.backgroundColor = "blue";
    }, 200);
}



window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
        return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
    }

    switch (event.key) {
        case "ArrowDown":
            dir = 2;
            if(Math.abs(dir - dir2)==2){
                dir=dir2;
            }
            break;
        case "ArrowUp":
            dir = 4;
            if(Math.abs(dir - dir2)==2){
                dir=dir2;
            }
            break;
        case "ArrowLeft":
            dir = 3;
            if(Math.abs(dir - dir2)==2){
                dir=dir2;
            }
            break;
        case "ArrowRight":
            dir = 1;
            if(Math.abs(dir - dir2)==2){
                dir=dir2;
            }
            break;
        case "Enter":
            alert("yoooo");
            break;
        case "Escape":
            // Faire quelque chose pour la touche "esc" pressée.
            break;
        default:
            return; // Quitter lorsque cela ne gère pas l'événement touche.
    }

    // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
    event.preventDefault();
}, true);

function Pomme() {
    var posP = Math.floor(Math.random() * 100);;
    document.getElementById(posP).style.backgroundColor = "red";
    return posP;
}
