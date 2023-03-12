// var score = document.querySelector("#scores");
var startbutton = document.querySelector("#start");
var timesection = document.querySelector("#time");
var questiontoshow = document.querySelector("#question-title")
var questionsection = document.querySelector("#questions");
var answerfeedback = document.querySelector("#feedback");
let correctBeat = new Audio('../../assets/sfx/correct.wav');
let wrongBeat = new Audio('../../assets/sfx/incorrect.wav');
let finalscore = document.getElementById("final-score")
let leaderBoard = document.getElementById("leaderboard")

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
    // console.log("hello")

    document.querySelector("#questions").classList.add("hide")
    return showendscreen("final-score")
  }

  console.log(questioncounter)


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
  checkAnswers()

  // if (questioncounter === 4) {
  //   showendscreen()
  // }
}

function questionchoice() {

  console.log(this.value);
  if (this.value !== questions[questioncounter].correctanswer) {
    console.log(questions[questioncounter].correctanswer);
    // penalize time
    timesection.innerHTML -= 10;
    time -= 10;

    if (time < 0) {
      time = 0;
    }

    answerfeedback.textContent = "Wrong!";
    wrongBeat.play();
    answerfeedback.style.color = "red";
    answerfeedback.style.fontSize = "100%";
  } else {
    answerfeedback.textContent = "Correct!";
    correctBeat.play();
    answerfeedback.style.color = "green";
    answerfeedback.style.fontSize = "100%";
  }

  showquestion()

  answerfeedback.setAttribute("class", "feedback");
  setTimeout(function () {
    answerfeedback.setAttribute("class", "feedback hide");
  }, 1000);
}

function showendscreen() {
  document.querySelector("#end-screen").classList.remove("hide")
  var finalscore = document.getElementById("final-score");
  finalscore.textContent = score + "/4";
  time = 0
  score.innerText
}

function addscore(event) {
  event.preventDefault()
  var initials = document.querySelector("#initials").value

  if (initials !== "") {

    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    var newscore = {
      score: time,
      initials: initials
    };

    // save to localstorage
    highscores.push(newscore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));


    // var scores = JSON.parse(localStorage.getItem("scores")) || []
    // scores.push({
    //   initials,
    //   score
    // })
    // localStorage.setItem("scores", JSON.stringify(scores));

    location.href = "highscores.html";
  }
}

function checkForEnter(event) {
  if (event.key === "Enter") {
    addscore();
  }
}

initials.onkeyup = checkForEnter;

document.querySelector("#submit").addEventListener("click", addscore);
startbutton.addEventListener("click", startquiz);

// track changes of the score 

function checkAnswers() {


  // questions = document.forms.questions.elements;

  correctanswer = questions[0].correctanswer;
  console.log(correctanswer)

  if (correctanswer == "4.numbers") {

    score = score += 1;
  }

  correctanswer = questions[1].correctanswer;
  if (correctanswer == "3.parenthesis") {

    score = score += 1;
  }
  correctanswer = questions[2].correctanswer;
  if (correctanswer == "4.all of the above") {

    score = score += 1;
  }
  correctanswer = questions[3].correctanswer;
  if (correctanswer == "1.commas") {
    score = score += 1;
  }
  console.log(score)

  // showendscreen(score);

}


// // function showendscreen(score) {

//   feedback = document.getElementsByTagName("form")[0]
// }

function printHighscores() {
  // either get scores from localstorage or set to empty array
  var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

  function saveInfo(event) {
    event.preventDefault()

    let hsInitials = initials.value
    let hsScore = finalscore.innerText

    highscores.push({ Initials: hsInitials, score: hsScore })

    localStorage.setItem("highscores", JSON.stringify(highscores))



    function getHighScores() {
      let savedHighScores = JSON.parse(localStorage.getItem("highscores"))

      if (savedHighScores) {
        highscores = savedHighScores;
        displayHighScores()
      } else {
        highscores = [];
      }
    }

    function displayHighScores() {
      for (let i = 0; i < highscores.length; i++) {
        let li = document.createElement("li");

        li.innerHTML = "Initials:" + highscores[i].Initials + "    Score:" + highScores[i].Score;
        savedHighScores.append(li);
      }
    }
    getHighScores()


    highscores.forEach(function (score) {
      // create li tag for each high score
      var liTag = document.createElement("li");
      liTag.textContent = score.initials + " - " + score.score;

      // display on page
      var olEl = document.getElementById("highscores");
      olEl.appendChild(liTag);
    });
  }

  function clearscores() {
    localStorage.removeItem("highscores");
    location.reload();
  }

  document.getElementById("clear").onclick = clearscores;

  displayHighscores();

}