// Assignment Code
var generateBtn = document.querySelector("#generate");

// Creating array of values for lowercase, uppercase, numeric, and special characters
const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", ".", ",", ":", ";", "?", "<", ">", "/", "\\", "'", "\"", "~", "-", "+", "=", "_", "`"] 

// Creating function to ask user for parameters
function choice() {
  var passlength = window.prompt("Pick a password character length between 8 and 128");
    if (passlength < 8 || passlength > 128) {
      window.prompt("That is an incorrect value")
      choice();
    }
    else {
    }
  
  var lowerconfirm = window.confirm("Do you want to add lowercase letters?")
  console.log("is this working")
}

// Defining function for generatePassword
function generatePassword() {
  console.log("Hit confirm")  // here to confirm things work

  // Need to prompt user with criteria for password
  // We start with asking for password lenght, must be between 8 and 128 characters
  // Following prompts are to ask of inclusion of lowercase, uppercase, numeric, and special characters
  // Must ensure that password length is of appropriate lenght (validate user input)
  // Also ensure the user has confirmed at least one inclusion
  // Generate a password based on criteria selected
  // Finally display password on page

  return "We didn't drop the combo yet" // we'll put the password here, but while coding, we'll have sample text to check
}

// Write password to the #password input
function writePassword() {
  choice();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
