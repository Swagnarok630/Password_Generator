// Assignment Code
var generateBtn = document.querySelector("#generate");

// Creating array of values for lowercase, uppercase, numeric, and special characters
// Started with arrays, but realized it might be better to just use strings
var lower = "abcdefghijklmnopqrstuvwxyz"
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "0123456789"
var special = "!@#$%^&*(){}[].,:;?<>/\\|'~-+=_`\"" 

// Creating functions for random character selector
// Ended up not needing these, but keeping around just in case
// function randomLower() {
//   var lowrando = Math.floor(Math.random() * 26);
//   return lower.slice(lowrando, lowrando + 1);
// }

// function randomUpper() {
//   var uprando = Math.floor(Math.random() * 26);
//   return upper.slice(uprando, uprando + 1);
// }

// function randomNumber() {
//   var numrando = Math.floor(Math.random() * 10);
//   return number.slice(numrando, numrando + 1);
// }

// function randomSpecial() {
//   var specrando = Math.floor(Math.random() * 32);
//   return special.slice(specrando, specrando +1);
// }

// Used during coding to confirm functionality
// console.log(randomLower()); 
// console.log(randomUpper()); 
// console.log(randomNumber()); 
// console.log(randomSpecial()); 

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
  
    // Used during coding to confirm functionality
    // console.log(passlength) 
    // console.log(lowerchoice) 
    // console.log(upperchoice) 
    // console.log(numberchoice) 
    // console.log(specialchoice) 
  
  // Creating new string that combines all possible characters by user criteria. Probably a better way than this, but this suffices
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

  // Used during coding to confirm functionality
  // console.log(finalcombined)

  // Using for loop to generate a password following all the previous criteria
    var criterialength = finalcombined.length
    const generation = []
    for (let i = 0; i < passlength; i++) {
      let generandom = Math.floor(Math.random() * criterialength);
      let passchar = finalcombined.slice(generandom, generandom + 1)
      generation.push(passchar);
    }
    
    // Used during coding to confirm functionality
    // console.log(generation);

  return generation.join(""); 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);