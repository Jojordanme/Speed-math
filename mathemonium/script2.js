const question = document.getElementById("question");
const audio = new Audio('../Vine boom.mp3');
const music = new Audio('music.mp3');
music.loop = true
const stats = document.getElementById('stats');
let score = 0
let levels = 1
let otherInterval = null
let justHadMinus = true
let time = 2000
let ongoing = false
let its = false
let answer = 0
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}



setInterval(function(){
  if (Number(document.getElementById('answer').value) == answer || !ongoing){
    correct = true
  } else {
    correct = false
  }
    document.getElementById('hsmsms').style =`width:${(time /2000) * 90}%`
},10)



const stuffHeCanSay = [
  "Math is the best subject fr",
  "Lets see if you can get this correct",
  "I think you can do it",
  "This is an easy one",
  "Very easy you should be able to do it",
  "blue",
  "9+10=19",
  "Come on this one is an easy one",
  "Faster bruh"
]

let interval
let correct = false



function getQuestion(level){
  let num1 = Math.floor(Math.random() * (10 * level)) + 1 ;
  let num2 = Math.floor(Math.random() * (10 * level)) + 1 ;
  let operator = Math.floor(Math.random() * 4) + 1;
  if (document.getElementById("hard").checked == true){
    operator = Math.floor(Math.random() * 10) + 1;
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
  document.getElementById("alienDiv").innerHTML = "<img src='../boss.png' class='gremlin' width='250' height='150' >"
  
  
  
  setTimeout(function(){
    its = true
    stats.innerHTML = "Level " + levels + ", Time = 2s"
    time += 750
    if (time > 2000){
      time = 2000
    }
    answer = getQuestion(levels + 1);
  }, (1500));
}

function admitDefeat(){
  music.pause()
  music.currentTime = 0
  clearInterval(interval)
  clearInterval(otherInterval)
  interval = null
  otherInterval = null
    document.body.style.backgroundColor = "white";

  justHadMinus = true
  document.getElementById('HelpfulGuy').innerHTML = "Try again bozo"
  document.getElementById("title").innerHTML = "Mathemonium"
  its = false
  ongoing = false
  document.getElementById('hard').disabled = false
  alert("TOO SLOW BRO ITS " + answer + " (You survived " + score + " Questions!)")
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

async function startGame(){
  document.getElementById('stats').innerHTML = `Level 0, Time = 2s`
    document.getElementById('hard').disabled = true
  time = 2000
  question.innerHTML = "Get Ready!"
  document.getElementById("HelpfulGuy").innerHTML = "Music: According to my calculations..."
  music.play()
  otherInterval = setInterval(function(){
    ongoing = true
    if (!its){
      
    if (score==10){
    
    
    levels = 2
    
  } else if(score==25) {
    
   
    levels = 3
   
  } else if(score==40) {
    
    
    levels = 4
    
  } else if(score == 60) {
    
    levels = 5
    
  } else if(score == 80) {
    
    levels = 6
  } else if(score == 100){
    levels = 7
  }
      document.getElementById('stats').innerHTML = `Level ${levels}, Time = 2s`
    answer = getQuestion(levels);
    score += 1

    if (levels >= 2){
      if (Math.floor(Math.random() * 3) == 2){
        trollololol()
      }
      
    }
    } else {
      its = false
      
    }
  },2750)
  interval = setInterval(function(){
     
    if (!correct){
      time -= 10
      document.getElementById('bar').style = "background:linear-gradient(to bottom, #FF0000, #5e0000)!important;"
    } else {
      document.getElementById('bar').style = "background:linear-gradient(to bottom, #01d300, #007b01!important;"
      if (document.getElementById('hard').checked){
        time += 20
      } else {
        time += 50
      }
      
      if (time > 2000){
        time = 2000
      }
    }
    if (time <= 0){
      admitDefeat()
    }

  },10)
}



var checkbox = document.getElementById('hard');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    jumpscare()
  } 
});