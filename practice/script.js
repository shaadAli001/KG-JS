let score_str = localStorage.getItem("score");
let score;
reset(score_str)
function reset(score_str) {
  localStorage.clear();
  score = score_str
    ? JSON.parse(score_str)
    : {
        win: 0,
        lose: 0,
        draw: 0,
      },
  score.display_score = function () {
    return `
  Win=${score.win}
  lose=${score.lose}
  draw=${score.draw}`;
  };
}

function computer_choice() {
  let random = Math.random() * 3;
  if (random >= 0 && random < 1) {
    return "bat";
  }
  if (random >= 1 && random < 2) {
    return "ball";
  }
  if (random >= 2 && random < 3) {
    return "stump";
  }
}

function get_result(user_choice, computer_choice) {
  if (user_choice === "bat") {
    if (computer_choice === "bat") {
      score.draw++;
      return "Draw";
    }
    if (computer_choice === "ball") {
      score.win++;
      return "user won";
    }
    if (computer_choice === "stump") {
      score.lose++;
      return "computer won";
    }
  }
  if (user_choice === "ball") {
    if (computer_choice === "ball") {
      score.draw++;
      return "Draw";
    }
    if (computer_choice === "stump") {
      score.win++;
      return "user won";
    }
    if (computer_choice === "bat") {
      score.lose++;
      return "computer won";
    }
  }
  if (user_choice === "stump") {
    if (computer_choice === "ball") {
      score.lose++;
      return "computer won";
    }
    if (computer_choice === "stump") {
      score.draw++;
      return "Draw";
    }
    if (computer_choice === "bat") {
      score.win++;
      return "user won";
    }
  }
}

function show_result(user_choice, computer_choice, result) {
  localStorage.setItem("score", JSON.stringify(score));
  alert(
    `user=${user_choice}\ncomputer=${computer_choice}\nresult=${result}\n${score.display_score()}`
  );
}
