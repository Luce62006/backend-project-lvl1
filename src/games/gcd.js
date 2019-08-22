import engine from '../engine';
import getRundomNum from '../utils';

const gcd = (item1, item2) => {
  if (item2 > 0) {
    const k = item1 % item2;
    return gcd(item2, k);
  }
  return Math.abs(item1);
};

const description = 'Find the greatest common divisor of given numbers.';
const getQuestionAndCorrectAnswer = () => {
  const item1 = getRundomNum(1, 30);
  const item2 = getRundomNum(1, 30);
  const question = (`${item1} ${item2}`);
  const result = gcd(item1, item2);
  const newResult = String(result);
  const infoGcdGame = [question, newResult];
  return infoGcdGame;
};

const gcdGame = () => {
  engine(description, getQuestionAndCorrectAnswer);
};

export default gcdGame;
