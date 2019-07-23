#!/usr/bin/env node

import readlineSync from 'readline-sync';
import GetName from '../index.js';

const name = GetName();

const evenGame = (name) => {
  console.log('Answer "yes" if number even otherwise answer "no".');
  // eslint-disable-next-line no-plusplus
  const num = 3;
  for (let i = 1; i <= num; i++) {
    const min = 1;
    const max = 10;
    const question = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Question: ${question}`);
    const correctanswer = (question % 2 == 0) ? 'yes' : 'no';
    const answer = readlineSync.question('Your answer:');
    if (answer === correctanswer && i === num) {
      console.log(`Congratiulations, ${name}!`);
    }
    else if (answer === correctanswer) {
      console.log('Correct!');
    } else {
      console.log(`Is wrong answer! Let's try again!${name}`);
      return evenGame(name);
    }
  
  }
};

evenGame(name);
