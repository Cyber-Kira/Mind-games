#!/usr/bin/env node

import {
  greetings,
  descrForGameCalc,
  getName,
  gameCalc,
} from '..';

greetings();
descrForGameCalc();
const userName = getName();
gameCalc(userName);
