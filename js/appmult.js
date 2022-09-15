const game = () => {
  // game loop for self containing all variables to avoid global variables
  let pScore = 0; //  player score for current game
  let p2Score = 0; // computer score for current game

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
    const secondpHand = document.querySelector(".secondp-hand");

    let player1;
    let player2;

    options.forEach((option) => {
      option.addEventListener("click", function () {
        if (!player1) {
          player1 = option.textContent;
          console.log("🚀 ~ file: appmult.js ~ line 40 ~ player1", player1);
        } else {
          player2 = option.textContent;
          console.log("🚀 ~ file: appmult.js ~ line 44 ~ player2", player2);

          setTimeout(() => {
            //here's where we compare hands
            compareHands(player1, player2);
            console.log(
              "🚀 ~ file: appmult.js ~ line 49 ~ playerHand",
              playerHand
            );
            console.log(
              "🚀 ~ file: appmult.js ~ line 49 ~ secondpHand",
              secondpHand
            );

            //Update Images
            playerHand.src = `./assets/${player1}.png`;
            secondpHand.src = `./assets/${player2}.png`;
            player1 = "";
            player2 = "";
          }, 2000);

          //Animation
          playerHand.style.animation = "shakePlayer 2s ease";
          secondpHand.style.animation = "shakeComputer 2s ease";
        }
      });
    });
  };

  //Update the scoreboard
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const secondpHand = document.querySelector(".secondp-score p");
    playerScore.textContent = pScore;
    secondpHand.textContent = p2Score;
  };

  //function to compare who's winning
  const compareHands = (playerChoice, computerChoice) => {
    console.log(
      "🚀 ~ file: appmult.js ~ line 80 ~ compareHands ~ computerChoice",
      computerChoice
    );
    console.log(
      "🚀 ~ file: appmult.js ~ line 80 ~ compareHands ~ playerChoice",
      playerChoice
    );
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
        p2Score++;
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
        p2Score++;
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
        p2Score++;
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
        p2Score++;
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
        p2Score++;
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
