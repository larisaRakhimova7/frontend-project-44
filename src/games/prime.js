import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= (num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const playPrime = () => {
  const num = getRandomNumber();
  const question = num;
  const correctAnswer = (isPrime(num)) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const startPrime = () => {
  playGame(playPrime, task);
};

export default startPrime;
