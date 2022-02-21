export function getLetterMatchCount(guessedWord, secretWord) {
  // Each letter is an element in the array
  const secretLetters = secretWord.split("");
  // Make guessed word into Set
  const guessedLetterSet = new Set(guessedWord);
  // Filter through secretLetters Array
  // (condition) Check if the guessedLetterSet contains any of the letters
  //  return length of the resulting array
  return secretLetters.filter((letter) => guessedLetterSet.has(letter)).length;
}
