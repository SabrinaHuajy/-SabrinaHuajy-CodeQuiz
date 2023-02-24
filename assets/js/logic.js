var startbutton = document.querySelector("#start");
var timesection = document.querySelector("#time");
var questiontoshow = document.querySelector("#question-title")
var questionsection = document.querySelector("#questions");

timesection.innerHTML = 100
var questioncounter = -1
var score = 0

console.table(questions[questioncounter])


function startquiz() {
  var counter = setInterval(mytimer, 1500)

  function mytimer() {
    if (timesection.innerHTML <= 0) {
      clearInterval(counter);
    }
    else timesection.innerHTML -= 1
  }

  showquestion()
}

function showquestion() {
  questioncounter++
  if (!questions[questioncounter]) {
    document.querySelector("#questions").classList.add("hide")
    return showendscreen()
  }

  console.log("showquestion")
  document.querySelector("#start-screen").classList.add("hide")

  var questionTitle = document.querySelector("#question-title")

  questionTitle.innerHTML = questions[questioncounter].question_title

  var questionOptions = document.querySelector("#choices")
  questionOptions.innerHTML = ""

  for (let i = 1; i < 5; i++) {
    var button = document.createElement("button")
    button.setAttribute("value", questions[questioncounter][`answer${i}`])


    button.setAttribute("class", "choice")
    button.textContent = questions[questioncounter][`answer${i}`]

    button.addEventListener("click", questionchoice)

    questionOptions.appendChild(button)
  }


  document.querySelector("#questions").classList.remove("hide")
}

function questionchoice(event) {
  showquestion()
}

function showendscreen(score) {
  document.querySelector("#end-screen").classList.remove("hide")

}

function addscore(event) {
  event.preventDefault()
  var initials = document.querySelector("#initials").value
  var scores = JSON.parse(localStorage.getItem("scores")) || []
  scores.push({
    initials,
    score
  })
  localStorage.setItem("scores", JSON.stringify(scores))
}
document.querySelector("#submit").addEventListener("click", addscore);
startbutton.addEventListener("click", startquiz);

// track changes of the score 

function checkAnswers() {

  var score = 0

  questions = document.forms.questions.elements;

  correctanswer1 = questions.question_title.value;

  if (correctanswer1 == "4.numbers") {

    score = score + 1;
  }

  correctanswer2 = questions.question_title.value;
  if (correctanswer2 == "3.parenthesis") {

    score = score + 1;
  }
  correctanswer3 = questions.question_title.value;
  if (correctanswer3 == "4.all of the above") {

    score = score + 1;
  }
  correctanswer4 = questions.question_title.value;
  if (correctanswer4 == "1.commas") {
    score = score + 1;
  }

  showendscreen(score);
}


function showendscreen(score) {

  feedback = document.getElementsByTagName("form")[0]
}