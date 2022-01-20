var generateBtn = document.querySelector("#generate");


function numFunc(small, big) {
  let numLength = parseInt(prompt("What is the length of the password you want? " + small + "-" + big));
  let numValid = Number.isInteger(parseInt(numLength));;

  while (numLength < small || numLength > big || !numValid) {
    let errNum = "";
    if (numLength < small) { errNum = errNum.concat("Chosen length is too small, needs to be atleast " + small); }
    if (numLength > big) { errNum = errNum.concat("Chosen length is too long, needs to be atleast " + big); }
    if (!numValid) { errNum = errNum.concat("Chosen length isnt a number"); }

    numLength = parseInt(prompt(numLength + ": " + errNum + "; What is the length of the password you want?"));
    numValid = Number.isInteger(parseInt(numLength));
  }
  return numLength;
}


function generatePassword() {
  let genPass = "";
  let strCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let strLow = "abcdefghijklmnopqrstuvwxyz";
  let strNum = "0123456789";
  let strSym = "!@#$%^&*?*+-";
  let strValue = "";

  
  let userChoice = confirm("Click OK if you'd like UPPER case letters");
  if (userChoice) { strValue += strCaps; }
  userChoice = confirm("Click OK if you'd like LOWER case letters");
  if (userChoice) { strValue += strLow; }
  userChoice = confirm(" Click OK if you'd like NUMBERS");
  if (userChoice) { strValue += strNum; }
  userChoice = confirm("Click OK if you'd like SYMBOLS")
  if (userChoice) { strValue += strSym; }

  userChoice = numFunc(8,128);
  
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


function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
