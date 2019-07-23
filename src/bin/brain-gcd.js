#!/usr/bin/env node

import readlineSync from 'readline-sync';
import GetName from '../index.js';

const name = GetName();
const gcd = (item1, item2) => {
  if (item2 > 0) {
    const k = item1 % item2;
    return gcd(item2, k);
  }

  return Math.abs(item1);
};

const gcdGame = (name) => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i++) {
    const min = 1;
    const max = 100;
    const item1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const item2 = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Question ${item1} ${item2}`);
    // eslint-disable-next-line no-loop-func
    const result = gcd(item1, item2);
    const answer = readlineSync.question('Your answer: ');
    if (result == answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer! Correct answer was ${result}.
      Let's try again! ${name}`);
    }
  }
};

gcdGame(name);
