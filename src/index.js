import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?');
console.log(`Hello, ${userName}!`);

const playGame = (game, task) => {
  console.log(task);
  for (let i = 1; i <= 3; i += 1) {
    const questionGame = game();
    console.log(questionGame[0]);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (questionGame[1] !== yourAnswer) {
      const trueEven = questionGame[1];
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${trueEven}'.`);
      console.log(`Let's try again, ${userName}`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}`);
  return true;
};

export default playGame;
