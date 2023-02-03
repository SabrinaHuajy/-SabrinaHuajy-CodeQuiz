var startbutton = document.querySelector("#start");
var timesection = document.querySelector("#time");
var questiontoshow = document.querySelector("#question-title")
var questionsection = document.querySelector("#questions");

timesection.innerHTML = 100
var questioncounter = 0

console.table(questions[questioncounter])


function startquiz() {
  var counter = setInterval(mytimer, 1000)
  questionsection = showquestion()

  
  function mytimer() {
    if (timesection.innerHTML <= 0) {
      clearInterval(counter);
    }
    else timesection.innerHTML -= 1
  }

  showquestion()
}

function showquestion() {
  questiontoshow.innerHTML = questions[questioncounter]
}











startbutton.addEventListener("click", startquiz);