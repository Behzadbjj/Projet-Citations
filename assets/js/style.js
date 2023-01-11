// left side
let génereragauche = document.getElementById('leftBtn');
let displayLeft = document.getElementById('displayLeft');
let nbrLeft = document.getElementById('counterLeft');

let firstGénerer = ['Les gens ne peuvent pas ', ' La suspicion ', 'Le ressentiment', 'Il semble que ','Tu veuilles ', 'Je mentirais si',' Je disais'];
let secondGénerer = ['ne peuvent pas se montrer', 'que les choses ', 'mais tu ne pourras plus', 'selon mon plan'];
let lastGénerer = ['ne disparaissent jamais.', 'tes meilleurs pas.', 'n\' est-ce pas?', 'leurs vrais sentiments.'];

génereragauche.addEventListener("click", left);
function left() {

  while (displayLeft.firstChild) {
    displayLeft.removeChild(displayLeft.firstChild);

  }
  let myError1 = document.getElementById('error1');
  myError1.setAttribute("style","font-size:1.2rem;color:red;");


  let myInput1 = document.getElementById('counterLeft');
  let myRegex = /^[1-5]$/;
  if (myInput1.value.trim() == "") {
    myError1.innerHTML = 'le champs Number est requis.' + '<br>'+ '<br>';
    e.preventDefault();
  } else if (myRegex.test(myInput1.value) == false) {
    myError1.innerHTML = 'veuillez entrer un nombre entre 1 et 5' + '<br>' + '<br>';
    e.preventDefault();
  } else {
    myError1.innerHTML = '';
  }
  


  for (i = 0; i < nbrLeft.value; i++) {
    let randomNumber1 = Math.floor(Math.random() * (firstGénerer.length));
    let randomNumber2 = Math.floor(Math.random() * (secondGénerer.length));
    let randomNumber3 = Math.floor(Math.random() * (lastGénerer.length));
    let afficherPLeft = document.createElement('p');
    afficherPLeft.textContent = firstGénerer[randomNumber1] + ' ' + secondGénerer[randomNumber2] + ' ' + lastGénerer[randomNumber3];
    displayLeft.appendChild(afficherPLeft);
    afficherPLeft.setAttribute("style","font-size:1.2rem; margin-left:30px;");

  }
}


// right side 
let génererdroit = document.getElementById('rightBtn');
let fGénerer = ["Une fois que ","Vous avez remis,"," Même le plus fort ","Des adversaires,"  , "Ce n'est pas le visage,"," Le travail acharné ,"];

let sGénerer = [" en question vos propres,", "a toujours ,", "pour ceux qui  ,", " ce sont les décisions que,"];
let lGénerer = [" vous avez terminé. ", " une faiblesse. ", "l'on prend dans sa vie.  ", " napporte rien. "," en eux-mêmes."];

let displayRight = document.getElementById('displayRight');
génererdroit.addEventListener("click", right);
function right() {
  let nbrRight = document.getElementById('counterRight');

  while (displayRight.firstChild) {
    displayRight.removeChild(displayRight.firstChild);

  }
  // vérification le number de choix 1-5
  let myError2 = document.getElementById('error2');
  myError2.setAttribute("style","font-size:1.2rem;color:red;");

  let myInput1 = document.getElementById('counterRight');
  let myRegex = /^[1-5]$/;
  if (myInput1.value.trim() == "") {
    myError2.innerHTML = 'le champs Number est requis.'+ '<br>' + '<br>';
    e.preventDefault();
  } else if (myRegex.test(myInput1.value) == false) {
    myError2.innerHTML = 'veuillez entrer un nombre entre 1 et 5' + '<br>' + '<br>';
    myError2.style.color = 'red';
    e.preventDefault();
  } else {
    myError2.innerHTML = '';

  }
  //le boucle
  for (i = 0; i < nbrRight.value; i++) {
    let randomNumber4 = Math.floor(Math.random() * (fGénerer.length));
    let randomNumber5 = Math.floor(Math.random() * (sGénerer.length));
    let randomNumber6 = Math.floor(Math.random() * (lGénerer.length));
    let afficherP = document.createElement('p');
    afficherP.textContent = fGénerer[randomNumber4] + ' ' + sGénerer[randomNumber5] + ' ' + lGénerer[randomNumber6];
    displayRight.appendChild(afficherP);
    afficherP.setAttribute("style","font-size:1.2rem;color:black; margin-right:30px;");

  }


}




