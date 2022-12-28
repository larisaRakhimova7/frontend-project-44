import playGame from '../index.js';
import randomNumber from '../random.js';

const task = 'Find the greatest common divisor of given numbers.';

const checkGcd = () => {
  const gcd = [];
  const num1 = randomNumber(30);
  const num2 = randomNumber(30);

  gcd.push(`Question: ${num1} ${num2}`);
  let divisor;
  if (num1 < num2) {
    divisor = num1;
  } else {
    divisor = num2;
  }
  while (divisor > 0) {
    if ((num1 % divisor === 0) && (num2 % divisor === 0)) {
      const stringDivisor = String(divisor);
      gcd.push(stringDivisor);
    }
    divisor -= 1;
  }

  return gcd;
};

const startGcd = () => {
  playGame(checkGcd, task);
};

export default startGcd;
