const wordList = ["hiking", "games", "swimming", "hiking", "dancing", "bonfire", "smores"]; // Array of words to choose from
const maxGuesses = 6; // Maximum number of incorrect guesses allowed
let chosenWord = ""; // The word to be guessed
let guessedLetters = []; // Array to store guessed letters
let remainingGuesses = 0; // Number of remaining guesses

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
