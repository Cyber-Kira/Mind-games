import { cons } from '@hexlet/pairs';
import getRandomInt from '../utils';
import startGame from '..';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (int) => (int % 2 === 0);

const getGameData = () => {
  const question = getRandomInt(0, 50);
  const correctAnswer = (isEven) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => {
  startGame(getGameData, description);
};
