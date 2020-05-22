import { cons } from '@hexlet/pairs';
import getRandomInt from '../utils';
import startGame from '..';

const description = 'What is the result of the expression?';

const signs = ['+', '-', '*'];

const calculate = (sign, firstNumber, secondNumber) => {
  switch (sign) {
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
  const indexOfLastSign = signs.length - 1;
  const sign = signs[getRandomInt(0, indexOfLastSign)];
  const question = (`${firstNumber} ${sign} ${secondNumber}`);
  const correctAnswer = calculate(sign, firstNumber, secondNumber);
  return cons(question, String(correctAnswer));
};

export default () => {
  startGame(getGameData, description);
};
