#!/usr/bin/env node

import getName from '..';
import evenGame from './brain-even';
import calcGame from './brain-calc';
import gcdGame from './brain-gcd';

console.log('Welcome to the Brain Games!');

const name = getName();

console.log(`Hello, ${name}`);
