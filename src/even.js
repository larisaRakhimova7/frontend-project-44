import readlineSync from 'readline-sync';
import userName from './cli.js';

let trueAnswer = '';
let yourAnswer = '';
const even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const getGame = () => {
    const randomNumber = Math.ceil(Math.random() * 100);
    console.log(`Question:  ${randomNumber}`);
    yourAnswer = readlineSync.question('Your answer: ');
    // answer = '';
    if (randomNumber % 2 === 0) {
      trueAnswer = 'yes';
    } else trueAnswer = 'no';
    if (trueAnswer !== yourAnswer) {
      return false;
    }
    return true;
  };
  let i = 1;
  while (i <= 3) {
    if (getGame() === false) {
      console.log(`${yourAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}.`);
      return false;
    }
    console.log('Correct!');
    i += 1;
  }
  console.log(`Congratulations, ${userName}`);
  // const result = `Congratulations, ${userName}`;
  return true;
};
export default even;
