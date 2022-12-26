import playGame from '../index.js';
import randomNumber from '../random.js';

const task = 'What number is missing in the progression?';

const checkProgression = () => {
  const dataProgression = [];
  const num = randomNumber(10);
  const difference = randomNumber(5);
  const index = randomNumber(7);
  // length of progression = 7
  const numbers = [];
  for (let i = 0; i <= 6; i += 1) {
    numbers.push(num + difference * i);
  }
  const trueAnswer = String(numbers[index - 1]);
  numbers[index - 1] = '..';
  const expression = `${numbers[0]} ${numbers[1]} ${numbers[2]} ${numbers[3]} ${numbers[4]} ${numbers[5]} ${numbers[6]}`;
  const expressionString = String(expression);
  dataProgression.push(expressionString);
  dataProgression.push(trueAnswer);
  return dataProgression;
};
const startProgression = () => {
  playGame(checkProgression, task);
};

export default startProgression;
