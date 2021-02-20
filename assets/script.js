// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
// Replaces "your secure password" with generated password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// The function generatePassword() should run with a series of prompts for password criteria

function generatePassword() {
  var ready = confirm("Would you like to generate a password?")
  if (ready = true) {
    alert("Let's set up some parameters:")
    confirm("Would you like your password to have ")
  }
  else {
    
  }



}