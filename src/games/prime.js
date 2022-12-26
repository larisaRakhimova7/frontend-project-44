import playGame from '../index.js';
import randomNumber from '../random.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const checkPrime = () => {
  const prime = [];
  const num = randomNumber(30);
  const expression = `Question: ${num}`;
  let trueAnswer = '';
  if (num === 1) {
    trueAnswer = 'yes';
  }
  for (let i = num / 2; i > 1; i -= 1) {
    if (num % i === 0) {
      trueAnswer = 'no';
    } else trueAnswer = 'yes';
  }
  prime.push(expression);
  prime.push(trueAnswer);
  return prime;
};
const startPrime = () => {
  playGame(checkPrime, task);
};

export default startPrime;
