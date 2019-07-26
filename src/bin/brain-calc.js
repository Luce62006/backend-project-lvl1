#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getName from '..';

const name = getName();

const makeid = (length) => {
  let result = '';
  const characters = '+-*';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const calcGame = (name) => {
  console.log('What is the result of the expression?');
  const num = 3;
  for (let i = 1; i <= num; i++) {
    const min = 1;
    const max = 20;
    const item1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const item2 = Math.floor(Math.random() * (max - min + 1)) + min;
    const sign = makeid(1);
    const example1 = eval(`item1 ${sign} item2`);
    console.log(`Question: ${item1} ${sign} ${item2}`);
    const answer1 = readlineSync.question('Your answer: ');

    if (example1 == answer1 && i == num) {
      console.log(`Congratulation, ${name}!`);
    } else if (example1 == answer1) {
      console.log('Correct!');
    } else {
      console.log(`${answer1} is wrong answer! Correct answer was ${example1}.
        Let's try again!${name}`);
      return;
    }
  }
};
calcGame(name);
