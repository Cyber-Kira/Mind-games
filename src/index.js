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

const getRngInt = (max) => Math.floor(Math.random() * Math.floor(max));

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
    const rngNum = getRngInt(50);
    console.log(`Question: ${rngNum}`);
    const userAnswer = readLineSync.question('Your answer: ');
    const correctAnswer = isEvenInt(rngNum);
    if (isUserAnswerCorrect(userAnswer, correctAnswer)) {
      counter += 1;
    } else {
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (counter === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
