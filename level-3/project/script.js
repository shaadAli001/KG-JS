const computer= () => {
    let random = Math.floor(Math.random() * 3) + 1;
    if (random == 1) {
        return 'Bat';
    } else if (random == 2) {
        return 'Ball';
    }
    else {
        return 'Stumps'
    }
}
const get_result = (user_choice, computer_choice) => {
    if (user_choice === 'Bat') {
        if (computer_choice === 'Bat') {
            return "Draw"
        }
        else if (computer_choice === 'Ball') {
            return "User Won"
        }
        else if (computer_choice === 'Stumps') {
            return "Computer Won"
        }
    }
    if (user_choice === 'Ball') {
        if (computer_choice === 'Bat') {
            return "Computer Won"
        }
        else if (computer_choice === 'Ball') {
            return "User Won"
        }
        else if (computer_choice === 'Stumps') {
            return "User Won"
        }
    }
    if (user_choice === 'Stumps') {
        if (computer_choice === 'Bat') {
            return "User Won"
        }
        else if (computer_choice === 'Ball') {
            return "Computer Won"
        }
        else if (computer_choice === 'Stumps') {
            return "Draw"
        }
    }
}

const show_result = (user_choice, computer_choice, result) => {
    alert(`User Choice = ${user_choice}\n Computer Choice =${computer_choice}\n Winner=${result}`)
}