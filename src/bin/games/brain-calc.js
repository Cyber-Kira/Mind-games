#!/usr/bin/env node

import { startGame } from '../../index';
import { descrForGameCalc, gameCalc } from '../gameCalc';

startGame(gameCalc, descrForGameCalc);
