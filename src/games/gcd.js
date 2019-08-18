import engine from '../engine';
import getRundomNum from '../utils';

const gcd = (item1, item2) => {
  if (item2 > 0) {
    const k = item1 % item2;
    return gcd(item2, k);
  }

  return Math.abs(item1);
};

const gcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const getQuestionAndCorrectAnswer = () => {
    const item1 = getRundomNum(1, 30);
    const item2 = getRundomNum(1, 30);
    const question = (`${item1} ${item2}`);
    const a = question;
    const result = gcd(item1, item2);
    const b = String(result);
    const result2 = [a, b];
    return result2;
  };
  engine(description, getQuestionAndCorrectAnswer);
};

export default gcdGame;
