let price = 100;
let age = 6;
let gender = "male";
let para = document.querySelector("#para");
let Amount;

if (age <= 5) {
    Amount = price * 0;
    para.innerHTML = `Your price is $ ${Amount}`
}
else if (age <= 8 || gender == 'female') {
    Amount = price * (50 / 100);
    para.innerHTML = `Your price is $ ${Amount}`
}
else if (age >= 65) {
    Amount = price * (30 / 100);
    para.innerHTML = `Your price is $ ${Amount}`
}
else {
    para.innerHTML = `Your price is $ ${price}`
}

// Less Efficient

// if (Age >= 8 && Gender == "female") {
//     let Amount = price * (50 / 100);
//     para.innerHTML = `Price After Discount = $ ${Amount}`;
// } else if (Age <= 5) {
//     let Amount = price * 0;
//     para.innerHTML = `Price After Discount = $ ${Amount}`;
// }
// else if (Age >= 5 && Age <= 8) {
//     let Amount = price * (50 / 100);
//     para.innerHTML = `Price After Discount = $ ${Amount}`;
// }
// else if (Age >= 65) {
//     let Amount = price * (30 / 100);
//     para.innerHTML = `Price After Discount = $ ${Amount}`;
// }
// else {
//     para.innerHTML = `Price After Discount = $ ${price}`;

// }

// More Efficient

