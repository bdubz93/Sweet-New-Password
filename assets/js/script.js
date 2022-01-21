//Sets generateBtn to the #generate id in HTML file
var generateBtn = document.querySelector("#generate");

//Function for length of the password
//Gives a prompt to write in a value
function numFunc(small, big) {
  let numLength = parseInt(prompt("What is the length of the password you want? " + small + "-" + big));
  let numValid = Number.isInteger(parseInt(numLength));;

  //Determines if the chosen number is valid(within range or is a number)
  while (numLength < small || numLength > big || !numValid) {
    let errNum = "";
    if (numLength < small) { errNum = errNum.concat("Chosen length is too small, needs to be atleast " + small); }
    if (numLength > big) { errNum = errNum.concat("Chosen length is too long, needs to be atleast " + big); }
    if (!numValid) { errNum = errNum.concat("Chosen length isnt a number"); }
//Reports an error message if cosen number isnt valid
    numLength = parseInt(prompt(numLength + ": " + errNum + "; What is the length of the password you want?"));
    numValid = Number.isInteger(parseInt(numLength));
  }
  return numLength;
}

//Function to generate the random password
function generatePassword() {
  let genPass = "";
  let strCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let strLow = "abcdefghijklmnopqrstuvwxyz";
  let strNum = "0123456789";
  let strSym = "!@#$%^&*?*+-";
  let strValue = "";

  //Gives a confirmation box for upper case letters
  let userChoice = confirm("Click OK if you'd like UPPER case letters");
  if (userChoice) { strValue += strCaps; }
  //Gives a confirmation box for lower case letters
  userChoice = confirm("Click OK if you'd like LOWER case letters");
  if (userChoice) { strValue += strLow; }
  //Gives a confirmation box for numbers
  userChoice = confirm(" Click OK if you'd like NUMBERS");
  if (userChoice) { strValue += strNum; }
  //Gives a confirmation box for symbols
  userChoice = confirm("Click OK if you'd like SYMBOLS")
  if (userChoice) { strValue += strSym; }
  //Calls numFunc function
  userChoice = numFunc(8,128);
  
  //Generates password based off given choices or will return with an error
  if (strValue.length > 0) {
    for (let i = 1; i <= userChoice; i++) {
      let charPass = Math.floor(Math.random() * strValue.length +1);
      genPass += strValue.charAt(charPass);
    }
  } else {
    genPass = "Invalid Entry: Cannot create a password without inputing anything.";
  }
  return genPass;
}

//Writes generated password to the box
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password; //Replaces text in the #password id with generated password
}

//Listens for a click on the generate password button to run writePassword function
generateBtn.addEventListener("click", writePassword);
