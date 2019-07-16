#!/usr/bin/env node

import readlineSync from 'readline-sync';

const EvenGame = (name) => {
  console.log('Answer "yes" if number even otherwise answer "no".');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    const min = 1;
    const max = 10;
    const item = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Question: ${item}`);
    const answer = readlineSync.question('Your answer:');

    if (item % 2 === 0 && answer === 'no') {
      console.log(`Is wrong answer!Correct answer was "yes".
      Let's try again!`);
    }
    if (item % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    }
    if (item % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    }
    if (item % 2 !== 0 && answer === 'yes') {
      console.log('Is wrong answer! Correct answer was "no"');
    }
  }
};
export default EvenGame;
