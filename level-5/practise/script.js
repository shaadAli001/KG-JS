let product = {
  size: "s",
  name: "jeans",
  fit: "slim series",
  // delivery_duration: "2-5",
  // message: "Good Job",
  // status: "Complete",
};
let product_2 = {
  size: "s",
  name: "jeans",
  fit: "slim series",
};
// let copy_product = product;
// console.log(copy_product);
// copy_product.size = "m";
// console.log(product.size);

// console.log(product["delivery_duration"]);

// let { message, status } = product;
// console.log(`${message}\n${status}`);

const identical_products = (product, product_2) => {
  if (typeof product !== "object" || typeof product_2 !== "object") {
    return false;
  }
  if (product == product_2) {
    return true;
  }
  if (
    product.name == product_2.name &&
    product.size == product_2.size &&
    product.fit == product_2.fit
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(identical_products(product, product_2));
