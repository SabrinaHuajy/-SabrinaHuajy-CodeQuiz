function checkAnswers() {
    //assign 0 to the score variable
    var score = 0
    //assign the quiz elements to the quiz variable:
    questions = document.forms.Quiz.elements;
    //assign the answer to the question to variables and check:
    answerQ1 = quiz.YorkQ1.value;
    // Check the answer to the first question:
    if (answerQ1 == "Q1Answer2") {
        //Add 1 to the score if the user was correct
        score = score + 1;
    }

    answerQ2 = quiz.YorkQ2.value;
    if (answerQ2 == "Q2Answer3") {
        //Add 1 to the score if the user was correct
        score = score + 1;
    }
    answerQ3 = quiz.YorkQ3.value;
    if (answerQ3 == "14") {
        //Add 1 to the score if the user was correct
        score = score + 1;
    }
    answerQ4 = quiz.YorkQ4.value;
    if (answerQ4 == "200000") {
        //Add 1 to the score if the user was correct
        score = score + 1;
    }

    //return the score value as part of an alert in the browser
    //alert("Your score is " + score);
    showFeedback(score);
}


function showFeedback(score) {
    //assign the area of the form to the feedback variable. getElementsByTagName will return a list so [0] is used to access the first (and only) element.
    feedback = document.getElementsByTagName("form")[0]   
}