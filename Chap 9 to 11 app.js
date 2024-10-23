// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// let city = prompt("Enter city name:");


// if (city.toLowerCase() === "karachi") {
//   document.write("Welcome to city of lights!");
// } else {
//   document.write(`Welcome to ${city}!`);
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// let gender = prompt("Enter your gender (male/female):");


// if (gender.toLowerCase() === "male") {
//   document.write("Good Morning Sir!");
// } else if (gender.toLowerCase() === "female") {
//   document.write("Good Morning Ma’am!");
// } else {
//   document.write("Invalid input. Please enter male or female.");
// }

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// let color = prompt("Enter traffic signal color (red/yellow/green):");

// // Check color and display message
// if (color.toLowerCase() === "red") {
// document.write("Must Stop!");
// } else if (color.toLowerCase() === "yellow") {
// document.write("Ready to move!");
// } else if (color.toLowerCase() === "green") {
// document.write("Move now!");
// } else {
// document.write("Invalid input. Please enter red, yellow or green.");
// }

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
    
// let fuel = prompt("Enter remaining fuel in litres:");

// if (fuel < 0.25) {
// document.write("Please refill the fuel in your car!");
// } else {
// document.write("You have " + fuel.toString() + " litres of fuel left.");
// }


// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// a m Alert message display hota h.
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

//b m Alert message display nh hota h.
// var b = 82;
// if (b++ === 83) {
//   alert("Given condition for variable b is true");
// }


//condition 1 m Alert message display nh hota h.
// var c = 12;
// if (c++ === 13) {
//   alert("Condition 1 is true");
// }

// //condition 2 m Alert message display hota h.
// if (c === 13) {
//   alert("Condition 2 is true");
// }

// //condition 3 m Alert message display nh hota h
// if (++c < 14) {
//   alert("Condition 3 is true");
// }

// //condition 4 m Alert message display hota h.
// if (c === 14) {
//   alert("Condition 4 is true");
// }

// Alert message display hota h.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// Alert message display hota h.
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// Alert message display hota h.
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// let subject1 = parseInt(prompt("Enter marks obtained in Subject 1 (out of 100):"));
// let subject2 = parseInt(prompt("Enter marks obtained in Subject 2 (out of 100):"));
// let subject3 = parseInt(prompt("Enter marks obtained in Subject 3 (out of 100):"));

// // Calculate total marks obtained
// let totalObtained = subject1 + subject2 + subject3;

// // Calculate percentage
// let percentage = (totalObtained / 300) * 100;


// document.write("<h1>Marks Sheet:</h1>");
// document.write(`<p>Marks Obtained in Subject 1: ${subject1}/100</p>`);
// document.write(`<p>Marks Obtained in Subject 2: ${subject2}/100</p>`);
// document.write(`<p>Marks Obtained in Subject 3: ${subject3}/100</p>`);
// document.write(`<p>Total Marks Obtained: ${totalObtained}/300</p>`);
// document.write(`<p>Percentage: ${percentage.toFixed(2)}%</p>`);

// // Assign grade aur remarks based on percentage
// let grade, remarks;
// if (percentage >= 80) {
//   grade = "A-One";
//   remarks = "Excellent";
// } else if (percentage >= 70) {
//   grade = "A";
//   remarks = "Good";
// } else if (percentage >= 60) {
//   grade = "B";
//   remarks = "You need to improve";
// } else {
//   grade = "Fail";
//   remarks = "Sorry";
// }
// // Display grade aur remarks
// document.write(`<p>Grade: ${grade}</p>`);
// document.write(`<p>Remarks: ${remarks}</p>`);

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


// let secretNumber = Math.floor(Math.random() * 10) + 1;


// let userGuess = parseInt(prompt("Guess the secret number (1-10):"));


// if (userGuess === secretNumber) {
//   alert("Bingo! Correct answer");
// } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
//   alert("Close enough to the correct answer");
// } else {
//   alert(`Sorry, incorrect answer. Secret number was ${secretNumber}.`);
// }

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// let number = parseInt(prompt("Enter a number:"));

// // Check if number is divisible by 3
// if (number % 3 === 0) {
//   alert(`${number} is divisible by 3.`);
// } else {
//   alert(`${number} is not divisible by 3.`);
// }

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// let number = parseInt(prompt("Enter a number:"));

// // Check if number is even or odd
// if (number % 2 === 0) {
//   alert(`${number} is an even number.`);
// } else {
//   alert(`${number} is an odd number.`);
// }


// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// let temperature = parseInt(prompt("Enter temperature in degree Celsius:"));


// if (temperature > 40) {
//   alert("It is too hot outside.");
// } else if (temperature > 30) {
//   alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//   alert("Today’s Weather is cool.");
// } else if (temperature > 10) {
//   alert("OMG! Today’s weather is so Cool.");
// } else {
//   alert("It's freezing outside!");
// }

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// let num1 = parseFloat(prompt("Enter first number:"));
// let operator = prompt("Enter operation (+, -, *, /, %):");
// let num2 = parseFloat(prompt("Enter second number:"));

// // Check operation and calculate result
// if (operator === "+") {
//   result = num1 + num2;
//   alert(`${num1} + ${num2} = ${result}`);
// } else if (operator === "-") {
//   result = num1 - num2;
//   alert(`${num1} - ${num2} = ${result}`);
// } else if (operator === "*") {
//   result = num1 * num2;
//   alert(`${num1} * ${num2} = ${result}`);
// } else if (operator === "/") {
//   if (num2 !== 0) {
//     result = num1 / num2;
//     alert(`${num1} / ${num2} = ${result}`);
//   } else {
//     alert("Error: Division by zero!");
//   }
// } else if (operator === "%") {
//   result = num1 % num2;
//   alert(`${num1} % ${num2} = ${result}`);
// } else {
//   alert("Invalid operation!");
// }