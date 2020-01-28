import {
  cons,
  car,
  cdr,
} from '@hexlet/pairs';
import { getRngInt, startGame } from '..';


const descrForGameProgression = () => {
  console.log('What number is missing in the progression?\n');
};

const getProgression = () => {
  let hiddenElem = '';
  let progression = '';
  let numOfProgression = getRngInt(0, 10);
  const step = getRngInt(1, 4);
  const indexOfHiddenElem = getRngInt(0, 10);
  for (let i = 0; i < 10; i += 1, numOfProgression += step) {
    if (indexOfHiddenElem === i) {
      hiddenElem = String(numOfProgression);
      progression += '.. ';
    } else {
      progression += `${String(numOfProgression)} `;
    }
  }
  const pair = cons(progression, hiddenElem);
  return pair;
};

const gameData = () => {
  const progressionPair = getProgression();
  const progression = car(progressionPair);
  const hiddenElem = cdr(progressionPair);
  const correctAnswer = hiddenElem;
  return cons(progression, correctAnswer);
};

export default () => {
  startGame(gameData, descrForGameProgression);
};
