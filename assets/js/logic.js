var startbutton = document.querySelector("#start");
var timesection = document.querySelector("#time");
timesection.innerHTML = 80

function startquiz() {
setInterval(mytimer, 3000)
function mytimer() {
  timesection.innerHTML -= 1
}
}
















startbutton.addEventListener("click", startquiz);