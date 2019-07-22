#!/usr/bin/env node

import GetName from '../index.js';
import EvenGame from './brain-even.js';
import calcGame from './brain-calc.js';
import gcdGame from './brain-gcd.js';

console.log('Welcome to the Brain Games!');

const name = GetName();

console.log(`Hello, ${name}`);
EvenGame();
calcGame();
gcdGame();
