// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  lengthPassword();

function lengthPassword() {
  
  passwordLength = window.prompt("Enter the number of characters you would like in your password. Your password must be between 8 and 120 characters");

  }
}