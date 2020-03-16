import readLineSync from 'readline-sync';
import {
  car,
  cdr,
} from '@hexlet/pairs';

const greetings = () => console.log('Welcome to the Brain Games!');

const isUserAnswerCorrect = (userAnswer, gameAnswer) => {
  if (userAnswer === gameAnswer) {
    return true;
  }
  return false;
};

export default (gameData, description) => {
  const roundsCount = 3;
  greetings();
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  console.log(`${description}\n`);

  for (let currentRound = 0; currentRound < roundsCount;) {
    const gameQandA = gameData();
    const gameQuestion = car(gameQandA);
    const gameAnswer = cdr(gameQandA);
    console.log(`Question: ${gameQuestion}`);
    const userAnswer = readLineSync.question('Your answer: ');
    if (isUserAnswerCorrect(userAnswer, gameAnswer)) {
      console.log('Correct!');
      currentRound += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
