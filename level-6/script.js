// JSON

let product = {
  name: "Bag",
  brand: "Skybags",
  price: 200,
  rating: {
    stars: 4,
    reviews: 500,
  },
};

// console.log(typeof product);
// console.log(product);
// let str = JSON.stringify(product);
// console.log(typeof str);
// console.log(str);

// let new_product = JSON.parse(str);
// console.log(typeof new_product);
// console.log(new_product);

// Local Storage
localStorage.setItem("product", JSON.stringify(product));
console.log(localStorage.getItem("product"));

let product_2 = JSON.parse(localStorage.getItem("product"));
console.log(product_2);

localStorage.setItem("Name", "Shaad");
localStorage.setItem("Age", "22");

console.log(localStorage.getItem("Name"));
console.log(localStorage.getItem("Age"));
