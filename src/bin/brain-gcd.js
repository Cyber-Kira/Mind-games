#!/usr/bin/env node

import {
  greetings,
  descrForGameGCD,
  getName,
  gameGCD,
} from '..';

greetings();
descrForGameGCD();
const userName = getName();
gameGCD(userName);
