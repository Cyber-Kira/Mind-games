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

const isEvenInt = (int) => {
  const isEven = int % 2 === 0;
  return (isEven) ? 'yes' : 'no';
};

const isCorrectAnswer = (userAnswer, rngNumber) => (userAnswer === isEvenInt(rngNumber));

export const gameEven = (userName) => {
  for (let counter = 0; counter < 3; counter += 1) {
    const rngNumber = getRngNumber(50);
    console.log(`Question: ${rngNumber}`);
    const userAnswer = readLineSync.question('Your answer: ');
    if (isCorrectAnswer(userAnswer, rngNumber)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEvenInt(userAnswer)}'.`);
      break;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
