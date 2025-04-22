// Selecting essential DOM elements for the Hangman game
const hangmanImage = document.querySelector(".hangman-box img"); // Image element to display the hangman
const wordDisplay = document.querySelector(".word-display"); // Container to display the current word
const guessesText = document.querySelector(".guesses-text b"); // Element to show wrong guess count
const keyboardDiv = document.querySelector(".keyboard"); // Container for the virtual keyboard
const gameModal = document.querySelector(".game-modal"); // Modal for game over or victory messages
const playAgainBtn = document.querySelector(".play-again"); // Button to restart the game

// Defining global variables
let currentWord, correctLetters, wrongGuessCount = 0; // Current word, correctly guessed letters, wrong guess count
const maxGuesses = 6; // Maximum allowed wrong guesses

// Function to reset the game state
const resetGame = () => {
    correctLetters = []; // Reset the list of correct letters
    wrongGuessCount = 0; // Reset the wrong guess counter
    hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`; // Reset the hangman image
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`; // Reset the displayed guess count
    // Enable all keyboard buttons
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    // Initialize the word display with blank spaces
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    gameModal.classList.remove("show"); // Hide the game modal
};

// Function to randomly select a word and hint from the word list
const getRandomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)]; // Get random word and hint
    currentWord = word; // Set the current word
    document.querySelector(".hint-text b").innerText = hint; // Display the corresponding hint
    resetGame(); // Reset the game for the new word
};

// Function to handle game over conditions
const gameOver = (isVictory) => {
    setTimeout(() => {
        const modalText = isVictory ? `You found the word:` : `The correct word was:`; // Set message based on result
        gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`; // Show appropriate image
        gameModal.querySelector("h4").innerText = `${isVictory ? 'Congrats!' : 'Game Over!'}`; // Display result message
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`; // Display the word
        gameModal.classList.add("show"); // Show the modal
    }, 300); // Add a delay for better effect
};

// Function to handle letter input and game logic
const initGame = (button, clickedLetter) => {
    if (currentWord.includes(clickedLetter)) { // Check if the clicked letter is in the word
        // Loop through the word and reveal all occurrences of the clicked letter
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetters.push(letter); // Add the letter to the correct list
                wordDisplay.querySelectorAll("li")[index].innerText = letter; // Update the display
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed"); // Mark it as guessed
            }
        });
    } else {
        // If the letter is incorrect, update the hangman image and increment the wrong guess count
        wrongGuessCount++;
        hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
    }
    button.disabled = true; // Disable the clicked button
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`; // Update the wrong guess counter display
    // Check if the game is over
    if (wrongGuessCount === maxGuesses) return gameOver(false); // Lost condition
    if (correctLetters.length === currentWord.length) return gameOver(true); // Victory condition
};

// Generate virtual keyboard buttons dynamically
for (let i = 97; i <= 122; i++) { // Loop through ASCII codes for a–z
    const button = document.createElement("button"); // Create a new button element
    button.innerText = String.fromCharCode(i); // Set the button text to the current letter
    keyboardDiv.appendChild(button); // Add the button to the keyboard container
    // Add click event listener to handle letter input
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}

// Initialize the game with the first random word
getRandomWord();

// Add event listener to restart the game when "Play Again" is clicked
playAgainBtn.addEventListener("click", getRandomWord);
