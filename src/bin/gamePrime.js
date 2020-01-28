import { cons } from '@hexlet/pairs';
import { getRngInt, startGame } from '..';

const isPrime = (number) => {
  if (number === 2) {
    return 'yes';
  }
  const limitNum = Math.floor(Math.sqrt(number));
  let index = 2;
  while (index <= limitNum) {
    if (number % index === 0) {
      return 'no';
    }
    index += 1;
  }
  return 'yes';
};

export const descrForGamePrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');
};

export const gameData = () => {
  const rngNumber = getRngInt(1, 100);
  const correctAnswer = isPrime(rngNumber);
  return cons(rngNumber, correctAnswer);
};

export default () => {
  startGame(gameData, descrForGamePrime);
};
