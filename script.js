// Assignment Code
var generateBtn = document.querySelector("#generate");

// Creating array of values for lowercase, uppercase, numeric, and special characters
// Started with arrays, but realized it might be better to just use strings
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "0123456789"
var special = "!@#$%^&*(){}[].,:;?<>/\\|'~-+=_`\"" 

// Creating functions for random character selector
function randomLower() {
  var lowrando = Math.floor(Math.random() * 26);
  return lower.slice(lowrando, lowrando + 1);
}

function randomUpper() {
  var uprando = Math.floor(Math.random() * 26);
  return upper.slice(uprando, uprando + 1);
}

function randomNumber() {
  var numrando = Math.floor(Math.random() * 10);
  return number.slice(numrando, numrando + 1);
}

function randomSpecial() {
  var specrando = Math.floor(Math.random() * 32);
  return special.slice(specrando, specrando +1);
}

console.log(randomLower());
console.log(randomUpper());
console.log(randomNumber());
console.log(randomSpecial());

// // Creating function to ask user for parameters
// function choice() {
//   var passlength = window.prompt("Pick a password character length between 8 and 128");
//     if (passlength < 8 || passlength > 128) {
//       window.prompt("That is an incorrect value")
//       choice();
//     }
//     else {
//     }
  
//   var lowerconfirm = window.confirm("Do you want to add lowercase letters?")
//   console.log("is this working")
// }

// // Defining function for generatePassword
// function generatePassword() {
//   console.log("Hit confirm")  // here to confirm things work

//   // Need to prompt user with criteria for password
//   // We start with asking for password lenght, must be between 8 and 128 characters
//   // Following prompts are to ask of inclusion of lowercase, uppercase, numeric, and special characters
//   // Must ensure that password length is of appropriate lenght (validate user input)
//   // Also ensure the user has confirmed at least one inclusion
//   // Generate a password based on criteria selected
//   // Finally display password on page

//   return "We didn't drop the combo yet" // we'll put the password here, but while coding, we'll have sample text to check
// }

// // Write password to the #password input
// function writePassword() {
//   choice();
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
