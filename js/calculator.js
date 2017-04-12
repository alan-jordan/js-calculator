// Basic variables
var calculationString = "";
var totalHtml = document.getElementsByClassName('total');


// Features to add

// Rounding total to x decimal places.

// If dot is clicked, adds a zero in front it

// Operator and equals buttons don't work till something is in the
// calculationString

// Once an operator is the final character in the calculationString
// turn off listening on those buttons

// Don't turn on listener on equals button till a full string that should
// be calculatable exists. eg. number operator number.

// Sounds?

// Better rendering ofthe current calculation, looks a bit munted right now



//Loops from 0 to 9, adds an event listener for each.
// Will have work work out assigning it to an array?
for(var i = 0; i < 10; i++) {
  document.getElementById(i).addEventListener("click", clickNumberButton);
}

document.getElementById("ac").addEventListener("click", reset);
document.getElementById("ce").addEventListener("click", reset);

document.getElementById("divide").addEventListener("click", clickButton);
document.getElementById("multiply").addEventListener("click", clickButton);
document.getElementById("minus").addEventListener("click", clickButton);
document.getElementById("plus").addEventListener("click", clickButton);
document.getElementById("dot").addEventListener("click", clickNumberButton);

document.getElementById("equals").addEventListener("click", equals);

// Adds either a dot or the number clicked to the calculationString
function clickNumberButton() {
  if(event.target.id === "dot" && calculationString == "") {
    calculationString += "0.";
    totalHtml[0].innerHTML = calculationString;
  } else if (event.target.id === "dot") {
    calculationString += ".";
    totalHtml[0].innerHTML = calculationString;
  } else {
    calculationString += event.target.id;
    totalHtml[0].innerHTML = calculationString;
  }
}

// Adds the mathematical operator to the calculationString
function clickButton() {
  switch(event.target.id) {
    case 'divide':
      calculationString += "/";
      totalHtml[0].innerHTML = "/";
      break;
    case 'plus':
      calculationString += "+";
      totalHtml[0].innerHTML = "+";
      break;
    case 'minus':
      calculationString += "-";
      totalHtml[0].innerHTML = "-";
      break;
    case 'multiply':
      calculationString += "*";
      totalHtml[0].innerHTML = "*";
      break;
  }
}

// Resets the calculationString and sets the total back to a string of zeroes
function reset() {
  totalHtml[0].innerHTML = "0000000000000000";
  calculationString = "";
}

// Works out the total from the evaulated string
function equals() {
  total = eval(calculationString);
  // Set the calculation string to total which allows chaining of calulations.
  calculationString = total;
  totalHtml[0].innerHTML = total;
}
