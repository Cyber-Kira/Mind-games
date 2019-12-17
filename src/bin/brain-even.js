#!/usr/bin/env node

import * as game from '..';

game.greetings();
game.descrForGameEven();
const userName = game.askingName();
game.gameEven(userName);
