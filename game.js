// Generate a random target number between 1 and 100
let targetNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  // Get the user's input
  let userInput = document.getElementById("userInput").value;

  // Check if the user's guess is correct
  if (userInput == targetNumber) {
    document.getElementById("feedback").innerHTML = "Congratulations! You guessed the correct number.";
  } else if (userInput < targetNumber) {
    document.getElementById("feedback").innerHTML = "Your guess is too low. Try a higher number.";
  } else {
    document.getElementById("feedback").innerHTML = "Your guess is too high. Try a lower number.";
  }
}