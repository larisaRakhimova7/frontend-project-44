import playGame from '../index.js';
import getRandomNumber from '../utils.js';

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
const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const playPrime = () => {
  const prime = [];
  const num = getRandomNumber();
  const expression = num;
  prime.push(expression);
  const correctAnswer = (isPrime(num)) ? 'yes' : 'no';
  prime.push(correctAnswer);
  return prime;
};
const startPrime = () => {
  playGame(playPrime, task);
};

export default startPrime;
