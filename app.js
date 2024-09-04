// JavaScript Assignment No # 3
// chapter no 9 
// Question 1
var city = prompt("Please enter a city");
if (city == "Karachi") {
    console.log("The city of lights");
}
// Question 2
var gender = prompt("type your gender");
if (gender == "male") {
    console.log("Good Morning Sir");
} else {
    console.log("Good Morning Ma'am");
}
// Question 3
var color = prompt("Enter your color");
if (color == "red") {
    console.log("Must Stop");
} else if (color == "yellow") {
    console.log("Ready to move");
} else if (color == "green") {
    console.log("Move now");
}
// Question 4
var fuel = prompt("Enter your fuel in liters");
if (fuel < 0.25) {
    console.log("Please refill the fuel in your car");
}
// Question 5
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
} 
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}