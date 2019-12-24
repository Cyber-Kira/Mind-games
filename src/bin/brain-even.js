#!/usr/bin/env node

import {
  greetings,
  descrForGameEven,
  getName,
  gameEven,
} from '..';

greetings();
descrForGameEven();
const userName = getName();
gameEven(userName);
