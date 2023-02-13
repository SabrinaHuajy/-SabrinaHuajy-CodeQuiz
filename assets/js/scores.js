function checkAnswers() {

    var score = 0

    questions = document.forms.Quiz.elements;

    answerQ1 = quiz.YorkQ1.value;

    if (answerQ1 == "Q1Answer2") {

        score = score + 1;
    }

    answerQ2 = quiz.YorkQ2.value;
    if (answerQ2 == "Q2Answer3") {

        score = score + 1;
    }
    answerQ3 = quiz.YorkQ3.value;
    if (answerQ3 == "14") {

        score = score + 1;
    }
    answerQ4 = quiz.YorkQ4.value;
    if (answerQ4 == "200000") {
        score = score + 1;
    }

    showFeedback(score);
}


function showFeedback(score) {

    feedback = document.getElementsByTagName("form")[0]   
}