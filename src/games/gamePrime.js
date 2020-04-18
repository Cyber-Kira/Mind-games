import { cons } from '@hexlet/pairs';
import getRandomInt from '../utils';
import startGame from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const limitNumber = Math.floor(Math.sqrt(number));
  let index = 2;
  while (index <= limitNumber) {
    if (number % index === 0) {
      return false;
    }
    index += 1;
  }
  return true;
};

const getGameData = () => {
  const question = getRandomInt(0, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => {
  startGame(getGameData, description);
};
