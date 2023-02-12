var highscoresEl = document.querySelector('#highscores');

function addElement(score,initals) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(initals+": "+score));
    highscoresEl.appendChild(li);
  }

scoresStr=localStorage.getItem("highscores");
var highscores=JSON.parse(scoresStr);
for(var i=highscores.length-1; i>=0;i--){
    pair=highscores[i];
    score=pair[0];
    initals=pair[1];
    addElement(score,initals);
}
