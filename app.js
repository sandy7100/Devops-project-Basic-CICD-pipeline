let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
    //rock , paper , scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was draw , Play Again!";
    msg.style.backgroundColor = "#081b31";
    
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `You win! Your ${ userChoice } beats ${ compChoice }`;
        msg.style.backgroundColor = "green";
    } else {
        console.log("comp win");
        msg.innerText = "comp win";
        msg.innerText = `You win! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
}
const playGame = (userChoice) => {
    console.log("user Choice =", userChoice);

    //Generate computer choice
    const compChoice = genComputerChoice();
    console.log("computer Choice=", compChoice);

    if (userChoice === compChoice) {
        //Draw Game 
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //comp choice can be scissors or paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissor
            userWin = compChoice === "rock" ? false : true;
        } else if (userChoice === "scissors") {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});