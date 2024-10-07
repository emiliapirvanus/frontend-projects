const passowrdBox = document.getElementById("password");
const lenght = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const specialCharacters = "!@#$%^&*()-_=+[]}{|',.<>?/~";
const number = "0123456789";

const allChars = upperCase + lowerCase + number + specialCharacters;

function createPassword() {
  let password = "";
  while (lenght > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passowrdBox.value = password;
}

function copyPassword() {
  passowrdBox.select();
  document.execCommand("copy");
}
