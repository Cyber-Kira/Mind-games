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

export const gameEven = (userName) => {
  for (let counter = 0; counter < 3; counter += 1) {
    const rngNumber = getRngNumber(50);
    console.log(`Question: ${rngNumber}`);
    const userAnswer = readLineSync.question('Your answer: ');
    const correctAnswer = isEvenInt(rngNumber);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      break;
    }
    if (counter === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
