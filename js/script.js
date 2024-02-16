var timer = 60;
var score = 0;
var target;

function getTargetValue() {
    target = Math.floor(Math.random() * 10);
    document.getElementById("targetVal").textContent = target;
}

function increaseScore() {
    score += 10;
    document.getElementById("scoreVal").textContent = score;
}

function updateTimer() {
    var timerInterval = setInterval(function() {
        if(timer > 0) {
            timer--;
            document.getElementById("timerVal").textContent = timer
        } else {
            clearInterval(timerInterval);
            document.querySelector(".pannel-bottom").innerHTML = `<h1 id="gameOver">Game Over</h1>`;
            document.getElementById("targetVal").textContent = 0;
            
        }
    }, 1000);
}

function makeBubble() {
  var clutter = "";

  for (let i = 1; i <= 133; i++) {
    clutter += `<div class='bubble'>${Math.floor(Math.random() * 10)}</div>`;
  }

  document.querySelector(".pannel-bottom").innerHTML = clutter;
}

document.querySelector(".pannel-bottom").addEventListener("click", function(bubble) {
    var clickedNumber = Number(bubble.target.textContent);
    if(clickedNumber === target) {
        increaseScore();
        makeBubble();
        getTargetValue();
    }
})

makeBubble();
updateTimer();
getTargetValue();