import { cons } from '@hexlet/pairs';
import { getRngInt, startGame } from '..';

export const descrForGameEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
};

const isEven = (int) => ((int % 2 === 0) ? 'yes' : 'no');

const gameData = () => {
  const rngNum = getRngInt(0, 50);
  const correctAnswer = isEven(rngNum);
  return cons(rngNum, correctAnswer);
};

export default () => {
  startGame(gameData, descrForGameEven);
};
