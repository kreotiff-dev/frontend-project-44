import playGame from '../index.js';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const a = generateRandomNumber(1, 100);
  const b = generateRandomNumber(1, 100);
  const operator = operators[generateRandomNumber(0, operators.length - 1)];

  const question = `${a} ${operator} ${b}`;
  const correctAnswer = String(calculate(a, b, operator));

  return [question, correctAnswer];
};

const gameDescription = 'What is the result of the expression?';

const playCalcGame = () => playGame(gameDescription, generateRound);

export default playCalcGame;
