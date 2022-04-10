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

console.log(randomLower()); // get rid of after finish coding. Only here to confirm on the console
console.log(randomUpper()); // get rid of after finish coding. Only here to confirm on the console
console.log(randomNumber()); // get rid of after finish coding. Only here to confirm on the console
console.log(randomSpecial()); // get rid of after finish coding. Only here to confirm on the console

// Creating function to ask user for parameters
// function choice() {
//   var passlength = window.prompt("Pick a password character length between 8 and 128");
//       if (passlength < 8 || passlength > 128) {
//       window.alert("That is an incorrect value, please start over")
//     }
//     else {
//       var lowerchoice = window.confirm("Do you want to include lowercase letters?")
//       var upperchoice = window.confirm("Do you want to include uppercase letters?")
//       var numberchoice = window.confirm("Do you want to include numbers?")
//       var specialchoice = window.confirm("Do you want to include special characters?")
//         if (lowerchoice, upperchoice, numberchoice, specialchoice === false) {
//           window.alert("You must select at least one criteria, plese start over")
//         }
//         else {
//         }
//     }

//   console.log(passlength) // get rid of after finish coding. Only here to confirm on the console
//   console.log(lowerchoice) // get rid of after finish coding. Only here to confirm on the console
//   console.log(upperchoice) // get rid of after finish coding. Only here to confirm on the console
//   console.log(numberchoice) // get rid of after finish coding. Only here to confirm on the console
//   console.log(specialchoice) // get rid of after finish coding. Only here to confirm on the console

// }

// Defining function for generatePassword
function generatePassword() {
    var passlength = window.prompt("Pick a password character length between 8 and 128");
        if (passlength < 8 || passlength > 128) {
        window.alert("That is an incorrect value, please start over")
      }
      else {
        var lowerchoice = window.confirm("Do you want to include lowercase letters?")
        var upperchoice = window.confirm("Do you want to include uppercase letters?")
        var numberchoice = window.confirm("Do you want to include numbers?")
        var specialchoice = window.confirm("Do you want to include special characters?")
          if (lowerchoice === false && upperchoice === false && numberchoice === false && specialchoice === false) {
            window.alert("You must select at least one criteria, plese start over")
          }
          else {
          }
      }
  
    console.log(passlength) // get rid of after finish coding. Only here to confirm on the console
    console.log(lowerchoice) // get rid of after finish coding. Only here to confirm on the console
    console.log(upperchoice) // get rid of after finish coding. Only here to confirm on the console
    console.log(numberchoice) // get rid of after finish coding. Only here to confirm on the console
    console.log(specialchoice) // get rid of after finish coding. Only here to confirm on the console
  
  var combined = ""
    if (lowerchoice === true) {
      var newcombined = combined.concat(lower);
    }
    else {
      var newcombined = combined
    }
    if (upperchoice === true) {
      var newercombined = newcombined.concat(upper);
    }
    else {
      var newercombined = newcombined
    }
    if (numberchoice === true) {
      var newestcombined = newercombined.concat(number);
    }
    else {
      var newestcombined = newercombined
    }
    if (specialchoice === true) {
      var finalcombined = newestcombined.concat(special);
    }
    else {
      var finalcombined = newestcombined
    }
  console.log(finalcombined)


  
  console.log("Hit confirm")  // get rid of after finish coding. Only here to confirm on the console

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