const encrypt = (plaintext, key) => {
  return plaintext.split('').reduce((encrypted, letter) => {
    if (letter === " ") {
      return encrypted + " ";
    }
    let ascii = letter.charCodeAt(0);

    ascii += key;
    if (ascii < 97) {
      ascii += 26;
    } else if (ascii > 122) {
      ascii -= 26;
    }

    return encrypted + String.fromCharCode(ascii);
  }, "");
};

module.exports = { encrypt };
