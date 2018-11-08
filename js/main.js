(() => {
  // simple JS file
  console.log('fired! or loaded... whatever')

  // this is a single line comment
  var choices = ["Rock", "Paper", "Scissors"];
  var computer;
  var player = document.querySelector("#weapon");
  var trigger = document.querySelector("#play");
  var status = document.querySelector(".winlose")

  function playGame() {
    // debugger;

    // make the computer choose a random weapon
    computer = choices[Math.floor(Math.random() *choices.length)];
    var player_choice = player.value;

    // check for a tie first
    if (computer.toLowerCase() === player_choice.toLowerCase) {
      // its a tie
      status.textContent == `Tie! You live to shoot another day.`
    }

    else if (player_choice.toLowerCase() === "paper") {
      if(computer.toLowerCase() === "rock") {
        // win
        status.textContent = `Win! ${player_choice} beats ${computer}`
      } else {
        // lose
        status.textContent = `Lose! ${computer} beats ${player_choice}`
      }
    }

    else if (player_choice.toLowerCase() === "scissors") {
      if(computer.toLowerCase() === "paper") {
        // win
        status.textContent = `Win! ${player_choice} beats ${computer}`
      } else {
        // lose
        status.textContent = `Lose! ${computer} beats ${player_choice}`
      }
    }

    else if (player_choice.toLowerCase() === "rock") {
      if(computer.toLowerCase() === "paper") {
        // win
        status.textContent = `Win! ${player_choice} beats ${computer}`
      } else {
        // lose
        status.textContent = `Lose! ${computer} beats ${player_choice}`
      }
    }

    else {
      player.value = "";
      alert("You didn't pick a valid weapon... try again!")
    }
  }

  trigger.addEventListener("click", playGame);
})();
