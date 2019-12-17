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

export const gameEven = (userName) => {
  for (let counter = 0; counter < 3; counter += 1) {
    const rndNumber = Math.floor(Math.random() * 50);
    console.log(`Question: ${rndNumber}`);
    const userAnswer = readLineSync.question('Your answer: ');
    const isEven = rndNumber % 2 === 0;
    const correctAnswer = (isEven) ? 'yes' : 'no';
    if ((userAnswer === 'yes' && isEven) || (userAnswer === 'no' && isEven === false)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      break;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
