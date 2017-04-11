// User story one
// perform basic math using the calculator

// Needs eventlisteners on all the numbers
// And event listeners on all the other buttons
// When the buttons are clicked
// Needs to add the nuber to a variable
// Then neds to work out what arithmetic operation to perform
// Then the other numbers
// then return the total to the html in the total div

// Also needs to remove event listeners between clicking on numbers//
// And operators

var calculationString = "";
var totalHtml = document.getElementsByClassName('total');


//Loops from 0 to 9, adds an event listener for each.
// Will have work work out assigning it to an array?
for(var i = 0; i < 10; i++) {
  document.getElementById(i).addEventListener("click", clickNumberButton);
}

// Can refactor this?
// Add the ids to an array, loop through and add a listener?

document.getElementById("ac").addEventListener("click", reset);
document.getElementById("ce").addEventListener("click", reset);
document.getElementById("divide").addEventListener("click", clickButton);
document.getElementById("multiply").addEventListener("click", clickButton);
document.getElementById("minus").addEventListener("click", clickButton);
document.getElementById("plus").addEventListener("click", clickButton);
document.getElementById("dot").addEventListener("click", clickNumberButton);

document.getElementById("equals").addEventListener("click", equals);


function clickNumberButton() {
  if(event.target.id === "dot") {
    calculationString += ".";
    totalHtml[0].innerHTML = calculationString;
  } else {
    calculationString += event.target.id;
    totalHtml[0].innerHTML = calculationString;
  }
}

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


function reset() {
  totalHtml[0].innerHTML = "00000000";
  calculationString = "";
}

function equals() {
  total = eval(calculationString);
  totalHtml[0].innerHTML = total;
}
