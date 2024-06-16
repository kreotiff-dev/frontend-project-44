import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const playEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const roundsToWin = 3;
  let correctAnswersCount = 0;

  while (correctAnswersCount < roundsToWin) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

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

export default playEvenGame;
