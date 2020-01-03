#!/usr/bin/env node

import readLineSync from 'readline-sync';
import {
  cons,
  car,
  cdr,
} from '@hexlet/pairs';
import { getRngInt, isUserAnswerCorrect } from '..';

export const descrForGameGCD = () => {
  console.log('Find the greatest common divisor of given numbers.\n');
};

export const getGCD = (num1, num2) => {
  if (num2 !== 0) {
    return getGCD(num2, num1 % num2);
  }
  return num1;
};

export const gameGCD = (userName) => {
  let counter = 0;
  while (counter < 3) {
    const rngNums = cons(getRngInt(0, 50), getRngInt(0, 10));
    const rngExpression = (`${car(rngNums)} ${cdr(rngNums)}`);
    console.log(`Question: ${rngExpression}`);
    const userAnswer = readLineSync.question('Your answer: ');
    const correctAnswer = getGCD(car(rngNums), cdr(rngNums));
    if (isUserAnswerCorrect(userName, userAnswer, correctAnswer)) {
      counter += 1;
    } else {
      break;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
