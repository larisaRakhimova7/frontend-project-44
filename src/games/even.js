import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const playEven = () => {
  const even = [];
  const num = getRandomNumber(0, 100);
  const expression = num;
  even.push(expression);
  const correctAnswer = (isEven(num)) ? 'yes' : 'no';
  even.push(correctAnswer);
  return even;
};

const startEven = () => {
  playGame(playEven, task);
};

export default startEven;
