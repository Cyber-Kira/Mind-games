import {
  cons,
  car,
  cdr,
} from '@hexlet/pairs';
import { startGame, getRngInt } from '..';

const descrForGameCalc = () => {
  console.log('What is the result of the expression?\n');
};

const getRngSymbol = () => {
  const syblols = '+-*';
  return syblols[getRngInt(0, 3)];
};

const getRngOperation = (rngSymbol, rngNum1, rngNum2) => {
  switch (rngSymbol) {
    case '+':
      return rngNum1 + rngNum2;
    case '-':
      return rngNum1 - rngNum2;
    case '*':
      return rngNum1 * rngNum2;
    default:
      return 'Not a number';
  }
};

const gameData = () => {
  const rngNums = cons(getRngInt(0, 10), getRngInt(0, 10));
  const rngSym = getRngSymbol();
  const rngExpression = (`${car(rngNums)} ${rngSym} ${cdr(rngNums)}`);
  const correctAnswer = getRngOperation(rngSym, car(rngNums), cdr(rngNums));
  return cons(rngExpression, correctAnswer);
};

export default () => {
  startGame(gameData, descrForGameCalc);
};
