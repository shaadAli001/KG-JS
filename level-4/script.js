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

const sum = (x, y) => {
    let para = document.querySelector("#para");
    return para.innerHTML = `${x + y}`;
}
const greeting = (param='Namaste') => {
    console.log(`${param} Everyone`);
}
greeting();