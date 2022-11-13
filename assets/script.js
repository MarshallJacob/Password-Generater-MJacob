// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Event listener to generate the password
generateBtn.addEventListener("click", generatePassword);

// Variable for number array
const numbers = String.fromCharCode(...Array(123).keys()).slice(48, 58);
// Variable for symbol array
const symbols = String.fromCharCode(...Array(123).keys())
.slice(33, 48).concat(String.fromCharCode(...Array(123).keys()).slice(59, 65));
// Variable for letters, creates an array tied to the character code that represents each letter.
const letterRange = (Array.from(Array(26)).map( (_, i) => i + 97));
// Pulls from created array to create a list of lower case letters to pull from.
const lowerLetters = String.fromCharCode(...Array(123).keys()).slice(97);
// Pulls from the lowercase letters array and converts them to uppercase. 
const upperLetters = String.fromCharCode(...Array(123).keys()).slice(65, 91);


// function randomCharacters() {
//   var passCharacters = {
//     numbers: numbers.value,
//     symbols: symbols.value,
//     lowerLetters: lowerLetters.value,
//     upperLetters: upperLetters.value,
//   };

//   for (var i = 0; i < characterValue; i++)
//     text += passCharacters.charAt(Math.floor(Math.random() * passCharacters.length));

//     return console.log(randomCharacters)

// }



// Promt to ask the user how long they would like their password to be
const passwordLength = function () {
  lengthResponse = prompt(
    "How long will your password be?"
  );
  // verification that the desired length fits within set parameters
  if (lengthResponse < 8) {
    alert("Password must have at least characters.");
    passwordLength();
  } else if (lengthResponse > 128) {
    alert("Password must have less than 128 characters.");
    passwordLength();
  } else if (isNaN(lengthResponse)) {
    alert("Password must be a number!");
    passwordLength();
  }
  return passwordLength;
};

// prompt to ask user weather or not they want to use numbers in their password
const includeNumbers = function () {
  numberResponse = prompt("would you like numbers in your password?");
  numberResponse = numberResponse.toLowerCase();
  // turnary to handle response from user
  if (numberResponse === null || numberResponse === "") {
    alert("Please select Yes or No");
    includeNumbers();
  } else if (numberResponse === "yes" || numberResponse === "y") {
    numberResponse = true;
    return numberResponse;
  } else if (numberResponse === "no" || numberResponse === "n") {
    numberResponse = false;
    return numberResponse;
  } else {
    alert("Please select Yes or No");
    includeNumbers();
  }
  return numberResponse;
};

//  promt user to choose to use symbols in their password
const includeSymbols = function () {
  symbolResponse = prompt(
    "Would you like special characters in your password?"
  );
  symbolResponse = symbolResponse.toLowerCase();
  // ask user if they wany to use symbols
  if (symbolResponse === null || symbolResponse === "") {
    alert("Please select Yes or No");
    includeSymbols();
  } else if (symbolResponse === "yes" || symbolResponse === "y") {
    symbolResponse = true;
    return symbolResponse;
  } else if (symbolResponse === "no" || symbolResponse === "n") {
    symbolResponse = false;
    return symbolResponse;
  } else {
    alert("Please select Yes or No");
    includeSymbols();
  }
  return symbolResponse;
};

// prompt for the user to select lower case letter in their password
const includeLowerLetters = function () {
  lowerLetterResponse = prompt(
    "Would you like lowercase letters in your password?"
  );
  lowerLetterResponse = lowerLetterResponse.toLowerCase();
  // asks for user to respond with yes or no and how to handle their response
  if (lowerLetterResponse === null || lowerLetterResponse === "") {
    alert("Please select Yes or No");
    includeLowerLetters();
  } else if (lowerLetterResponse === "yes" || lowerLetterResponse === "y") {
    lowerLetterResponse = true;
    return lowerLetterResponse;
  } else if (lowerLetterResponse === "no" || lowerLetterResponse === "n") {
    lowerLetterResponse = false;
    return lowerLetterResponse;
  } else {
    alert("Please select Yes or No");
    includeLowerLetters();
  }
  return lowerLetterResponse;
};

// promt asking to user if they want uppercase letters
const includeUpperLetters = function () {
  upperLetterResponse = prompt(
    "Would you like uppercase letters in your password?"
  );
  upperLetterResponse = upperLetterResponse.toLowerCase();
  // Turnary logic to determine what to do when user decides yes or no
  if (upperLetterResponse === null || upperLetterResponse === "") {
    alert("Please select Yes or No");
    includeUpperLetters();
  } else if (upperLetterResponse === "yes" || upperLetterResponse === "y") {
    upperLetterResponse = true;
    return upperLetterResponse;
  } else if (upperLetterResponse === "no" || upperLetterResponse === "n") {
    upperLetterResponse = false;
    return upperLetterResponse;
  } else {
    alert("Please select Yes or No");
    includeUpperLetters();
  }
  return upperLetterResponse;
};


// Write password to the #password input
function writePassword(e) {
  e.preventDefault();
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

  return 
};


function generatePassword () {
  // call each function to activate prompts for the user
  passwordLength();
  console.log(lengthResponse);
  includeNumbers();
  console.log(numberResponse);
  includeSymbols();
  console.log(symbolResponse);
  includeLowerLetters();
  console.log(lowerLetterResponse);
  includeUpperLetters();
  console.log(upperLetterResponse);
  

  let characterString = '';
  let password = '';

  // logic to handle each scenario of the user input
  if (lowerLetterResponse && upperLetterResponse && numberResponse && symbolResponse) {
  characterString += lowerLetters + upperLetters + numbers + symbols;
  } else if (lowerLetterResponse && upperLetterResponse) {
  characterString += lowerLetters + upperLetters;
  } else if (upperLetterResponse && numberResponse) {
  characterString += upperLetters + numbers;
  } else if (numberResponse && symbolResponse) {
  characterString += numbers + symbols;
  } else if (symbolResponse && lowerLetterResponse) {
  characterString += symbols + lowerLetters;
  } else if (lowerLetterResponse) {
  characterString += lowerLetters;
  } else if (upperLetterResponse) {
  characterString += upperLetters;
  } else if (numberResponse) {
  characterString += numbers;
  } else if (symbolResponse) {
  characterString += symbols;
  }

// loop through the selected password length to return the values of the selected characters to be used
for (var i = 0; i < passwordLength; i++) {
  password += characterString.charAt(
    Math.floor(Math.random() * characterString.length)
  );
}
// returns password to main function
return password;
};

    
