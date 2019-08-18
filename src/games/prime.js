import engine from '../engine';
import getRundomNum from '../utils';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) { if (num % i === 0) return false; }
  return num > 1;
};

const gamePrime = () => {
  const description = `Answer "yes" if given number is prime. 
    Otherwise answer "no"`;
  const getQuestionAndCorrectAnswer = () => {
    const question = getRundomNum(1, 300);
    const correctanswer = () => (isPrime(question) ? 'yes' : 'no');
    const a = question;
    const b = correctanswer();
    const info = [a, b];
    return info;
  };
  engine(description, getQuestionAndCorrectAnswer);
};

export default gamePrime;
