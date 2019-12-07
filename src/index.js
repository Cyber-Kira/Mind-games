#!/usr/bin/env node

import readLineSync from 'readline-sync';

const askingName = () => {
    const userName = readLineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
};
export default askingName;