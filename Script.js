var questions= [
    ["string values must be enclosed in___ when being assigned to variables",["commas","Curly Brackets","Quotes","Parenthesis"],"Quotes"],
    ["Commonly used data types do not include",["Booleans","Strings","Alerts","Numbers"],"Alerts"],
    ["The conditions in an if/else statement is enclosed in",["Quotes","Curly Brackets","Parenthesis","Square Brackets"],"Parenthesis"],
    ["Arrays in Javascript can be used to store",["Numbers and Strings","Other Arrays","Booleans","All of the above"],"All of the above"],
    ["A useful tool for debugging is ",["console.log","for loops","Terminal Bash","Javascript"],"console.log"]
];

function shuffle(array){
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}



questions= shuffle(questions);
// questions will now always be in a new order

function displayAnswers(){
  aEl.textContent=questions[currQuestion][1][0]
  bEl.textContent=questions[currQuestion][1][1]
  cEl.textContent=questions[currQuestion][1][2]
  dEl.textContent=questions[currQuestion][1][3]
}
function setQuestionText() {
  countEl.textContent = questions[currQuestion][0];
}



var question = "No Question Yet";

var aEl = document.querySelector('#a');
var bEl = document.querySelector('#b');
var cEl = document.querySelector('#c');
var dEl = document.querySelector('#d');
var countEl = document.querySelector('#count');
var countdownEl = document.querySelector('#countdown');
var startEl = document.querySelector('#start')
var highscoresEl = document.querySelector('#highscores');

var points=0;
var currQuestion=0;

function verifyAnswer(){

  var guess=this.textContent;
  if (guess==questions[currQuestion][2]){
    points++;
    currQuestion++;
    if(currQuestion==questions.length){
      highscoreChart()
      // go to high score stuff
    }
  }
  else{
    counter=counter-10;
    currQuestion++;
    }
    if(currQuestion!=questions.length){
    setQuestionText();
    displayAnswers();}
    else{
      highscoreChart()
      // high score stuff
    }
    
  }

bEl.addEventListener('click', verifyAnswer)
aEl.addEventListener('click', verifyAnswer)
cEl.addEventListener('click', verifyAnswer)
dEl.addEventListener('click', verifyAnswer)



function addScore(score,innials){
  scoresStr=localStorage.getItem("highscores");
  var highscores=JSON.parse(scoresStr);
  if (highscores===null)
    highscores=[]
  highscores.push([score,innials])
  highscores.sort()
  localStorage.setItem("highscores",JSON.stringify(highscores));
}
 

var counter=60;
var scoreadded=false;
function highscoreChart(){

  aEl.style.visibility='hidden';
  bEl.style.visibility='hidden';
  cEl.style.visibility='hidden';
  dEl.style.visibility='hidden';
  countEl.style.visibility='hidden';
  if (not scoreadded){
  var initals = prompt("Please type your innitals","AAA");
  addScore(points,initals);
  scoreadded=true;
  }
  window.location.href="highscores.html"
}


startEl.addEventListener('click', function(){
  var startTest = setInterval(function(){
    countdownEl.textContent=counter;
    counter--;
    if (counter <= 0){
        clearInterval(startTest);
        //Add end of test stuff
        highscoreChart()
    ;}
},1000);
  startEl.style.visibility='hidden';
  aEl.style.visibility='visible';
  bEl.style.visibility='visible';
  cEl.style.visibility='visible';
  dEl.style.visibility='visible';
  setQuestionText();
  displayAnswers();
});