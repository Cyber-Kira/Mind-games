import readLineSync from 'readline-sync';
import {
  car,
  cdr,
} from '@hexlet/pairs';

const greetings = () => console.log('Welcome to the Brain Games!');

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
  greetings();
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  console.log(descr);

  for (let currentRound = 0, lastRound = 3; currentRound < lastRound;) {
    const gameQandA = gameData();
    const gameQuestion = car(gameQandA);
    const gameAnswer = cdr(gameQandA);
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readLineSync.question('Your answer: ');
    if (isUserAnswerCorrect(userName, userAnswer, gameAnswer)) {
      currentRound += 1;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
