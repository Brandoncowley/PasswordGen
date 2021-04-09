// Assignment Code
var generateBtn = document.querySelector("#generate");

// WRITE FUNCTIONS TO GET ALL CHARACTERS FOR PASSWORD
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
  const symbols = "#$%&'()*+,-./:;<=>?@[]^_`{|}";
  return symbols[Math.floor(Math.random() * symbols.length)];
}


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

function includeUpperCase() {
  passwordLength = window.prompt("Would you like to inlude upper case characters?");
  } 


function includeLowerCase() {
  passwordLength = window.prompt("Would you like to include lower case characters?");
  }


function includeSymbols() {
  passwordLength = window.prompt("Would you like to include symbols?");
  }

