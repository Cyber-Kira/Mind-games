#!/usr/bin/env node

import {
  greetings,
  descrForGamePrime,
  getName,
  gamePrime,
} from '..';

greetings();
descrForGamePrime();
const userName = getName();
gamePrime(userName);
