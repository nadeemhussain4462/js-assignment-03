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
if ("car" < "cat") {
    alert("car is smaller than cat");
}
// Question 6
var sub1 = +prompt("Enter marks of subject 1");
var sub2 = +prompt("Enter marks of subject 2");
var sub3 = +prompt("Enter marks of subject 3");
var totalMarks = 300;
var obtainedMarks = sub1 + sub2 + sub3;
var percentage = (obtainedMarks / totalMarks) * 100;
document.write("<h1>Marks Sheet</h1>");
document.write("<br> Total Marks: " + totalMarks);
document.write("<br> Obtained Marks: " + obtainedMarks);
document.write("<br> Percentage: " + percentage + "%");
if (percentage >= 80) {
    document.write("<br> Grade: A-one");
    document.write("<br> Remarks: Excellent");
} else if (percentage >= 70) {
    document.write("<br> Grade: A");
    document.write("<br> Remarks: Good");
} else if (percentage >= 60) {
    document.write("<br> Grade: B");
    document.write("<br> Remarks: You need to improve");
} else {
    document.write("<br> Grade: Fail");
    document.write("<br> Remarks: Sorry");
}
// Question 7
var secretNumber = 7;
var guess = +prompt("Guess the secret number (between 1 and 10)");
if (guess === secretNumber) {
    console.log("Bingo! Correct answer");
} else if (guess + 1 === secretNumber) {
    console.log("Close enough to the correct answer");
}
// Question 8
var number = +prompt("Enter a number");
if (number % 3 === 0) {
    console.log("The number is divisible by 3");
}
// Question 9
var number = +prompt("Enter a number");
if (number % 2 === 0) {
    console.log("The number is even");
} else {
    console.log("The number is odd");
}
// Question 10
var temperature = +prompt("Enter the temperature");
if (temperature > 40) {
    console.log("It is too hot outside.");
} else if (temperature > 30) {
    console.log("The Weather today is Normal.");
} else if (temperature > 20) {
    console.log("Today’s Weather is cool.");
} else {
    console.log("OMG! Today’s weather is so Cool.");
}
// Question 11
var firstNumber = +prompt("Enter the first number");
var secondNumber = +prompt("Enter the second number");
var operation = prompt("Enter the operation (+, -, *, /, %)");
if (operation === "+") {
    console.log(firstNumber + secondNumber);
} else if (operation === "-") {
    console.log(firstNumber - secondNumber);
} else if (operation === "*") {
    console.log(firstNumber * secondNumber);
} else if (operation === "/") {
    console.log(firstNumber / secondNumber);
} else if (operation === "%") {
    console.log(firstNumber % secondNumber);
} else {
    console.log("Invalid operation");
}
