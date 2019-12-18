#!/usr/bin/env node

import {
  greetings,
  descrForGameEven,
  askingName,
  gameEven,
} from '..';

greetings();
descrForGameEven();
const userName = askingName();
gameEven(userName);
