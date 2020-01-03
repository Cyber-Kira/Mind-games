#!/usr/bin/env node

import {
  greetings,
  descrForGameProgression,
  getName,
  gameProgression,
} from '..';

greetings();
descrForGameProgression();
const userName = getName();
gameProgression(userName);
