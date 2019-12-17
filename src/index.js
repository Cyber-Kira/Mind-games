#!/usr/bin/env node

import readLineSync from 'readline-sync';

export const greetings = () => console.log('Welcome to the Brain Games!');

export const askingName = () => {
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export const descrForGameEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
};

const getRngNumber = (max) => Math.floor(Math.random() * Math.floor(max));

const isEvenInt = (int) => ((int % 2 === 0) ? 'yes' : 'no');

const isUserAnswerCorrect = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

export const gameEven = (userName) => {
  let counter = 0;
  while (counter < 3) {
    const rngNumber = getRngNumber(50);
    const correctAnswer = isEvenInt(rngNumber);
    console.log(`Question: ${rngNumber}`);
    const userAnswer = readLineSync.question('Your answer: ');
    if (isUserAnswerCorrect(userAnswer, correctAnswer)) {
      counter += 1;
    } else {
      break;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
