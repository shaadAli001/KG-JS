let score_str = localStorage.getItem("score");
let score = JSON.parse(score_str)|| {
  win: 0,
  lost: 0,
  draw: 0,
};

(score.display_score = function () {
  return `
     Won:${score.win}
     Lost:${score.lost}
     Draw:${score.draw}`;
})

  const computer=()=> {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random == 1) {
      return "Bat";
    } else if (random == 2) {
      return "Ball";
    } else {
      return "Stumps";
    }
  };

const get_result = (user_choice, computer_choice) => {
  if (user_choice === "Bat") {
    if (computer_choice === "Bat") {
      score.draw++;
      return "Draw";
    } else if (computer_choice === "Ball") {
      score.win++;
      return "You Won";
    } else if (computer_choice === "Stumps") {
      score.lost++;
      return "Computer Won";
    }
  }
  if (user_choice === "Ball") {
    if (computer_choice === "Bat") {
      score.lost++;
      return "Computer Won";
    } else if (computer_choice === "Ball") {
      score.draw++;
      return "Draw";
    } else if (computer_choice === "Stumps") {
      score.win++;
      return "You Won";
    }
  }
  if (user_choice === "Stumps") {
    if (computer_choice === "Bat") {
      score.win++;
      return "You Won";
    } else if (computer_choice === "Ball") {
      score.lost++;
      return "Computer Won";
    } else if (computer_choice === "Stumps") {
      score.draw++;
      return "Draw";
    }
  }
};

const show_result = (user_choice, computer_choice, result) => {
  localStorage.setItem("score", JSON.stringify(score));
  alert(
    `You=${user_choice}
     Computer Choice =${computer_choice}
     Winner=${result} ${score.display_score()}`
  );
};
