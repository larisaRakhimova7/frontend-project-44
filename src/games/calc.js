import playGame from '../index.js';
import randomNumber from '../random.js';

const task = 'What is the result of the expression?';
const checkCalc = () => {
  const calc = [];
  const num1 = randomNumber(30);
  const num2 = randomNumber(30);
  const arrayOperations = ['+', '-', '*'];
  const operation = arrayOperations[randomNumber(3) - 1];
  const expression = `Question: ${num1} ${operation} ${num2}`;
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
