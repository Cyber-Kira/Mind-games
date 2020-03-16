import { cons } from '@hexlet/pairs';
import getRngInt from '../utils';
import startGame from '..';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 2) {
    return true;
  }
  const limitNum = Math.floor(Math.sqrt(number));
  let index = 2;
  while (index <= limitNum) {
    if (number % index === 0) {
      return false;
    }
    index += 1;
  }
  return true;
};

const getGameData = () => {
  const rngNumber = getRngInt(1, 100);
  const correctAnswer = isPrime(rngNumber) ? 'yes' : 'no';
  return cons(rngNumber, correctAnswer);
};

export default () => {
  startGame(getGameData, description);
};
