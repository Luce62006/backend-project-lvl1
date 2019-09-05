import engine from '../engine';
import getRandomNum from '../utils';

const gcd = (item1, item2) => {
  if (item2 > 0) {
    const k = item1 % item2;
    return gcd(item2, k);
  }
  return Math.abs(item1);
};

const description = 'Find the greatest common divisor of given numbers.';
const getQuestionAndCorrectAnswer = () => {
  const item1 = getRandomNum(1, 30);
  const item2 = getRandomNum(1, 30);
  const question = (`${item1} ${item2}`);
  const result = gcd(item1, item2);
  const correctAnswer = String(result);
  const gcdGameInfo = [question, correctAnswer];
  return gcdGameInfo;
};

export default () => engine(description, getQuestionAndCorrectAnswer);
