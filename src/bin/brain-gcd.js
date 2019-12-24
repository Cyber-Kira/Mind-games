#!/usr/bin/env node

import {
  greetings,
  descrForGameEven,
  getName,
  gameGCD,
} from '..';

greetings();
descrForGameEven();
const userName = getName();
gameGCD(userName);
