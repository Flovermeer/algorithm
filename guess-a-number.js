/**
 * GUESS A NUMBER BETWEEN 1 AND 1 000 000 IN MAX 50 TRIES WITH NO USER INPUT
 */

function guessANumber(numberToGuess) {
  let maxNumber = 1000000;
  let minNumber = 1;
  const maxTries = 50;
  let guessesCount = 0;
  let number = maxNumber / 2;

  while (number !== numberToGuess && guessesCount <= maxTries) {
    console.log("number : " + number);
    if (number > numberToGuess) {
      maxNumber = number;
      number = maxNumber - Math.round((maxNumber - minNumber) / 2);
      guessesCount++;
    } else if (number < numberToGuess) {
      minNumber = number;
      number = minNumber + Math.round((maxNumber - minNumber) / 2);
      guessesCount++;
    } else if (number === numberToGuess) {
      return;
    }
  }

  console.log(
    `Number to guess : ${numberToGuess} | guessed number : ${number}`
  );
  console.log(`Number guessed in ${guessesCount} tries`);
}

let rnd = Math.floor(Math.random() * 1000000);
guessANumber(rnd);
