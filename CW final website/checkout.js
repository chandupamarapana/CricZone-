// JavaScript
// Get the element with the ID "ok" and store it in the variable 'ok1'
var ok1 = document.getElementById("ok");
// Attach the 'numberValidation' function to the 'click' event of the element with ID "ok"
ok1.addEventListener('click', numberValidation);

function numberValidation() {
    event.preventDefault();
    // Get the values of two input elements with IDs "crnum" and "num" and parse them as floating-point numbers
    var num1 = parseFloat(document.getElementById("crnum").value);
    var num2 = parseFloat(document.getElementById("num").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        // If either value is not a number, show an alert message
        return false;
    } else {
        // If both values are valid numbers, show a thank you message
        alert("Thank you for purchasing");
    }
}
