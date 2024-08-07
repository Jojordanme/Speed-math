const question = document.getElementById("question");
const stats = document.getElementById('stats');
let score = 0
let levels = 1
let time = 5000
let ongoing = false
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
function getQuestion(level){
  let num1 = Math.floor(Math.random() * (10 * level)) + 1 ;
  let num2 = Math.floor(Math.random() * (10 * level)) + 1 * level;
  let operator = Math.floor(Math.random() * 4) + 1;
  if (operator == 1){
    question.innerHTML = num1 + " + " + num2;
    return num1 + num2;
  }
  else if (operator == 2){
    question.innerHTML = num1 + " - " + num2;
    return num1 - num2;
  }
  else if (operator == 3){
    if (Math.floor(Math.random() * 2) == 1){
      num1 = num1 * -1;
    }
    if (Math.floor(Math.random() * 2) == 0){
      num2 = num2 * -1;
    }
    question.innerHTML = num1 + " * " + num2;
    
    return num1 * num2;
  } else if (operator == 4) {
    num2 = Math.floor(Math.random() * (10 * level)) + 1;
    num1 = num2 * (Math.floor(Math.random() * (10 * level)) + 1);
    if (Math.floor(Math.random() * 2) == 1){
      num1 = num1 * -1;
    }
    if (Math.floor(Math.random() * 2) == 0){
      num2 = num2 * -1;
    }
    question.innerHTML = num1 + " / " + num2;
    return num1 / num2;
  }
  
}

function admitDefeat(){
  ongoing = false
  alert("YOU GOT IT WRONG LOL (Score: " + score + ")")
  score = 0
  
  levels = 1
  question.innerHTML = "Question"
  const element = document.createElement("button")
  element.innerHTML = "Start"
  element.setAttribute("id", "start")
  element.setAttribute("onclick", "startGame(); document.getElementById('start').remove()")
  document.getElementById('coa').appendChild(element)
}

async function startGame() {
  ongoing = true
  stats.innerHTML = "Level " + levels + ", Time = " + time/1000 + "s, Score = " + score;
  if (score==10){
    stats.innerHTML = "Level 2, Time = 5s, Score = "+score;
    levels = 2
    
  } else if(score==25) {
    stats.innerHTML = "Level 3, Time = 5s, Score = "+score;
    levels = 3
   
  } else if(score==50) {
    stats.innerHTML = "Level 4, Time = 5s, Score = "+score;
    levels = 4
    
  } else if(score == 100) {
    stats.innerHTML = "Level 5, Time = 5s, Score = "+score;
    levels = 5
    
  } 
  var answer = getQuestion(levels)
  document.getElementById('answer').value = "";
  setTimeout(() => {
    let userAnswer = Number(document.getElementById('answer').value);
    if (userAnswer == answer){
      score += 1
      
      startGame()
    }
    else{
      admitDefeat()
    }
    
  }, time)
}
