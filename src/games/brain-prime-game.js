import playGame from '../index.js';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const number = generateRandomNumber(1, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = number.toString();
  return [question, correctAnswer];
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playPrimeGame = () => playGame(gameDescription, generateRound);

export default playPrimeGame;
