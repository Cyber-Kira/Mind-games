#!/usr/bin/env node

import readLineSync from 'readline-sync';
import { getRngInt, isUserAnswerCorrect } from '..';

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

export const descrForGamePrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');
};

export const gamePrime = (userName) => {
  let currentRound = 0;
  while (currentRound < 3) {
    const rngNumber = getRngInt(1, 100);
    console.log(`Question: ${rngNumber}`);
    const userAnswer = readLineSync.question('Your answer: ');
    const correctAnswer = isPrime(rngNumber);
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
