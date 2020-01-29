import {
  cons,
} from '@hexlet/pairs';
import { startGame, getRngInt } from '..';

const descrForGameCalc = 'What is the result of the expression?\n';

const getRngSymbol = (string, Begin, End) => string[getRngInt(Begin, End)];

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

const gameData = () => {
  const syblols = '+-*';
  const firstRngNum = getRngInt(0, 10);
  const secondRngNum = getRngInt(0, 10);
  const rngSym = getRngSymbol(syblols, 0, 3);
  const rngExpression = (`${firstRngNum} ${rngSym} ${secondRngNum}`);
  const correctAnswer = getRngOperation(rngSym, firstRngNum, secondRngNum);
  return cons(rngExpression, correctAnswer);
};

export default () => {
  startGame(gameData, descrForGameCalc);
};
