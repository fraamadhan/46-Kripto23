let inputUser = document.getElementById("input_text");

let resultDocShift = document.getElementById("result");
let keyShift = document.getElementById("key-shift");
const btnShiftCipherEncrypt = document.getElementById("encyrptShiftCipherBtn");
const btnShiftCipherDecrypt = document.getElementById("decryptShiftCipherBtn");
btnShiftCipherDecrypt.addEventListener("click", shiftCipherDecrypt);
btnShiftCipherEncrypt.addEventListener("click", shiftCipherEncrypt);

const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];



function shiftCipherEncrypt() {
    let input = inputUser.value;
    let key = keyShift.value;
    let result = shiftEncrypting(input, Number(key));
    if (keyShift.value == "") {
      alert("Fill the key for shifting input");
    } else {
      resultDocShift.innerHTML = result;
    }
  
    // inputUser.value = result
  }
  
  function shiftCipherDecrypt() {
    let input = inputUser.value;
    let key = keyShift.value;
    let result = shiftDecrypting(input, Number(key));
  
    resultDocShift.innerHTML = result;
    // inputUser.value = result
  }
  
  function findIndex(input) {
    let index = 0;
    for (let i = 0; i < alphabet.length; i++) {
      if (input.toLowerCase() === alphabet[i]) {
        console.log(input);
        index = i;
        break;
      }
    }
  
    return index;
  }
  
  function shiftEncrypting(input, key) {
    let encrypt;
    let indexX;
  
    for (let i = 0; i < input.length; i++) {
      if (input[i] !== " ") {
        indexX = findIndex(input[i]);
        encrypt = (indexX + key) % 26;
        input = replaceCharAt(input, i, alphabet[encrypt]);
      }
    }
  
    return input;
  }
  
  function shiftDecrypting(input, key) {
    let decrypt;
    let indexX;
  
    for (let i = 0; i < input.length; i++) {
      if (input[i] !== " ") {
        indexX = findIndex(input[i]);
        decrypt = (((indexX - key) % 26) + 26) % 26;
        input = replaceCharAt(input, i, alphabet[decrypt]);
      }
    }
  
    return input;
  }
  
  function replaceCharAt(x, index, value) {
    if (index > x.length - 1) {
      return x;
    }
    return x.substring(0, index) + value + x.substring(index + 1);
  }