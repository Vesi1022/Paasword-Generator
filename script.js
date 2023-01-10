// Assignment code here



var generateBtn = document.querySelector("#generate");
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];


function getOptions() {
  var passwordLength = prompt("How long would you like the password to be? must be between 8-128 characters.")
  var passwordLowercase = confirm("Will you prefer to include lowercase letters in the password?");
  console.log("passwordLowercase " + lowerCase );
 var  passwordUppercase = confirm("Will you prefer to include uppercase letters in the password??");
  console.log(" passwordUppercase " + uppercase);
 var  passwordNumeric = confirm("Will you prefer to include numbers in the password??");
  console.log(" Numeric" + numbers );
  var passwordSpecial = confirm("Will you prefer to include special characters in the password??");
  console.log(" Special" + special);
  if (passwordLowercase === false && passwordUppercase === false && passwordNumeric === false && passwordSpecial === false) {
    alert("You must select at least one character type");
  return;

  }
  return {
    passwordUppercase,
    passwordLowercase,
    passwordNumeric,
    passwordSpecial,
    passwordLength,

  } 
}

function generatePassword() {
  var {passwordUppercase,passwordLowercase,passwordLength,passwordNumeric} = getOptions()
  var passwordCharacters = "";
  if (passwordLowercase === true) {
    passwordCharacters += "lowerCase";
  }
  if (passwordUppercase === true) {
    passwordCharacters += "Uppercase";
  }
  if (passwordNumeric === true) {
    passwordCharacters += "numbers";
  }
  if (passwordSpecial === true) {
    passwordCharacters += "special";
  }
  for (var i = 0; i < passwordLength; i++) {
    password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));

    return;
  }
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
