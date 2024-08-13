const question = document.getElementById("question");
const audio = new Audio('Vine boom.mp3');
const stats = document.getElementById('stats');
let score = 0
let levels = 1
let time = 5000
let ongoing = false
let answer = 0
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
  let num2 = Math.floor(Math.random() * (10 * level)) + 1 ;
  let operator = Math.floor(Math.random() * 4) + 1;
  if (document.getElementById("hard").checked == true){
    operator = Math.floor(Math.random() * 8) + 1;
  }
  if (operator == 1){
    question.innerHTML = num1 + " + " + num2;
    return num1 + num2;
  }
  else if (operator == 2){
    question.innerHTML = num1 + " - " + num2;
    return num1 - num2;
  }
  else if (operator == 3 || operator >= 5){
    if (levels <= 3){
      if (num2 >= 11){
        num2 = Math.floor(Math.random() * 10) + 1
      }
    } else if (levels <= 5){
      num2 = Math.floor(Math.random() * 20) + 1
    } else if (levels == 6) {
      num2 = Math.floor(Math.random() * 40) + 1
    }
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
// <img src="boss.png" class="gremlin" width="250" height="150" >

// <img src="ON.png" class="lightBulb" width="250" height="250" >
function lightsOUT(){
  document.getElementById('lights').innerHTML = `<img src="ON.png" id="lightBlub" class="lightBulb" width="250" height="250" >`
  document.getElementById("timer").innerHTML = `<div class="round-time-bar" data-style="smooth" style="--duration: 9.5;"><div></div></div>`
  setTimeout(function(){
    document.getElementById('lightBlub').classList.remove("lightBulb")
      document.getElementById('lightBlub').classList.add("lightBulbNormal")
    document.getElementById('lightBlub').src = "OFF.png";
    document.body.style.backgroundColor = "black";

    setTimeout(function(){
      document.getElementById('lightBlub').classList.remove("lightBulbNormal")
      document.getElementById('lightBlub').classList.add("lightBulb2")
      setTimeout(function(){
        document.getElementById('lightBlub').remove()
    },495)
    },1000)
  },1500)

  
}
function trollololol(){
  document.getElementById("alienDiv").innerHTML = "<img src='boss.png' class='gremlin' width='250' height='150' >"
  
  
  
  setTimeout(function(){
    stats.innerHTML = "Level " + levels + ", Time = " + time/1000 + "s, Score = " + score;
    document.getElementById("timer").innerHTML = `<div class="round-time-bar" data-style="smooth" style="--duration: 3.5;"><div></div></div>`
    answer = getQuestion(levels);
  }, (2000));
}

function admitDefeat(){
  document.getElementById("title").innerHTML = "Speed math"

  ongoing = false
  document.getElementById('hard').disabled = false
  alert("YOU GOT IT WRONG LOL THE ANSWER WAS " + answer + " (Score: " + score + ")")
  score = 0
  
  levels = 1
  question.innerHTML = "Question"
  const element = document.createElement("button")
  element.innerHTML = "Start"
  element.setAttribute("id", "start")
  element.setAttribute("onclick", "startGame(); document.getElementById('start').remove()")
  document.getElementById('coa').appendChild(element)
}

function jumpscare () {
  
  audio.play();
  const element = document.createElement("img")
  
  element.setAttribute("src", "skull.png")
  element.setAttribute("class", "boo")
  document.getElementById('start').disabled = true;
  
  document.getElementById('coa').appendChild(element)
  
  setTimeout(() => {
    element.setAttribute("class", "boo2")
    setTimeout(() => {
      element.remove()
      document.getElementById('start').disabled = false
    },2000)
  },750)
}
// <div class="round-time-bar" data-style="smooth" style="--duration: 5;">
async function startGame() {
  let trolling = false
  ongoing = true
  let interval
  document.body.style.backgroundColor = "white";
  
  
  if (levels >= 3){
    if (Math.floor(Math.random() * 2) == 1){
      trolling = true
      time = 6500
      setTimeout(() => {
        
        trollololol()
      },1000)
    } else {
      if (document.getElementById('hard').checked == true){
      time = 2500
    } else {
      time = 5000
    }
    }
  }
  if (levels >= 4){
    if (!trolling){
      time = 10000
      trolling = true
    setTimeout(() => {
        
        lightsOUT()
      },500)
    }
    
  }
  document.getElementById('hard').disabled = true
  if (score == 0){
    if (document.getElementById('hard').checked == true){
      time = 2500
    } else {
      time = 5000
    }
  }
  document.getElementById("timer").innerHTML = `<div class="round-time-bar" data-style="smooth" style="--duration: ${time/1000};"><div></div></div>`
  if (score==10){
    
    
    levels = 2
    
  } else if(score==25) {
    document.getElementById("title").innerHTML = "They are here."
   
    levels = 3
   
  } else if(score==40) {
    document.getElementById("title").innerHTML = "Hehehe..."
    
    levels = 4
    
  } else if(score == 60) {
    
    levels = 5
    
  } else if(score == 80) {
    
    levels = 6
  } else if(score == 100){
    levels = 7
  }
  stats.innerHTML = "Level " + levels + ", Time = " + time/1000 + "s, Score = " + score;
  
  answer = getQuestion(levels)
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

var checkbox = document.getElementById('hard');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    jumpscare()
  } 
});