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

//Loops from 0 to 9, adds an event listener for each.
// Will have work work out assigning it to an array?

for(var i = 0; i < 10; i++) {
  element = document.getElementById(i);
  element.addEventListener("click", myFunction);
}



function myFunction() {
  console.log("win");;
}
