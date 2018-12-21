  var count = 0;
  var time = 0;
  var result = null;
  var bird = document.getElementsByClassName("bird")[0];
  var rsg = document.getElementsByClassName("rsg")[0];
  var resultMsg = document.getElementsByClassName("result")[0];
  var timerMsg = document.getElementsByClassName("timer")[0];
  var r= Math.floor((Math.random()*255)+1);
  var b= Math.floor((Math.random()*255)+1);
  var g= Math.floor((Math.random()*255)+1);
  

  let goalLine = document.getElementsByClassName("crossing-line")[0];
  let targetLeft = goalLine.offsetLeft;
  let targetTop = goalLine.offsetTop;

  var timer;

  var jokes = [
    "You're so slow, the bird grew a beard while racing... go look..., GOTCHA!!! didn't I?",
    "You're so slow, we had to measure your 10 second race with a calendar",
    "You're so slow, you came in 2nd in a 1 man race",
    "You're so slow, you have to chase the zombies",
    "You're slower than a slow cooker",
    "You're slower than a 1 legged dog on tranquilizers",
    "You're slower than Daenerys Targaryen on her way to Westeros",
    "You gotta get those fingers to the gym asap! You're too slow!",
    "You've got some supreme slownest in those fingers son! You gotta do some finger cardio!",
    "You've got limitted edition slow fingers! go claim your Ginnes record!",
  ]

  function initialize(){
    timer = setInterval(checkIfWin, 100);
  }
  
  function moveBubble(){
    var bubble = document.getElementsByClassName('bubble')[0];
    let color = (r,b,g,0.2);
    bubble.style.top= Math.floor((Math.random()*100)+1) + "vh";
    bubble.style.backgroundImage= color;
    console.log(r,b,g);

    var keyframes =[
      {backgroundPosition: "right 20%"},
      {backgroundPosition: "left -50%"}
    ];

    var timing ={
      duration:750,
      iterations: Infinity
    };

    var bubbleMove = document.getElementsByClassName("bubbles").animate(keyframes, timing);
  }


  function checkIfWin () {
      if (count >= 1000 && count < 2000) {
        rsg.innerHTML = 'READY';
      } else if (count >= 2000 && count < 3000) {
        rsg.innerHTML = 'SET';
      } else if (count >= 3000 && count < 4000) {
        rsg.innerHTML = 'GO!';
      } else {
        rsg.innerHTML = '';
      }

      if (time >= 30000 && !result) {
        result = 'lost';
        stop();
        showResult(jokes[Math.floor(Math.random() * 10)], 'joke');
      }

      if (count >= 3000) {
        time += 100;
        timerMsg.innerHTML = time / 1000;
      }

      count += 100;
    }

  function stop() {
    clearInterval(timer);
  }

  function reset() {
    count = 0;
    time = 0;
    result = null;

    resultMsg.classList.add("hide");
    resultMsg.innerHTML = "";
    bird.style.top = "50%";
    bird.style.left = 0;
    timerMsg.innerHTML = 0;

    initialize();
  }
  
  function keydownFunc() {
    let bird = document.getElementsByClassName("bird")[0];
    let positionLeft = bird.offsetLeft;
    let positionTop = bird.offsetTop;
    let targetLeft = goalLine.offsetLeft;
    let targetTop = goalLine.offsetTop;
    
    if(count > 3000){
      if (positionLeft + 20 > targetLeft) {
        if (time >= 10000 && !result) {
          result = 'lost';
          stop();
          showResult('YOU LOSE!');
        }
        if (time < 10000 && !result) {
          result = 'won';
          stop();
          showResult('YOU WIN!');
        }
      }

      if (event.keyCode === 37) {
        if (positionLeft > 0) {
          bird.style.left = Math.max(positionLeft - 50, 0) + "px";
        }
      }
      if (event.keyCode === 38) {
        if (positionTop > 0) {
          bird.style.top = Math.max(positionTop - 50, 0) + "px";
        }
      }
      if (event.keyCode === 39) {
        if (positionLeft < window.innerWidth - bird.style.width) {
          bird.style.left = Math.min(positionLeft + 50, window.innerWidth - bird.style.width) + "px";
        }
      }
      if (event.keyCode === 40) {
        if (positionTop < window.innerHeight - bird.style.height) {
          bird.style.top = Math.min(positionTop + 50, window.innerHeight - bird.style.height) + "px";
        }
      }
    }
    
  }

  function keyupFunc() {
    let bird = document.getElementsByClassName("bird")[0];
    let positionLeft = bird.offsetLeft;
    let positionTop = bird.offsetTop;
  }

  function showResult(msg, className) {
    resultMsg.style.display = "flex";
    resultMsg.innerHTML = '<div class="' + className + '">' + msg + '</div>';
    resultMsg.innerHTML += '<div class="reset-btn" onclick="reset()">RESTART</div>';
  }

var readyFunc = function() {
  bird = document.getElementsByClassName("bird")[0];
  rsg = document.getElementsByClassName("rsg")[0];
  resultMsg = document.getElementsByClassName("result")[0];
  timerMsg = document.getElementsByClassName("timer")[0];
  goalLine = document.getElementsByClassName("crossing-line")[0];
  targetLeft = goalLine.offsetLeft;
  targetTop = goalLine.offsetTop;
  
  initialize();
};

moveBubble();
document.addEventListener("DOMContentLoaded", readyFunc);