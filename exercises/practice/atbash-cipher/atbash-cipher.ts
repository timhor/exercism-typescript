const plain = "abcdefghijklmnopqrstuvwxyz"
const cipher = "zyxwvutsrqponmlkjihgfedcba"

export function encode(plainText: string): string {
  // 1. map characters
  // 2. filter unwanted chars
  // 3. group in 5s

  const plainTextCharacters = [...plainText.toLowerCase()]
  const replacedCharacters = plainTextCharacters.map((plainTextCharacter, index) => {
    const codeIndex = plainTextCharacter.toLowerCase().charCodeAt(0) - "a".charCodeAt(0);  
    // codeindex > 25? make character itself

    // const cipherCharacter  = cipher[codeIndex];
    const isAlphabet = codeIndex < 26 && codeIndex >= 0;
    const isNumber = Number.isInteger(Number(plainTextCharacter));
    
    const cipherCharacter = isAlphabet ? cipher[codeIndex] : isNumber ? plainTextCharacter : undefined;

    // not a character case:

    // // group by 5
    // if (index !== 0 && index % 5 === 0) {
    //   return " " + cipherCharacter;
    // }

    return cipherCharacter;
  }).filter((char) => char !== " " && char)
  
  // group by 5 here
  const groupedChars = replacedCharacters.map((char, index) => {
    if (index !== 0 && index % 5 === 0) {
      return " " + char;
    }
    return char;
  })


  return groupedChars.join("");
  // return replacedCharacters.join("");
  throw new Error('Remove this statement and implement this function')
}

export function decode(cipherText: string): unknown {
  const cipherTextCharacters = [...cipherText.toLowerCase()].filter(ch => ch !== "")
  const replacedCharacters = cipherTextCharacters.map((cipherTextCharacter, index) => {
    const plainCharacter = plain[cipher.indexOf(cipherTextCharacter)];  
    // codeindex > 25? make character itself

    // const cipherCharacter  = cipher[codeIndex];
    const isAlphabet = plainCharacter !== undefined;
    const isNumber = Number.isInteger(Number(cipherTextCharacter));
    
    const cipherCharacter = isAlphabet ? plainCharacter : isNumber ? cipherTextCharacter : undefined;


    return cipherCharacter;
  }).filter((char) => char !== " " && char)



  return replacedCharacters.join("");


  throw new Error('Remove this statement and implement this function')
}
