#!/usr/bin/env node

import readLineSync from 'readline-sync';
import {
  cons,
  car,
  cdr,
} from '@hexlet/pairs';
import { getRngInt, isUserAnswerCorrect } from '..';

export const descrForGameCalc = () => {
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

export const gameCalc = (userName) => {
  let currentRound = 0;
  const lastRound = 3;
  while (currentRound < lastRound) {
    const rngNums = cons(getRngInt(0, 10), getRngInt(0, 10));
    const rngSym = getRngSymbol();
    const rngExpression = (`${car(rngNums)} ${rngSym} ${cdr(rngNums)}`);
    console.log(`Question: ${rngExpression}`);
    const userAnswer = readLineSync.question('Your answer: ');
    const correctAnswer = getRngOperation(rngSym, car(rngNums), cdr(rngNums));
    if (isUserAnswerCorrect(userName, userAnswer, correctAnswer)) {
      currentRound += 1;
    } else {
      break;
    }
  }
  if (currentRound === lastRound) {
    console.log(`Congratulations, ${userName}!`);
  }
};
