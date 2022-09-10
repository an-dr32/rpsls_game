const game = () => {
  // game loop for self containing all variables to avoid global variables
  let pScore = 0; //  player score for current game
  let cScore = 0; // computer score for current game

  //start the game loop
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    const hands = document.querySelectorAll(".hands img");
    const score = document.querySelector(".score");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
      score.classList.add("fadeIn");
    });
  };

  //play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    //computer options
    const computerOptions = ["rock", "paper", "scissors", "lizard", "spock"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //computer's choice
        const computerNumber = Math.floor(Math.random() * 5);
        const computerChoice = computerOptions[computerNumber];
        console.log(computerChoice);

        setTimeout(() => {
          //here's where we compare hands
          compareHands(this.textContent, computerChoice);

          //Update Images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);

        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  //Update the scoreboard
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  //function to compare who's winning
  const compareHands = (playerChoice, computerChoice) => {
    //update winner text
    const winner = document.querySelector(".winner");
    if (playerChoice === computerChoice) {
      winner.textContent = "It's a tie!";
      return;
    }

    //Compare selections
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors" || computerChoice === "lizard") {
        winner.textContent = "You Win!";
        pScore++;
        updateScore();
        return;
      } else if (computerChoice === "paper" || computerChoice === "spock") {
        winner.textContent = "You Lost!";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "It's a tie!";
        return;
      }
    }

    //Check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "rock" || computerChoice === "spock") {
        winner.textContent = "You Win!";
        pScore++;
        updateScore();
        return;
      } else if (computerChoice === "lizard" || computerChoice === "scissors") {
        winner.textContent = "You Lost!";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "It's a tie!";
        return;
      }
    }

    //Check for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "paper" || computerChoice === "lizard") {
        winner.textContent = "You Win!";
        pScore++;
        updateScore();
        return;
      } else if (computerChoice === "spock" || computerChoice === "rock") {
        winner.textContent = "You Lost!";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "It's a tie!";
        return;
      }
    }

    //Check for lizard
    if (playerChoice === "lizard") {
      if (computerChoice === "paper" || computerChoice === "spock") {
        winner.textContent = "You Win!";
        pScore++;
        updateScore();
        return;
      } else if (computerChoice === "rock" || computerChoice === "scissors") {
        winner.textContent = "You Lost!";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "It's a tie!";
        return;
      }
    }

    //Check for spock
    if (playerChoice === "spock") {
      if (computerChoice === "rock" || computerChoice === "scissors") {
        winner.textContent = "You Win!";
        pScore++;
        updateScore();
        return;
      } else if (computerChoice === "lizard" || computerChoice === "paper") {
        winner.textContent = "You Lost!";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "It's a tie!";
        return;
      }
    }
  };
  //call all the inner functions for the game loop
  startGame();
  playMatch();
};

//start game loop
game();
