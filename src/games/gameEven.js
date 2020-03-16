import { cons } from '@hexlet/pairs';
import getRngInt from '../utils';
import startGame from '..';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (int) => (int % 2 === 0);

const getGameData = () => {
  const rngNum = getRngInt(0, 50);
  const correctAnswer = (isEven) ? 'yes' : 'no';
  return cons(rngNum, correctAnswer);
};

export default () => {
  startGame(getGameData, description);
};
