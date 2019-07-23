#!/usr/bin/env node

import readlineSync from 'readline-sync';
import GetName from '../index.js';

const name = GetName();

const element = (length) => {
    let result = '..';
    const characters = '1 3 6+-*';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

const gameProgression = (name) => {
  console.log('What number is missing in the progression?');
};
