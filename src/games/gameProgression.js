import {
  cons,
  car,
  cdr,
} from '@hexlet/pairs';
import { getRngInt, startGame } from '..';


const descrForGameProgression = 'What number is missing in the progression?\n';

const createProgression = (firstElem, lastElem, indexOfHiddenElem, step) => {
  let hiddenNum;
  const iter = (number, counter, acc) => {
    if (counter > lastElem) {
      return cons(acc, hiddenNum);
    }
    if (counter === indexOfHiddenElem) {
      hiddenNum = number;
      return iter(number + step, counter + 1, `${acc} ..`);
    }
    return iter(number + step, counter + 1, `${acc} ${number}`);
  };

  return iter(firstElem, 1, '');
};

const getProgression = (progressionLength) => {
  const firstNumOfProgr = getRngInt(0, 10);
  const step = getRngInt(1, 4);
  const indexOfHiddenElem = getRngInt(1, progressionLength);
  return createProgression(firstNumOfProgr, progressionLength, indexOfHiddenElem, step);
};

const gameData = () => {
  const progressionPair = getProgression(10);
  const progression = car(progressionPair);
  const hiddenElem = cdr(progressionPair);
  const correctAnswer = hiddenElem;
  return cons(progression, correctAnswer);
};

export default () => {
  startGame(gameData, descrForGameProgression);
};
