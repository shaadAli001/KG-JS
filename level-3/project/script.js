const computer = () => {
    let random = Math.random() * 3;
    if (random > 0 && random <= 1) {
        return 'Bat';
    }
    else if (random > 1 && random <= 2) {
        return 'Ball';
    }
    else {
        return 'Stumps';
    }
}

const get_result = (user_choice, computer_choice) => {
    if (user_choice === 'Bat') {
        if (computer_choice === 'Ball') {
            return 'User Won';
        }
        else if (computer_choice === 'Bat') {
            return 'Its a Draw';
        }
        else if (computer_choice === 'Stump') {
            return 'Computer Won';
        }
        console.log(user_choice, computer_choice,)
    }
    if (user_choice === 'Ball') {
        if (computer_choice === 'Ball') {
            return 'Its a Draw';
        }
        else if (computer_choice === 'Bat') {
            return 'Computer Won';
        }
        else if (computer_choice === 'Stump') {
            return 'User Won';
        }
    }
    if (user_choice === 'Stump') {
        if (computer_choice === 'Ball') {
            return 'Computer Won';
        }
        else if (computer_choice === 'Bat') {
            return 'User Won';
        }
        else if (computer_choice === 'Stump') {
            return 'Its a Draw';
        }
    }
}

const show_result = (user_choice, computer_choice, result) => {
    alert(`You =  ${user_choice}\n Computer = ${computer_choice}\n Result = ${result} `)
}