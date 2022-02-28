const player_1 = "x"; //creating the players
const player_2 = "o";

let move_count = 0;

document.querySelector(".game_board").onclick = function (event) {
  //   console.log(event.target.tagName);

  if ((event.target.tagName = "A")) {
    if (event.target.textContent == "") {
      if (move_count % 2 == 0) {
        event.target.textContent = player_1;
      } else {
        event.target.textContent = player_2;
      }

      move_count++;
    }
  }
};
