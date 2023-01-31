import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => ((y !== 0) ? getGcd(y, x % y) : x);

const playGCD = () => {
  const first = getRandomNumber();
  const second = getRandomNumber();
  const question = `${first} ${second}`;
  const correctAnswer = String(getGcd(first, second));
  return [question, correctAnswer];
};

const startGCD = () => {
  playGame(playGCD, task);
};

export default startGCD;
