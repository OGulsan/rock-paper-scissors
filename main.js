function computerPlay() {
    let choices = [
        "rock",
        "paper",
        "scissors"
    ];

    let index = Math.floor(Math.random() * 3);
    //console.log(index);
    let choice = choices[index];
    return choice;
}

function playerSelection() {
    let choice = prompt("Rock, paper, or scissors?");
    console.log(choice.toLowerCase());
    return choice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
        return "draw";
    else if (playerSelection === "paper" && computerSelection === "rock" || 
    playerSelection === "rock" && computerSelection === "scissor" || 
    playerSelection === "scissor" && computerSelection === "paper")
        return "player";
    return "computer";
}

function game() {
    let playerCount = 0;
    let computerCount = 0;

    for(let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let userSelection = playerSelection();
        let winner = playRound(userSelection, computerSelection);
        if (winner === "player")
            playerCount++;
        else if (winner === "computer")
            computerCount++

            console.log(`Player chose - ${userSelection}`);
            console.log(`Computer chose - ${computerSelection}`);
            console.log(`Winner of round ${i+1} is ${winner}`);
            console.log(`Player score - ${playerCount}`);
            console.log(`Computer score ${computerCount}`);
    }
}

game();








