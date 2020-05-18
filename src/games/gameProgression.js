import {
  cons,
  car,
  cdr,
} from '@hexlet/pairs';
import getRandomInt from '../utils';
import startGame from '..';


const description = 'What number is missing in the progression?';

const createQuestion = (firstElement, lastElement, indexOfHiddenElement, step) => {
  const iter = (number, counter, acc) => {
    if (counter > lastElement) {
      return acc.trim();
    }
    if (counter === indexOfHiddenElement) {
      return iter(number + step, counter + 1, `${acc} ..`);
    }
    return iter(number + step, counter + 1, `${acc} ${number}`);
  };

  return iter(firstElement, 1, '');
};

const getQandA = (firstElement, step, index, progressionLength) => {
  const question = createQuestion(firstElement, progressionLength, index, step);
  const answer = firstElement + step * (index - 1);
  return cons(question, answer);
};

const getGameData = () => {
  const progressionLength = 10;
  const firstElement = getRandomInt(0, 10);
  const step = getRandomInt(1, 4);
  const indexOfHiddenElement = getRandomInt(1, progressionLength);
  const QandA = getQandA(firstElement, step, indexOfHiddenElement, progressionLength);
  const question = car(QandA);
  const answer = cdr(QandA);
  return cons(question, String(answer));
};

export default () => {
  startGame(getGameData, description);
};
