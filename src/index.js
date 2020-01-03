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

export const descrForGameCalc = () => {
  console.log('What is the result of the expression?\n');
};

export const descrForGameGCD = () => {
  console.log('Find the greatest common divisor of given numbers.\n');
};

export const descrForGameProgression = () => {
  console.log('What number is missing in the progression?\n');
};

export const descrForGamePrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');
};

const getRngInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

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

const getGCD = (num1, num2) => {
  if (num2 !== 0) {
    return getGCD(num2, num1 % num2);
  }
  return num1;
};

const isIntEven = (int) => ((int % 2 === 0) ? 'yes' : 'no');

const isPrime = (number) => {
  if (number === 2) {
    return 'yes';
  }
  const limitNum = Math.floor(Math.sqrt(number));
  let index = 2;
  while (index <= limitNum) {
    if (number % index === 0) {
      return 'no';
    }
    index += 1;
  }
  return 'yes';
};

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
    const rngNum = getRngInt(0, 50);
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
    const rngNums = cons(getRngInt(0, 10), getRngInt(0, 10));
    const rngSym = getRngSymbol();
    const rngExpression = (`${car(rngNums)} ${rngSym} ${cdr(rngNums)}`);
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
  let counter = 0;
  while (counter < 3) {
    const progressionPair = getProgression();
    const progression = car(progressionPair);
    const hiddenElem = cdr(progressionPair);
    console.log(`Question: ${progression}`);
    const userAnswer = readLineSync.question('Your answer: ');
    const correctAnswer = hiddenElem;
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

export const gamePrime = (userName) => {
  let counter = 0;
  while (counter < 3) {
    const RngNumber = getRngInt(1, 50);
    console.log(`Question: ${RngNumber}`);
    const userAnswer = readLineSync.question('Your answer: ');
    const correctAnswer = isPrime(RngNumber);
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
