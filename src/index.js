import readlineSync from 'readline-sync';

const playGame = (game, task) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);

  console.log(task);
  const countOfGames = 3;
  for (let i = 1; i <= countOfGames; i += 1) {
    const [questionInGames, correctAnswer] = game();
    console.log(`Question: ${questionInGames}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default playGame;
