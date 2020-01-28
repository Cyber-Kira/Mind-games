import readLineSync from 'readline-sync';
import {
  car,
  cdr,
} from '@hexlet/pairs';

const greetings = () => console.log('Welcome to the Brain Games!');

const getName = () => {
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
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

export const getRngInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const startGame = (gameData, descr) => {
  let currentRound = 0;
  const lastRound = 3;
  greetings();
  const userName = getName();
  descr();

  while (currentRound < lastRound) {
    const gameQandA = gameData();
    const gameQuestion = car(gameQandA);
    const gameAnswer = cdr(gameQandA);
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readLineSync.question('Your answer: ');
    if (isUserAnswerCorrect(userName, userAnswer, gameAnswer)) {
      currentRound += 1;
    } else {
      break;
    }
  }
  if (currentRound === lastRound) {
    console.log(`Congratulations, ${userName}!`);
  }
};
