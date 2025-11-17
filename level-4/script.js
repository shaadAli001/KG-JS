// const drive_status = () => {
//     let status = document.querySelector("#para");
//     let age = prompt("Enter Your Age");
//     if (age >= 18 && age>= 0) {
//         return status.innerHTML = "You Can Drive";
//     } else {
//         return status.innerHTML = "You Can't Drive";
//     }
// }
// drive_status();

// const sum = (x, y) => {
//     let para = document.querySelector("#para");
//     return para.innerHTML = `${x + y}`;
// }
// const greeting = (param='Namaste') => {
//     console.log(`${param} Everyone`);
// }
// greeting();

let para_1 = document.querySelector("#para_1");
let para_2 = document.querySelector("#para_2");
let para_3 = document.querySelector("#para_3");

const check = (num) => {
  if (num % 2 == 0) {
    para_1.innerHTML = `${num} is Even`;
  } else {
    para_1.innerHTML = `${num} is Odd`;
  }
};
check(9);

const largest = (num1, num2) => {
  if (num1 > num2) {
    para_2.innerHTML = `${num1} is Greater`;
  } else if (num2 > num1) {
    para_2.innerHTML = `${num2} is Greater`;
  } else {
    para_2.innerHTML = "Both Are Equal";
  }
};
largest(5, 5);

const Temp = (temp_c) => {
  let temp_f = (9 / 5) * temp_c + 32;
  para_3.innerHTML=`${temp_c}℃ = ${temp_f}℉`
};
Temp(0);
