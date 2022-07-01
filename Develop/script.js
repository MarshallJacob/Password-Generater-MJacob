// Variable for number array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// Variable for symbol array
var symbols = ["!", "@", "#", "$", "%", "&"];
// Variable for letters, creates an array tied to the character code that represents each letter.
var letterRange = (Array.from(Array(26)).map( (_, i) => i + 97));
// Pulls from created array to create a list of lower case letters to pull from.
var lowerLetters = letterRange.map(code => String.fromCharCode(code));
// Pulls from the lowercase letters array and converts them to uppercase. 
var upperLetters = lowerLetters.map(letter => letter.toUpperCase());


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword () {

return "Generated password will go here"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
