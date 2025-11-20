function computer_choice() {
    let random = Math.random() * 3;
    if (random >= 0 && random < 1) {
        console.log('Bat');
    }
    if (random >= 1 && random < 2) {
        console.log('Ball');
    }
    if (random >= 2 && random < 3) {
        console.log('Stump');
    }
}
