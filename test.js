let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const urscore = document.querySelector("#your-score");
const cmpscore = document.querySelector("#comp-score");

const drawGame = ()=>{
    
    msg.innerText = "This game is drwa, Play Again";
    msg.style.backgroundColor="black";
}

const showWinners = (userWin, userChioce, compChoice)=>{
    if(userWin){
        userScore++;
        urscore.innerText =userScore;
        msg.innerText = `You won! your ${userChioce} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        cmpscore.innerText =compScore;
        msg.innerText = `You lost! ${compChoice} beats your ${userChioce}`;
        msg.style.backgroundColor="red";
    }
}

const genCompChoice= ()=>{
    let options = ["rock", "paper", "scessors"];
    let randInx = Math.floor(Math.random()*3);
    return options[randInx];
}

let playGame= (userChioce)=>{
    console.log("Ussr Choice = ", userChioce);
    const compChoice = genCompChoice();
    console.log("CompChoice = ", compChoice);
    if(userChioce===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChioce==="rock"){
            userWin=compChoice==="paper"? false : true;
        }else if(userChioce==="paper"){
            userWin=compChoice==="scessors"? false : true;
        }else{
            userWin=compChoice==="rock"? false : true;
        }
        showWinners(userWin, userChioce,compChoice);
    }
    
    
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChioce = choice.getAttribute("id");
        playGame(userChioce);
    })
})

