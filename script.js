const player_1 = "x"; //creating the players
const player_2 = "o";

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

let move_count = 0;

document.querySelector(".game_board").onclick = function (event) {
  //   console.log(event.target.tagName);
  let player = player_1;

  if ((event.target.tagName = "A")) {
    if (event.target.textContent === "") {
      determin_turn: {
        if (move_count % 2 != 0) {
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
            document.querySelector(".message").textContent =
              player + "  has won!";
          }
        }
      }
      move_count++;
    }
  }
};
