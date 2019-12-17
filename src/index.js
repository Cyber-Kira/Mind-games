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
  let counter = 0;
  let correctAnswer;
  while (counter < 3) {
    const rndNumber = Math.floor(Math.random() * 50);
    console.log(`Question: ${rndNumber}`);
    const answer = readLineSync.question('Your answer: ');
    const isEven = rndNumber % 2 === 0;
    if (isEven) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    if ((answer === 'yes' && isEven) || (answer === 'no' && isEven === false)) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      break;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
