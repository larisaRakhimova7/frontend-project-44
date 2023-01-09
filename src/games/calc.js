import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'What is the result of the expression?';
const checkCalc = (num1, num2, operation) => {
  let correctAnswer;
  switch (operation) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      throw new Error(`Unknown order state: '${operation}'!`);
  }
  return String(correctAnswer);
};
const playCalc = () => {
  const calc = [];
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const arrayOperations = ['+', '-', '*'];
  const operation = arrayOperations[getRandomNumber(0, 3) - 1];
  const expression = `${num1} ${operation} ${num2}`;
  calc.push(expression);
  const correctAnswer = checkCalc(num1, num2, operation);
  calc.push(correctAnswer);
  return calc;
};
const startCalc = () => {
  playGame(playCalc, task);
};

export default startCalc;
