console.log("Hi, welcome!");
console.log(
  'type "add()" and press enter to call the addition function I built in:'
);

function changeH1() {
  var header = document.getElementById("header");

  if (header.innerHTML == "Look I changed!") {
    header.innerHTML = "Header";
  } else {
    header.innerHTML = "Look I changed!";
  }
}

function add() {
  var num1;
  var num2;

  num1 = parseInt(prompt("Enter first number to add: ", 0));
  num2 = parseInt(prompt("Enter second number to add: ", 0));

  alert(num1 + " + " + num2 + " = " + (num1 + num2));
  console.log(num1 + " + " + num2 + " = " + (num1 + num2));
}
