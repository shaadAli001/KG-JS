function greetings(person = "john Doe") {
  let heading = document.querySelector("#heading");
  let time = new Date();
  let hours = time.getHours();
  if (hours < 12 && hours > 5) {
    heading.innerText = `Good Morning ${person}`;
  } else if (hours > 12 && hours < 18) {
    heading.innerText = `Good Evening ${person}`;
  } else {
    heading.innerText = `Good Night ${person}`;
  }
}
greetings("Ramesh");

let count = localStorage.getItem("count") || 0;
let btn = document.getElementById("btn");
btn.style = change_color();
btn.textContent = count;

btn.addEventListener("click", () => {
  count++;
  localStorage.setItem("count", count);
  btn.textContent = count;
   change_color()
});

function change_color() {
  if (count % 2 == 0) {
    btn.classList.add("even");
    btn.classList.remove("odd");
  } else {
    btn.classList.add("odd");
    btn.classList.remove("even");
  }
}
