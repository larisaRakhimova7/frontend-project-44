import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  let divisor;
  if (num1 < num2) {
    divisor = num1;
  } else {
    divisor = num2;
  }
  for (; divisor > 0; divisor -= 1) {
    if ((num1 % divisor === 0) && (num2 % divisor === 0)) {
      break;
    }
  } return String(divisor);
};

const playGCD = () => {
  const first = getRandomNumber();
  const second = getRandomNumber();
  const question = `${first} ${second}`;
  const correctAnswer = getGCD(first, second);
  return [question, correctAnswer];
};

const startGCD = () => {
  playGame(playGCD, task);
};

export default startGCD;
