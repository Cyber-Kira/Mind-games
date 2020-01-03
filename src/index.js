#!/usr/bin/env node

import readLineSync from 'readline-sync';

export const greetings = () => console.log('Welcome to the Brain Games!');

export const getName = () => {
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export const isUserAnswerCorrect = (userName, userAnswer, correctAnswer) => {
  if (String(userAnswer) === String(correctAnswer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

export const startGame = (game, descr) => {
  greetings();
  descr();
  game(getName());
};

export const getRngInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
