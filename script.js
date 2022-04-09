// Assignment Code
var generateBtn = document.querySelector("#generate");

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
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
