#!/usr/bin/env node

import readLineSync from 'readline-sync';
import {
  cons,
  car,
  cdr,
} from '@hexlet/pairs';

export const greetings = () => console.log('Welcome to the Brain Games!');

export const getName = () => {
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export const descrForGameEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
};

const getRngInt = (max) => Math.floor(Math.random() * Math.floor(max));

const getRngSymbol = () => {
  const syblols = '+-*';
  return syblols[getRngInt(3)];
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

const isIntEven = (int) => ((int % 2 === 0) ? 'yes' : 'no');

const isUserAnswerCorrect = (userName, userAnswer, correctAnswer) => {
  if (String(userAnswer) === String(correctAnswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

export const gameEven = (userName) => {
  let counter = 0;
  while (counter < 3) {
    const rngNum = getRngInt(50);
    console.log(`Question: ${rngNum}`);
    const userAnswer = readLineSync.question('Your answer: ');
    const correctAnswer = isIntEven(rngNum);
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

export const gameCalc = (userName) => {
  let counter = 0;
  while (counter < 3) {
    const rngNums = cons(getRngInt(30), getRngInt(30));
    const rngSym = getRngSymbol();
    const rngExpression = (`${Number(car(rngNums))} ${rngSym} ${Number(cdr(rngNums))}`);
    console.log(`Question: ${rngExpression}`);
    const userAnswer = readLineSync.question('Your answer: ');
    const correctAnswer = getRngOperation(rngSym, car(rngNums), cdr(rngNums));
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
