let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

document.getElementById("guessButton").addEventListener("click", function() {
    let userGuess = parseInt(document.getElementById("guessInput").value);
    let feedback = document.getElementById("feedback");
    let attemptsDisplay = document.getElementById("attempts");

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    attempts--;
    attemptsDisplay.textContent = `Attempts left: ${attempts}`;
    
    if (userGuess === randomNumber) {
        window.location.href="win.html";
    } else if (userGuess < randomNumber) {
        feedback.textContent = "Too low! Try again.";
    } else {
        feedback.textContent = "Too high! Try again.";
    }
    if (attempts === 0) {
        window.location.href="lose.html";
    }
});
