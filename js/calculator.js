// Basic variables
var calculationString = "";
var totalHtml = document.getElementsByClassName('total');
var operatorArray = ["*","/","+","-"];

//Loops from 0 to 9, adds an event listener for each.
for(var i = 0; i < 10; i++) {
  document.getElementById(i).addEventListener("click", clickNumberButton);
}
document.getElementById("dot").addEventListener("click", clickNumberButton);

document.getElementById("ac").addEventListener("click", reset);
document.getElementById("ce").addEventListener("click", reset);

function addEventListenersOperators() {
  document.getElementById("divide").addEventListener("click", clickButton);
  document.getElementById("multiply").addEventListener("click", clickButton);
  document.getElementById("minus").addEventListener("click", clickButton);
  document.getElementById("plus").addEventListener("click", clickButton);
}

function removeEventListenersOperators() {
  document.getElementById("divide").removeEventListener("click", clickButton);
  document.getElementById("multiply").removeEventListener("click", clickButton);
  document.getElementById("minus").removeEventListener("click", clickButton);
  document.getElementById("plus").removeEventListener("click", clickButton);
}



document.getElementById("equals").addEventListener("click", equals);

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

// Adds the mathematical operator to the calculationString
function clickButton() {
  switch(event.target.id) {
    case 'divide':
      removeEventListenersOperators();
      calculationString += "/";
      totalHtml[0].innerHTML = "/";
      break;
    case 'plus':
      removeEventListenersOperators();
      calculationString += "+";
      totalHtml[0].innerHTML = "+";
      break;
    case 'minus':
      removeEventListenersOperators();
      calculationString += "-";
      totalHtml[0].innerHTML = "-";
      break;
    case 'multiply':
      removeEventListenersOperators();
      calculationString += "*";
      totalHtml[0].innerHTML = "*";
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
