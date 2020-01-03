#!/usr/bin/env node

import {
  greetings,
  descrForGamePrime,
  getName,
  gameGCD,
  gamePrime,
} from '..';

greetings();
descrForGamePrime();
const userName = getName();
gamePrime(userName);
