function printHighscores() {
    // get scores from localstorage or set to empty array
    var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
    // sort the highscores by score property in descending order
    highscores.sort(function (a, b) {
        return b.score - a.score;
    });
    // create a for loop to create our li tags to go into the ol element in the highscores.html
    for (var i = 0; i < highscores.length; i += 1) {
        // create li tag for each high score and add the text content to them.
        var liTag = document.createElement('li');
        liTag.textContent = highscores[i].initials + ' - ' + highscores[i].score;
        // display on the page by grabbing the ol element and then appedning the new li highscores list to it
        var olEl = document.getElementById('highscores');
        olEl.appendChild(liTag);
    }
}
// run the function when page loads at the bottom of this new file we can call the function. This way every time the page loads it gets the highscores, sorts them in descending order and displays them for the user to see!
printHighscores();

function clearscores() {
    localStorage.removeItem("highscores");
    location.reload();
}

document.getElementById("clear").onclick = clearscores;

