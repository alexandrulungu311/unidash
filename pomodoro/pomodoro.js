const WORK = 25 * 60;
const BREAK = 5 * 60;

let mode = "work";          
let secondsLeft = WORK;     
let timerId = null;          

const timeEl = document.getElementById("pomoTime");
const modeEl = document.getElementById("pomoMode");


function updateDisplay() {
  const m = Math.floor(secondsLeft / 60);
  const s = secondsLeft % 60;
  const text = String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  timeEl.textContent = text;
  document.title = text + " - Pomodoro";
}


function start() {
  if (timerId !== null) return;
  timerId = setInterval(tick, 1000);
}

function pause() {
  clearInterval(timerId);
  timerId = null;
}


function tick() {
  secondsLeft--;
  updateDisplay();
  if (secondsLeft <= 0) {
    pause();
    alert(mode === "work" ? "Ai terminat! Fă o pauză." : "Pauza s-a terminat!");
    switchMode(mode === "work" ? "break" : "work");
  }
}


function switchMode(newMode) {
  pause();
  mode = newMode;
  secondsLeft = (mode === "work") ? WORK : BREAK;
  modeEl.textContent = (mode === "work") ? "Concentrare" : "Pauză";
  updateDisplay();
}

document.getElementById("pomoStart").addEventListener("click", start);
document.getElementById("pomoPause").addEventListener("click", pause);
document.getElementById("pomoReset").addEventListener("click", function () { switchMode(mode); });
document.getElementById("pomoWork").addEventListener("click", function () { switchMode("work"); });
document.getElementById("pomoBreak").addEventListener("click", function () { switchMode("break"); });

updateDisplay();