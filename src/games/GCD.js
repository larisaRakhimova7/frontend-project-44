import playGame from '../index.js';
import randomNumber from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const checkGCD = () => {
  const GCD = [];
  const num1 = randomNumber();
  const num2 = randomNumber();

  GCD.push(`${num1} ${num2}`);
  let divisor;
  if (num1 < num2) {
    divisor = num1;
  } else {
    divisor = num2;
  }
  while (divisor > 0) {
    if ((num1 % divisor === 0) && (num2 % divisor === 0)) {
      const stringDivisor = String(divisor);
      GCD.push(stringDivisor);
    }
    divisor -= 1;
  }

  return GCD;
};

const startGCD = () => {
  playGame(checkGCD, task);
};

export default startGCD;
