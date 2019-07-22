#!/usr/bin/env node

import readlineSync from 'readline-sync';


const calcGame = (name) => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i++) {
    const min = 1;
    const max = 20;
    const item1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const item2 = Math.floor(Math.random() * (max - min + 1)) + min;
    
    const example1 = item1 + item2;
    const example2 = item1 - item2;
    const example3 = item1 * item2;
    console.log(`Question: ${item1} + ${item2}`);
    const answer1 = readlineSync.question('Your answer: ');

    if (example1 == answer1) {
      console.log('Correct!');
    } else {
      console.log(`${answer1} is wrong answer! Correct answer was ${example1}.
    Let's try again!`);
    }
    console.log(`Question: ${item1} - ${item2}`);
    const answer2 = readlineSync.question('Your answer: ');

    if (example2 == answer2) {
      console.log('Correct!');
    } else {
      console.log(`${answer2} is wrong answer! Correct answer was ${example2}.
    Let's try again!`);
    }
    console.log(`Question: ${item1} * ${item2}`);
    const answer3 = readlineSync.question('Your answer: ');

    if (example3 == answer3) {
      console.log('Correct!');
    } else {
      console.log(`${answer3} is wrong answer! Correct answer was ${example3}.
    Let's try again!`);
    }

  }
};
export default calcGame;
