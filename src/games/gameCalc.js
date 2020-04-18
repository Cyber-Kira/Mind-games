import { cons } from '@hexlet/pairs';
import getRandomInt from '../utils';
import startGame from '..';

const description = 'What is the result of the expression?';

const signs = ['+', '-', '*'];

const calculate = (Sign, firstNumber, secondNumber) => {
  switch (Sign) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return null;
  }
};

const getGameData = () => {
  const firstNumber = getRandomInt(0, 10);
  const secondNumber = getRandomInt(0, 10);
  const Sign = signs[getRandomInt(0, 2)];
  const question = (`${firstNumber} ${Sign} ${secondNumber}`);
  const correctAnswer = calculate(Sign, firstNumber, secondNumber);
  return cons(question, String(correctAnswer));
};

export default () => {
  startGame(getGameData, description);
};
