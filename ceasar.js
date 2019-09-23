const encrypt = (plaintext, key) => {
  const ascii = plaintext.charCodeAt(0);
  return String.fromCharCode(ascii + key);
};

module.exports = { encrypt };
