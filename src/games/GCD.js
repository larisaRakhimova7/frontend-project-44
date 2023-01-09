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
  const GCD = [];
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const expression = `${num1} ${num2}`;
  GCD.push(expression);
  const correctAnswer = getGCD(num1, num2);
  GCD.push(correctAnswer);
  return GCD;
};

const startGCD = () => {
  playGame(playGCD, task);
};

export default startGCD;
