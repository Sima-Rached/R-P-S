
let humanscore = 0;
let computerscore = 0;


function getComputerChoice(max=3) {
    choice= Math.floor(Math.random() * max);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "an error occurred";
    }
}

function updateDisplay(message) {
    document.getElementById("result").textContent = message;
    document.getElementById("score").textContent = `You: ${humanscore} | Computer: ${computerscore}`;
    
    if (humanscore === 5 || computerscore === 5) {
        const winner = humanscore === 5 ? "You win the game!" : "Computer wins the game!";
        document.getElementById("winner").textContent = winner;
        disableButtons();
    }
}
function disableButtons() {
    document.querySelectorAll("button").forEach(button => {
        button.disabled = true;
    });
}
// Add event listeners
document.getElementById("rock").addEventListener("click", () => {
    const result = playRound("rock");
    updateDisplay(result);
});

document.getElementById("paper").addEventListener("click", () => {
    const result = playRound("paper");
    updateDisplay(result);
});

document.getElementById("scissors").addEventListener("click", () => {
    const result = playRound("scissors");
    updateDisplay(result);
});
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    if (computerChoice === humanChoice) {
        return "It's a tie!";
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        computerscore++;
        // The following line is unreachable, as the return statement above exits the function.
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    } else {
        humanscore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    }
}