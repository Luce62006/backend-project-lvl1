#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getName from '..';

const name = getName();

const isPrime = (num) => {
  if (num < 1) {
    console.log('no');
    return;
  }
  if (num == 1) {
    console.log('yes');
    return;
  }
  if (num == 2) {
    console.log('yes');
    return;
  }
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i == 0) {
      return ('no');
    }
    return ('yes');
  }
};

const gamePrime = (name) => {
  console.log(`Answer "yes" if given number is prime. 
    Otherwise answer "no"`);
  const num = 3;
  for (let i = 1; i <= num; i++) {
    const min = 1;
    const max = 300;
    const question = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Question: ${question}`);
    const correctanswer = isPrime(question);
    const answer = readlineSync.question('Your answer:');
    if (answer === correctanswer && i === num) {
      console.log(`Congratiulations, ${name}!`);
    } else if (answer === correctanswer) {
      console.log('Correct!');
    } else {
      console.log(`Is wrong answer! Let's try again!${name}`);
      return;
    }
  }
};
gamePrime(name);
