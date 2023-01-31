import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'What number is missing in the progression?';

const getProgression = (start = 1, countOfMembers = 5, difference = 2) => {
  const members = [];
  for (let i = 0; i <= (countOfMembers - 1); i += 1) {
    members.push(start + difference * i);
  }
  return members;
};

const playProgression = () => {
  const start = getRandomNumber(0, 10);
  const difference = getRandomNumber(0, 5);
  const countOfMembers = 7;
  const hiddenIndex = getRandomNumber(0, countOfMembers);
  const progression = getProgression(start, countOfMembers, difference);
  const correctAnswer = String(progression[hiddenIndex - 1]);
  progression[hiddenIndex - 1] = '..';
  const question = String(progression.join(' '));
  return [question, correctAnswer];
};
const startProgression = () => {
  playGame(playProgression, task);
};

export default startProgression;
