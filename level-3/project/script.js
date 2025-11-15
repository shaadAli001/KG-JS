let computer_choice;
function Bat() {
    let random = Math.random() * 3;
    if (random > 0 && random <= 1) {
        computer_choice = 'Bat';
    }
    else if (random > 1 && random <= 2) {
        computer_choice = 'Ball';
    }
    else if (random > 2 && random <= 3) {
        computer_choice = 'Stumps';
    }
    // result
    let result;
    if (computer_choice === 'Ball') {
        result = 'User Won';
    }
    else if (computer_choice === 'Bat') {
        result = `It's a Tie`;
    }
    else {
        result = 'Computer Won';
    }
    alert(`You have choosend Bat, Computer Choice is ${computer_choice},${result}`)
}
function Ball() {
    console.log('You Choosed Ball');
    let random = Math.random() * 3;
    if (random > 0 && random <= 1) {
        computer_choice = 'Bat';
    }
    else if (random > 1 && random <= 2) {
        computer_choice = 'Ball';
    }
    else if (random > 2 && random <= 3) {
        computer_choice = 'Stumps';
    }
    // 
    if (computer_choice === 'Ball') {
        result = `It's a Tie`;
    }
    else if (computer_choice === 'Bat') {
        result = 'Computer Won';
    }
    else {
        result = 'User Won';
    }
    alert(`You have choosend Ball, Computer Choice is ${computer_choice},${result}`)
}
function Stump() {
    let random = Math.random() * 3;
    if (random > 0 && random <= 1) {
        computer_choice = 'Bat';
    }
    else if (random > 1 && random <= 2) {
        computer_choice = 'Ball';
    }
    else if (random > 2 && random <= 3) {
        computer_choice = 'Stumps';
    }
    if (computer_choice === 'Ball') {
        result = 'Computer Won';
    }
    else if (computer_choice === 'Bat') {
        result = 'You Won';
    }
    else {
        result = `It's a Tie`;
    }
    alert(`You Choosed Stump, Computer Choice is ${computer_choice},${result}`)

}
