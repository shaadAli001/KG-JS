let currentDisplay = "";
document.querySelector("#display").value = currentDisplay;

function add_clear() {
  currentDisplay = "";
  document.querySelector("#display").value = currentDisplay;
}

function add_equal() {
  currentDisplay= eval(currentDisplay);
  document.querySelector("#display").value = currentDisplay;
}

function add_plus() {
  currentDisplay = currentDisplay + "+";
  document.querySelector("#display").value = currentDisplay;
}
function add_minus() {
  currentDisplay = currentDisplay + "-";
  document.querySelector("#display").value = currentDisplay;
}
function add_mul() {
  currentDisplay = currentDisplay + "*";
  document.querySelector("#display").value = currentDisplay;
}
function add_div() {
  currentDisplay = currentDisplay + "/";
  document.querySelector("#display").value = currentDisplay;
}
function add_dot() {
  currentDisplay = currentDisplay + ".";
  document.querySelector("#display").value = currentDisplay;
}

function add_0() {
  currentDisplay = currentDisplay + 0;
  document.querySelector("#display").value = currentDisplay;
}
function add_1() {
  currentDisplay = currentDisplay + "1";
  document.querySelector("#display").value = currentDisplay;
}

function add_2() {
  currentDisplay = currentDisplay + "2";
  document.querySelector("#display").value = currentDisplay;
}
function add_3() {
  currentDisplay = currentDisplay + "3";
  document.querySelector("#display").value = currentDisplay;
}
function add_4() {
  currentDisplay = currentDisplay + "4";
  document.querySelector("#display").value = currentDisplay;
}
function add_5() {
  currentDisplay = currentDisplay + "5";
  document.querySelector("#display").value = currentDisplay;
}
function add_6() {
  currentDisplay = currentDisplay + "6";
  document.querySelector("#display").value = currentDisplay;
}
function add_7() {
  currentDisplay = currentDisplay + "7";
  document.querySelector("#display").value = currentDisplay;
}
function add_8() {
  currentDisplay = currentDisplay + "8";
  document.querySelector("#display").value = currentDisplay;
}
function add_9() {
  currentDisplay = currentDisplay + "9 ";
  document.querySelector("#display").value = currentDisplay;
}
