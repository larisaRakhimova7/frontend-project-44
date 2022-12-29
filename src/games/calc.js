import playGame from '../index.js';
import getRandomIt from '../utils.js';

const task = 'What is the result of the expression?';
const checkCalc = () => {
  const calc = [];
  const num1 = getRandomIt();
  const num2 = getRandomIt();
  const arrayOperations = ['+', '-', '*'];
  const operation = arrayOperations[getRandomIt(3) - 1];
  const expression = `${num1} ${operation} ${num2}`;
  calc.push(expression);
  let trueAnswer;
  switch (operation) {
    case '+':
      trueAnswer = num1 + num2;
      break;
    case '-':
      trueAnswer = num1 - num2;
      break;
    case '*':
      trueAnswer = num1 * num2;
      break;
    default:
      return 'error';
  }
  const trueAnswerString = String(trueAnswer);
  calc.push(trueAnswerString);
  return calc;
};
const startCalc = () => {
  playGame(checkCalc, task);
};

export default startCalc;
