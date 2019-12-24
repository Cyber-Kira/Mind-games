#!/usr/bin/env node

import {
  greetings,
  descrForGameEven,
  getName,
  gameCalc,
} from '..';

greetings();
descrForGameEven();
const userName = getName();
gameCalc(userName);
