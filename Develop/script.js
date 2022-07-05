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
// Var for character amount selecter
const characterRangeNumber = document.querySelector ("#characterRangeNumber");
// Var for lowercase selector
const lowercaseLetters = document.querySelector ("#lowercaseLetters");
// Var for uppercase selector
const uppercaseLetters = document.querySelector ("#uppercaseLetters");
// Var for numbers selector
const numbersBox = document.querySelector ("#numbersBox");
// Var for symbols selector
const symbolsBox = document.querySelector ("#symbolsBox");

let randomNumbers = numbers[Math.floor(Math.random() * numbers.length)]

let randomSymbols = symbols[Math.floor(Math.random() * symbols.length)]

let randomLowerLetters = lowerLetters[Math.floor(Math.random() * lowerLetters.length)]

let randomUpperLetters = upperLetters[Math.floor(Math.random() * upperLetters.length)]

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Event listener to generate the password
generateBtn.addEventListener("click", writePassword,)

// Write password to the #password input
function writePassword(e) {
  e.preventDefault();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  return password
};



function generatePassword () {


  // characterRangeNumber.addEventListener('value', function(){
      
  // })

  let characterValue = characterRangeNumber.value
  console.log(characterValue)
  
  numbersBox.addEventListener('change', function(){
    if(numbersBox.checked)
        randomNumbers 
      else 
        console.log(false)
  })

  symbolsBox.addEventListener('change', function(){
    if(symbolsBox.checked)
        console.log(randomSymbols)
      else 
        console.log(false)
  })

  lowercaseLetters.addEventListener('change', function(){
    if(lowercaseLetters.checked)
        console.log(randomLowerLetters)
      else 
        console.log(false)
  })

  uppercaseLetters.addEventListener('change', function(){
    if(uppercaseLetters.checked)
        console.log(randomUpperLetters)
      else 
        console.log(false)
})

return
}





// function setCharAmount(e) {
//   const value = e.target.value
//   characterRangeNumber.value = value
//   return console.log(characterRangeNumber)
// }



// var characterRangeNumber = characterRangeNumber.value;
//   var uppercaseLetters = uppercaseLettersElement.checked;
//   var lowercaseLetter = lowercaseLettersElement.checked;
//   var numbersBox = numbersBoxElement.checked;
//   var symbolsBox = symbolsBoxElement.checked;

// characterRangeNumber, uppercaseLetters, lowercaseLetter, numbersBox, symbolsBox



// NOTES
// Items left to complete assignment:
// 1. Pull random letters from the pools
    // d. create for loop?
    // e. create let instance for the value of number range?
    
// 2. Return password
    // a. make sure that each individual element is being accounted for. 



    // a. Pull javascript elements from html: DONE
    // b. Verify character total: DONE
    // c. verify that each element returns true or false: DONE