// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
// Initialize the variable
// let a = 10;

// document.write("Result:<br>");

// // Display the value of a
// document.write("The value of a is: " + a + "<br>");
// document.write(".........................................<br><br>");

// // Pre-increment (first time)
// document.write("The value of ++a is: " + ++a + "<br>");
// document.write("Now the value of a is: " + a + "<br> <br>");

// // Display the value of a again (without incrementing)
// document.write("The value of ++a is: " + a + "<br>");
// document.write("Now the value of a is: " + ++a + "<br><br>");

// // Pre-decrement
// document.write("The value of --a is: " + --a + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// // Post-decrement
// document.write("The value of a-- is: " + a-- + "<br>");
// document.write("Now the value of a is: " + a + "<br>");

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
// let a = 2, b = 1;
// let result = --a - --b + ++b + b--;

// document.write("a is " + a + "<br>");
// document.write("b is " + b + "<br>");
// document.write("result is " + result + "<br>");

// 3. Write a program that takes input a name from user &
// greet the user.

// let name = prompt("Please enter your name:");

// alert(`Hello, ${name}! Welcome!`);

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
// function displayTable() {
//     let number = document.getElementById("number").value;
    
//     // If user doesn't enter a number, default to 5
//     if (number === "") {
//       number = 5;
//     }
    
//     // Clear previous table
//     document.getElementById("table").innerHTML = "";
    
//     // Display multiplication table
//     for (let i = 1; i <= 10; i++) {
//       document.getElementById("table").innerHTML += `${number} x ${i} = ${number * i}<br>`;
//     }
//   }
  
//   // Display default table of 5 on page load
//   displayTable();

//   6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

// // Take subjects' names and marks from user
// let subject1 = prompt("Enter Subject 1:");
// let subject2 = prompt("Enter Subject 2:");
// let subject3 = prompt("Enter Subject 3:");

// let marks1 = parseInt(prompt("Enter marks for " + subject1 + ":"));
// let marks2 = parseInt(prompt("Enter marks for " + subject2 + ":"));
// let marks3 = parseInt(prompt("Enter marks for " + subject3 + ":"));

// // Total marks for each subject
// let totalMarks = 100;

// // Calculate total marks and percentage
// let totalObtained = marks1 + marks2 + marks3;
// let totalPossible = totalMarks * 3;
// let percentage1 = (marks1 / totalMarks) * 100;
// let percentage2 = (marks2 / totalMarks) * 100;
// let percentage3 = (marks3 / totalMarks) * 100;
// let overallPercentage = (totalObtained / totalPossible) * 100;

// // Display result
// document.write("<h1>Marks Report:</h1>");
// document.write("<table border='1'>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
// document.write(`<tr><td>${subject1}</td><td>${totalMarks}</td><td>${marks1}</td><td>${percentage1.toFixed(2)}%</td></tr>`);
// document.write(`<tr><td>${subject2}</td><td>${totalMarks}</td><td>${marks2}</td><td>${percentage2.toFixed(2)}%</td></tr>`);
// document.write(`<tr><td>${subject3}</td><td>${totalMarks}</td><td>${marks3}</td><td>${percentage3.toFixed(2)}%</td></tr>`);
// document.write(`<tr><th>Total</th><th>${totalPossible}</th><th>${totalObtained}</th><th>${overallPercentage.toFixed(2)}%</th></tr>`);
// document.write("</table>");
