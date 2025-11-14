let Age = prompt("Enter Your Age");
let text = document.querySelector("#heading");
if (Age >= 18) {
  text.innerHTML = `Eligible`;
} else {
  text.innerHTML = ` Sorry! Not Eligible`;
}
