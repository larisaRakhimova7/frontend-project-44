import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'What number is missing in the progression?';

const createProgression = (countOfMembers) => {
  const num = getRandomNumber(0, 10);
  const difference = getRandomNumber(0, 5);
  const members = [];
  for (let i = 0; i <= (countOfMembers - 1); i += 1) {
    members.push(num + difference * i);
  }
  return members;
};

const playProgression = () => {
  const progression = [];
  const countOfMembers = 7;
  const index = getRandomNumber(0, countOfMembers);
  const members = createProgression(countOfMembers);
  const correctAnswer = String(members[index - 1]);
  members[index - 1] = '..';
  const expression = members.join(' ');
  const expressionString = String(expression);
  progression.push(expressionString);
  progression.push(correctAnswer);
  return progression;
};
const startProgression = () => {
  playGame(playProgression, task);
};

export default startProgression;
