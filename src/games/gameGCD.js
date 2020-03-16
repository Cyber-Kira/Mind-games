import { cons } from '@hexlet/pairs';
import getRngInt from '../utils';
import startGame from '..';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (num1, num2) => {
  if (num2 !== 0) {
    return getGCD(num2, num1 % num2);
  }
  return num1;
};

const getGameData = () => {
  const firstNumber = getRngInt(0, 50);
  const secondNumber = getRngInt(0, 10);
  const rngExpression = (`${firstNumber} ${secondNumber}`);
  const correctAnswer = getGCD(firstNumber, secondNumber);
  return cons(rngExpression, String(correctAnswer));
};

export default () => {
  startGame(getGameData, description);
};
