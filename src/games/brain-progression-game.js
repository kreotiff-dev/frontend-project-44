import playGame from '../index.js';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length) => Array.from({ length }, (_, i) => start + i * step);

const generateRound = () => {
  const start = generateRandomNumber(1, 10);
  const step = generateRandomNumber(1, 5);
  const length = generateRandomNumber(5, 10);
  const progression = generateProgression(start, step, length);
  const hiddenIndex = generateRandomNumber(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const gameDescription = 'What number is missing in the progression?';

const playProgressionGame = () => playGame(gameDescription, generateRound);

export default playProgressionGame;
