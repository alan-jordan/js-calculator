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

// document.addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
// });


// eval may well be my friend
// eval(new String('2 + 2')); // returns a String object containing "2 + 2"
// eval('2 + 2');             // returns 4

var calculationArray = [];

//Loops from 0 to 9, adds an event listener for each.
// Will have work work out assigning it to an array?
for(var i = 0; i < 10; i++) {
  document.getElementById(i).addEventListener("click", clickButton);
}

// Can refactor this?
// Add the ids to an array, loop through and add a listener?

// document.getElementById("ac").addEventListener("click", clickButton);
// document.getElementById("ce").addEventListener("click", clickButton);

document.getElementById("divide").addEventListener("click", clickButton);
document.getElementById("multiply").addEventListener("click", clickButton);
document.getElementById("minus").addEventListener("click", clickButton);
document.getElementById("plus").addEventListener("click", clickButton);
// document.getElementById("dot").addEventListener("click", clickButton);

document.getElementById("equals").addEventListener("click", equals);

function clickButton() {
  // Case loop to assign operators out of the strings?
  switch(event.target.id) {
    case 'divide':
      calculationArray.push("/");
      break;
    case 'plus':
      calculationArray.push("+");
      break;
    case 'minus':
      calculationArray.push("-");
      break;
    case 'multiply':
      calculationArray.push("*");
      break;
    default:
      calculationArray.push(event.target.id);
  }
}

function equals() {
  var calculationString = calculationArray.join(' ');
  total = eval(calculationString);
  totalHtml = document.getElementsByClassName('total');
  totalHtml[0].innerHTML = total;
}
