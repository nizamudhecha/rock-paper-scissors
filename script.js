let userScore = 0;
let comScore = 0;
let Draw = 0;
let draw = document.querySelector("#draw-score")
let choices = document.querySelectorAll(".choice");
let mess = document.querySelector("#mess")
let user = document.querySelector("#user-score");
let com = document.querySelector("#com-score");
let reset = document.querySelector(".reset");



const genChoice = ()=>{
    const option = ["rock", "paper","scissors"]
    return option[Math.floor(Math.random() * 3)];
}

const drawGame = ()=>{
    Draw++;
    draw.innerText = Draw;
    mess.innerText = `Game was Draw. play again`;
    mess.style.backgroundColor = "#533745";

    
};

const genWinner = (userChoice,comChoice) =>{
    if(userChoice === comChoice)
   {
    drawGame();
   }
   else 
   {
    let useWin = true;
    if(userChoice === "rock"){
      useWin =   comChoice === "paper" ? false : true;
    }
    else{ if(userChoice === "paper"){
        useWin =   comChoice === "scissors" ? false : true;
      } else if(userChoice === "scissors"){
        useWin = comChoice === "rock" ? false : true;
      }

    } checkWinner(useWin, userChoice ,comChoice);   }
};

const playGame = (userChoice) =>{
    
   let comChoice = genChoice();

   genWinner(userChoice , comChoice);
     
};


const checkWinner = (useWin, userChoice ,comChoice)=>{
    if(useWin === true){
        
        userScore++;
        user.innerText = userScore;
        mess.innerText = `you win ! your ${userChoice} beat ${comChoice}`;
        mess.style.backgroundColor = "green";
    

    }
    else{
        
        comScore++;
        com.innerText = comScore;
        mess.innerText = `you loss ! ${comChoice} beat your ${userChoice}`;
        mess.style.backgroundColor = "red";
    
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click" , ()=>{
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
    
    
    })
});

const resetGame = () =>{
    userScore = 0;
    comScore = 0;
    Draw = 0;
    mess.innerText = `Play your move`;
    draw.innerText = Draw;
    com.innerText = comScore;
    user.innerText = userScore;
    mess.style.backgroundColor = "#533745";
};

reset.addEventListener("click",resetGame);