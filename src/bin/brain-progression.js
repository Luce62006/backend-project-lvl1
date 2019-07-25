#!/usr/bin/env node

import readlineSync from 'readline-sync';
import GetName from '../index.js';

const name = GetName();


const min = 1;
const max = 5;
const signA1 = Math.floor(Math.random() * (max - min + 1)) + min;


const minD = 2;
const maxD = 4;
const difD = Math.floor(Math.random() * (maxD - minD + 1)) + minD;


const minN = 1;
const maxN = 10;
const nSign = Math.floor(Math.random() * (maxN - minN + 1)) + minN;


const answer = signA1 + difD * (nSign - 1);


const question = (signA1, difD) => {
  let n = 10;
  let result = ' ';
  for (; n >= 1; n--) {
  currchar = signA1 + difD * (n - 1);
    result = `${result} ${currchar}`;
  }
  return result;
};
question(1, 2);
