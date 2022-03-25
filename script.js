const player_1 = "x"; //creating the players
const player_2 = "o";
const game_board = document.querySelector(".game_board");

const game_template = {
  state: true,
  move_count: 0,
};

let game = {};
Object.assign(game, game_template); //adding values of game_template to game

const win_combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

document.querySelector(".game_board").onclick = function (event) {
  //   console.log(event.target.tagName);
  let player = player_1;

  if ((event.target.tagName = "A")) {
    if (event.target.textContent === "" && game.state === true) {
      //if empty cell, then continue game
      determin_turn: {
        if (game.move_count % 2 != 0) {
          player = player_2;
        }
        event.target.textContent = player;
      }
      check_winner: {
        for (let combination of win_combinations) {
          if (
            this.children[combination[0]].textContent === player &&
            this.children[combination[1]].textContent === player &&
            this.children[combination[2]].textContent === player
          ) {
            this.children[combination[0]].classList.add("win_move");
            this.children[combination[1]].classList.add("win_move");
            this.children[combination[2]].classList.add("win_move");

            document.querySelector(".message").textContent =
              player + "  has won!";
            game.state = false;
            break; //stop the cycle - pārtrauc cikla darbību
          } else {
            if (
              this.children[0].textContent !== "" &&
              this.children[1].textContent !== "" &&
              this.children[2].textContent !== "" &&
              this.children[3].textContent !== "" &&
              this.children[4].textContent !== "" &&
              this.children[5].textContent !== "" &&
              this.children[6].textContent !== "" &&
              this.children[7].textContent !== ""
            ) {
              document.querySelector(".message").textContent =
                "We have no winner!";
              game.state = false;
              break; //stop the cycle - pārtrauc cikla darbību
            }
          }
        }
      }
      game.move_count++;
    }
  }
};

document.querySelector(".reset").onclick = function (event) {
  // console.log("reset button is pressed");
  document.querySelector(".message").textContent = "";
  for (const cell of game_board.children) {
    // console.log(cell.textContent);
    cell.textContent = "";
    cell.classList.remove("win_move");
  }
  Object.assign(game, game_template);
};
