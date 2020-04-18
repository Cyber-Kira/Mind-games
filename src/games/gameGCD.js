import { cons } from '@hexlet/pairs';
import getRandomInt from '../utils';
import startGame from '..';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  if (num2 !== 0) {
    return getGCD(num2, num1 % num2);
  }
  return num1;
};

const getGameData = () => {
  const firstNumber = getRandomInt(0, 50);
  const secondNumber = getRandomInt(0, 10);
  const question = (`${firstNumber} ${secondNumber}`);
  const correctAnswer = getGCD(firstNumber, secondNumber);
  return cons(question, String(correctAnswer));
};

export default () => {
  startGame(getGameData, description);
};
