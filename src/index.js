import readlineSync from 'readline-sync';

const roundsToWin = 3;

const playGame = (gameDescription, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  let correctAnswersCount = 0;

  while (correctAnswersCount < roundsToWin) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
    correctAnswersCount += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
