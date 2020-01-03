#!/usr/bin/env node

import readLineSync from 'readline-sync';
import {
  cons,
  car,
  cdr,
} from '@hexlet/pairs';
import { getRngInt, isUserAnswerCorrect } from '..';


export const descrForGameProgression = () => {
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

export const gameProgression = (userName) => {
  let currentRound = 0;
  while (currentRound < 3) {
    const progressionPair = getProgression();
    const progression = car(progressionPair);
    const hiddenElem = cdr(progressionPair);
    console.log(`Question: ${progression}`);
    const userAnswer = readLineSync.question('Your answer: ');
    const correctAnswer = hiddenElem;
    if (isUserAnswerCorrect(userName, userAnswer, correctAnswer)) {
      currentRound += 1;
    } else {
      break;
    }
  }
  if (currentRound === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
