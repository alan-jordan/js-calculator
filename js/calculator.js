// Basic variables
var calculationString = "";
var totalHtml = document.getElementsByClassName('total');
var operatorArray = ["*","/","+","-"];

// Initialises buttons when page loads
window.onload = initialiseButtons();

// Function to set up listeners on body load
function initialiseButtons() {
  for(var i = 0; i < 10; i++) {
    document.getElementById(i).addEventListener("click", clickNumberButton);
  }
  document.getElementById("dot").addEventListener("click", clickNumberButton);
  document.getElementById("ac").addEventListener("click", reset);
  document.getElementById("ce").addEventListener("click", reset);
  document.getElementById("equals").addEventListener("click", equals);
}

// Function to turn the operator buttons on
function addEventListenersOperators() {
  document.getElementById("divide").addEventListener("click", clickButton);
  document.getElementById("multiply").addEventListener("click", clickButton);
  document.getElementById("minus").addEventListener("click", clickButton);
  document.getElementById("plus").addEventListener("click", clickButton);
}

// Function to turn the operator buttons off
function removeEventListenersOperators() {
  document.getElementById("divide").removeEventListener("click", clickButton);
  document.getElementById("multiply").removeEventListener("click", clickButton);
  document.getElementById("minus").removeEventListener("click", clickButton);
  document.getElementById("plus").removeEventListener("click", clickButton);
}

// Function to add a clicked number button to the calculationString
function clickNumberButton() {
  if(event.target.id === "dot" && calculationString == "") {
    calculationString += "0.";
    totalHtml[0].innerHTML = calculationString;
  } else if (event.target.id === "dot" && operatorArray.includes(calculationString.charAt(calculationString.length-1))){
    calculationString += "0.";
    totalHtml[0].innerHTML = calculationString;
  } else if (event.target.id === "dot") {
    calculationString += ".";
    totalHtml[0].innerHTML = calculationString;
  } else {
    addEventListenersOperators();
    calculationString += event.target.id;
    totalHtml[0].innerHTML = calculationString;
  }
}

// Adds the correct operator to the calculationString and adds it to the totalHTML
function operatorButton(operator) {
  removeEventListenersOperators();
  calculationString += operator;
  totalHtml[0].innerHTML = operator;
}

// Adds the mathematical operator to the calculationString
function clickButton() {
  switch(event.target.id) {
    case 'divide':
      operatorButton("/");
      break;
    case 'plus':
      operatorButton("+");
      break;
    case 'minus':
      operatorButton("-");
      break;
    case 'multiply':
      operatorButton("*");
      break;
  }
}

// Resets the calculationString and sets the total back to a string of zeroes
function reset() {
  removeEventListenersOperators();
  totalHtml[0].innerHTML = "0000000000000000";
  calculationString = "";
}

// Works out the total from the evaulated string
function equals() {
  total = eval(calculationString);
  total = round(total, 4);
  // Set the calculation string to total which allows chaining of calulations.
  calculationString = total;
  totalHtml[0].innerHTML = total;
}

// Rounds to decimal places
function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}
