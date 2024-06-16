import playGame from '../index.js';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const generateRound = () => {
  const a = generateRandomNumber(1, 100);
  const b = generateRandomNumber(1, 100);

  const question = `${a} ${b}`;
  const correctAnswer = String(gcd(a, b));

  return [question, correctAnswer];
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const playGcdGame = () => playGame(gameDescription, generateRound);

export default playGcdGame;
