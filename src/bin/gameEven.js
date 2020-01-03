#!/usr/bin/env node

import readLineSync from 'readline-sync';
import { getRngInt, isUserAnswerCorrect } from '..';

export const descrForGameEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
};

const isEven = (int) => ((int % 2 === 0) ? 'yes' : 'no');

export const gameEven = (userName) => {
  let currentRound = 0;
  while (currentRound < 3) {
    const rngNum = getRngInt(0, 50);
    console.log(`Question: ${rngNum}`);
    const userAnswer = readLineSync.question('Your answer: ');
    const correctAnswer = isEven(rngNum);
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
