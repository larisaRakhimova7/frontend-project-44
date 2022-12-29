import playGame from '../index.js';
import randomNumber from '../utils.js';

const getTrueAnswer = (num) => {
  if (num < 2) {
    return 'yes';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const checkPrime = () => {
  const prime = [];
  const num = randomNumber();
  const expression = num;
  prime.push(expression);
  const trueAnswer = getTrueAnswer(num);
  prime.push(trueAnswer);
  return prime;
};
const startPrime = () => {
  playGame(checkPrime, task);
};

export default startPrime;
