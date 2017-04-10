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
element = document.getElementById("1");
console.log(element);

element.addEventListener("click", myFunction, true);

function myFunction() {
  window.alert("win");
}
