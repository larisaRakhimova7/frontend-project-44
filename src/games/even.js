import playGame from '../index.js';
import getRandomIt from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkEven = () => {
  const even = [];
  const randomNum = getRandomIt(100);
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
