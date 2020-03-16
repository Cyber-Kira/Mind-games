import { cons } from '@hexlet/pairs';
import getRngInt from '../utils';
import startGame from '..';

const description = 'What is the result of the expression?';

const signs = '+-*';

const getRngSymbol = (string) => string[getRngInt(0, string.length)];

const getRngOperation = (rngSymbol, rngNum1, rngNum2) => {
  switch (rngSymbol) {
    case '+':
      return rngNum1 + rngNum2;
    case '-':
      return rngNum1 - rngNum2;
    case '*':
      return rngNum1 * rngNum2;
    default:
      return null;
  }
};

const getGameData = () => {
  const firstRngNum = getRngInt(0, 10);
  const secondRngNum = getRngInt(0, 10);
  const rngSym = getRngSymbol(signs);
  const rngExpression = (`${firstRngNum} ${rngSym} ${secondRngNum}`);
  const correctAnswer = getRngOperation(rngSym, firstRngNum, secondRngNum);
  return cons(rngExpression, String(correctAnswer));
};

export default () => {
  startGame(getGameData, description);
};
