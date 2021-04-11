// WRITE FUNCTIONS TO GET ALL CHARACTERS FOR PASSWORD
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specChar = "#$%&'()*+,-./:;<=>?@[]^_`{|}";
var numbers = "0123456789";
var passwordLength = 0;
var lowerCasePrompt = "";
var characterLists = [];
;
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
//when button is clicked, "writePassword" is initiated
  var password = "";
  var isValidLength = lengthPassword();
  if (isValidLength) {

    var useUpperCase = upperCaseFunction();
    if (useUpperCase) characterLists.push(upperCase)
    var useLowerCase = lowerCaseFunction();
    if (useLowerCase) characterLists.push(lowerCase)
    var useSpecChar = specCharFunction();
    if (useSpecChar) characterLists.push(specChar)
    var useNumbers = numFunction();
    if (useNumbers) characterLists.push(numbers)
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * characterLists.length)
      var characterArray = characterLists [randomIndex]
      var randomIndex2 = Math.floor(Math.random() * characterArray.length)
      password += characterArray[randomIndex2]
    }
  }

return password

function lengthPassword() {//PROMPT is used to generate the dialogue box
  passwordLength = prompt("Enter the number of characters you would like in your password. Your password must be between 8 and 120 characters");
  
  if (!passwordLength) {
    return false;
  };
  if (passwordLength === " " || isNaN(passwordLength) || passwordLength < 8 || passwordLength > 129) {
    alert("The password length does not meet requirements, please try again");
    return false;
  };
  return true
} 

//Needto ask if user wants each of the 4 options
function upperCaseFunction() {
  var upperCasePrompt = confirm("Would you like to include UPPER CASE characters?")
  return upperCasePrompt;
}//the phrase "confirm" is what generates this window

function lowerCaseFunction() {
  var lowerCasePrompt = confirm("Would you like to include lower case characters?")
  return lowerCasePrompt;
} 

function specCharFunction() {
  var specCharPrompt = confirm("Would you like to include $pe{i@l characters?")
  return specCharPrompt;
}

function numFunction() {
  var numberPrompt = confirm("Would you like to include numb3r5?")
  return numberPrompt;

}}
