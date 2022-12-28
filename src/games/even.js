import playGame from '../index.js';
import randomNumber from '../random.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkEven = () => {
  const even = [];
  const randomNum = randomNumber(100);
  even.push(randomNum);
  if (randomNum % 2 === 0) {
    even.push('yes');
  } else even.push('no');
  // console.log(even);
  return even;
};

const startEven = () => {
  playGame(checkEven, task);
};

export default startEven;
