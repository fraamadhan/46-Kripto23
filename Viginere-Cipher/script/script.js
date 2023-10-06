let inputUser = document.getElementById("input_text");

let subs = {
  encrypt: {
    a: "z",
    b: "q",
    c: "r",
    d: "s",
    e: "u",
    f: "v",
    g: "w",
    h: "a",
    i: "b",
    j: "c",
    k: "d",
    l: "g",
    m: "f",
    n: "h",
    o: "i",
    p: "k",
    q: "j",
    r: "l",
    s: "o",
    t: "n",
    u: "m",
    v: "e",
    w: "p",
    x: "t",
    y: "x",
    z: "y",
  },
  decrypt: {
    a: "h",
    b: "i",
    c: "j",
    d: "k",
    e: "v",
    f: "m",
    g: "l",
    h: "n",
    i: "o",
    j: "q",
    k: "p",
    l: "r",
    m: "u",
    n: "t",
    o: "s",
    p: "w",
    q: "b",
    r: "c",
    s: "d",
    t: "x",
    u: "e",
    v: "f",
    w: "g",
    x: "y",
    y: "z",
    z: "a",
  },
};

let resultDocVig = document.getElementById("result-vig");
const btnVigEncrypt = document.getElementById("encryptViginereBtn");
const btnVigDecrypt = document.getElementById("decryptViginereBtn");
btnVigEncrypt.addEventListener("click", viginereCipherEncrypt);
btnVigDecrypt.addEventListener("click", viginereCipherDecrypt);

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

function viginereCipherEncrypt() {
  let input = inputUser.value;
  let key = document.getElementById("vig_key").value;

  if (key.length < input.length) {
    let i = 0;
    while (key.length < input.length) {
      key += key[i];
      i = (i + 1) % key.length;
    }
  } else if (key.length > input.length) {
    key = key.substring(0, input.length);
  } else {
    key = key;
  }

  let result = viginereEncrypting(input, key);
  resultDocVig.innerHTML = result;
}

function viginereCipherDecrypt() {
  let input = inputUser.value;
  let key = document.getElementById("vig_key").value;

  if (key.length < input.length) {
    let i = 0;
    while (key.length < input.length) {
      key += key[i];
      i = (i + 1) % key.length;
    }
  } else if (key.length > input.length) {
    key = key.substring(0, input.length);
  } else {
    key = key;
  }

  let result = viginereDecrypting(input, key);
  resultDocVig.innerHTML = result;
}

function viginereEncrypting(input, key) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== " ") {
      indexPl = findIndex(input[i]);
      indexKey = findIndex(key[i]);
      encrypt = (indexPl + indexKey) % 26;
      input = replaceCharAt(input, i, alphabet[encrypt]);
    }
  }

  return input;
}

function viginereDecrypting(input, key) {
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== " ") {
      indexPl = findIndex(input[i]);
      indexKey = findIndex(key[i]);
      decrypt = (((indexPl - indexKey) % 26) + 26) % 26;
      input = replaceCharAt(input, i, alphabet[decrypt]);
    }
  }

  return input;
}

function findIndex(input) {
  let index = 0;
  for (let i = 0; i < alphabet.length; i++) {
    if (input.toLowerCase() === alphabet[i]) {
      index = i;
      break;
    }
  }

  return index;
}

function replaceCharAt(x, index, value) {
  if (index > x.length - 1) {
    return x;
  }
  return x.substring(0, index) + value + x.substring(index + 1);
}

function GCD(keyA, keyB) {
  let remain;
  let result;

  remain = keyA % keyB;
  keyA = keyB;
  keyB = remain;

  if (keyB == 0) {
    result = keyA;
  } else {
    return GCD(keyA, keyB);
  }

  return result;
}
