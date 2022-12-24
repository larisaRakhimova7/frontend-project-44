import playGame from '../index.js';
import randomNumber from '../random.js';

const task = 'What is the result of the expression?';
const checkCalc = () => {
  const calc = [];
  const num1 = randomNumber(30);
  const num2 = randomNumber(30);
  const operations = ['+', '-', '*'];
  const randomOperations = operations[randomNumber(3) - 1];

  calc.push(`Question: ${num1} ${randomOperations} ${num2}`);

  switch (randomOperations) {
    case 0:
      calc.push(num1 + num2);
      break;
    case 1:
      calc.push(num1 - num2);
      break;
    case 3:
      calc.push(num1 * num2);
      break;
    default:
      return 'error';
  }
  return calc;
};
const startCalc = () => {
  playGame(checkCalc, task);
};

export default startCalc;
