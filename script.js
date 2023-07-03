const wordList = ["hiking", "games", "swimming", "hiking", "dancing", "bonfire", "smores"]; // Array of words to choose from
const maxGuesses = 6; // Maximum number of incorrect guesses allowed
let chosenWord = ""; // The word to be guessed
let guessedLetters = []; // Array to store guessed letters
let remainingGuesses = 0; // remaining guesses

function startGame() {
  // Reset game 
  chosenWord = wordList[Math.floor(Math.random() * wordList.length)].toLowerCase();
  guessedLetters = [];
  remainingGuesses = maxGuesses;

  // Display the game
  updateWordContainer();
  updateImageContainer();
  updateGuesses();
  createLetterBank();

// Listen for letter clicks
const letterBank = document.getElementsByClassName("letter");
for (let i = 0; i < letterBank.length; i++) {
  letterBank[i].addEventListener("click", handleLetterClick);
}
}

function handleLetterClick(event) {
const guessedLetter = event.target.textContent.toLowerCase();
if (!guessedLetters.includes(guessedLetter)) {
  // Check if the letter has been guessed
  guessedLetters.push(guessedLetter);
  event.target.classList.add("disabled");
  updateWordContainer();
  updateGuesses();
  updateImageContainer();
  checkGameStatus();
}
}

function updateWordContainer() {
const wordContainer = document.getElementById("word-container");
wordContainer.innerHTML = ""; 


// Display the current state of the word
for (let i = 0; i < chosenWord.length; i++) {
  const letter = chosenWord[i];
  if (guessedLetters.includes(letter) || !letter.match(/[a-z]/i)) {
    wordContainer.innerHTML += letter;
  } else {
    wordContainer.innerHTML += "_";
  }
  wordContainer.innerHTML += " ";
}
}

function updateGuesses() {
const guessesContainer = document.getElementById("guesses");
guessesContainer.textContent = `Remaining Guesses: ${remainingGuesses}`;
}

function imageContainer() {
const imageContainer = document.getElementById("remaining-guesses");
remainingGuessesContainer.textContent = remainingGuesses.toString; 

const hangmanImage = document.getElementById("hangman-image");
hangmanImage.style.backgroundImage = `url(images/hangman${maxGuesses - remainingGuesses}.png)`;
}


function createLetterBank() {
const letterBankContainer = document.getElementById("letter-bank");
letterBankContainer.innerHTML = ""; 

// Create letter divs for the letter bank
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
for (let i = 0; i < letters.length; i++) {
  const letter = letters[i];
  const letterDiv = document.createElement("div");
  letterDiv.textContent = letter;
  letterDiv.classList.add("letter");
  letterBankContainer.appendChild(letterDiv);
    }
}

function checkGameStatus() {
const wordContainer = document.getElementById("word-container");
const wordState = wordContainer.textContent.replace(/\s/g, "");

// Check if the word has been completely guessed
if (wordState === chosenWord) {
    endGame(true);
    return;
  }
  
  // Check if the player has run out of guesses
  if (remainingGuesses === 0) {
    endGame(false);
    return;
  }
  }
  
  function endGame(hasWon) {
  const letterBank = document.getElementsByClassName("letter");
  for (let i = 0; i < letterBank.length; i++) {
    letterBank[i].removeEventListener("click", handleLetterClick);
  }
  
updatePlayAgainButton(true);

  if (hasWon) {
    alert("Congratulations! You won!");
  } else {
    alert(`Game over! The word was "${chosenWord}".`);
  }
}
  function updatePlayAgainButton(show) {
    const playAgainButton = document.getElementById("play-again");
    playAgainButton.style.display = show ? "block" : "none";
  }
  
  function playAgain() {
    startGame();
  }

 
  // Start the game
  startGame();
