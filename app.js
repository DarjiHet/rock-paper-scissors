let userSocre = 0;
let compScore = 0; 

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userSocrePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissor"];
    //rock, paper, scissors
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    // console.log("Game Was Draw.")
    msg.innerHTML = "Game Was Draw!";
    msg.style.backgroundColor = "#081B31";
};

const showWinner = (userWin, userChoice, compChoice) => {

    if(userWin) {
        userSocre++;
        userSocrePara.innerHTML = userSocre;
        // console.log("you win!");
        msg.innerHTML = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    }else{
        compScore++;
        compScorePara.innerHTML = compScore;
        // console.log("computer win!");
        msg.innerHTML = `Computer Win! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "Red";
    }
};

const playGame = (userChoice) => {
    // console.log("user choice =", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    // console.log("compChoice = ", compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissor, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "papper"){
            //rock, scissors
            userWin = compChoice === "scissor" ? false : true;
        } else {
            //rock, pap er
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});