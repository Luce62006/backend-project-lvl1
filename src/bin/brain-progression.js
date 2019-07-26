#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getName from '..';

const name = getName();


const min = 1;
const max = 5;


const minD = 2;
const maxD = 4;


const minN = 1;
const maxN = 10;

const gameProgression = (name) => {
  console.log(' What number is missing in the progression?');
  const num = 3;
  for (let i = 1; i <= num; i++) {
    const signA1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const difD = Math.floor(Math.random() * (maxD - minD + 1)) + minD;
    const nSign = Math.floor(Math.random() * (maxN - minN + 1)) + minN;
    const answer = signA1 + difD * (nSign - 1);
    const question = (signA1, difD) => {
      let result = ' ';
      let currChar = ' ';
      for (let n = 1; n <= 10; n++) {
        currChar = signA1 + difD * (n - 1);
        if (currChar === answer) {
          currChar = '..';
        }
        result = `${result} ${currChar}`;
      }
      return result;
    };
    console.log(`Question: ${question(signA1, difD)}`);
    const youranswer = readlineSync.question('Your answer:');
    if (answer === youranswer && i === num) {
      console.log(`Congratiulations, ${name}!`);
    } else if (answer == youranswer) {
      console.log('Correct!');
    } else {
      console.log(`${youranswer} Is wrong answer! Correct answer is ${answer}. Let's try again ${name}!`);
      return;
    }
  }
};
gameProgression(name);
