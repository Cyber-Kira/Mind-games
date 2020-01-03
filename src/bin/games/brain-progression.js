#!/usr/bin/env node

import { startGame } from '../../index';
import { gameProgression, descrForGameProgression } from '../gameProgression';

startGame(gameProgression, descrForGameProgression);
