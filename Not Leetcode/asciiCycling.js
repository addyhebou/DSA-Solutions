let returnNewChar = (char, k) => {
  let ASCII = char.charCodeAt(0); // converts str to ASCII int
  ASCII -= 65; // decrements ASCII int by 65 (declares the 0 represents 'A'),
  // if cycling only between lowers, use ASCII -= 97;
  // if cycling between capitals and lowers, use ASCII -= 65, but at the end                     use ASCII += 52 instead of ASCII += 26
  ASCII -= k; // decrements ASCII by rollback amount
  if (ASCII < 0) ASCII += 26; // use ASCII += 52 if cycling between capitals and lowers
  ASCII += 65; // if cycling between lowers, use ASCII += 97;
  return String.fromCharCode(ASCII); // converts ASCII int to str
};

console.log(returnNewChar('B', 1));
