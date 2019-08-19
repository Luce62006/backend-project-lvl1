import engine from '../engine';
import getRundomNum from '../utils';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) { if (num % i === 0) return false; }
  return num > 1;
};

const description = `Answer "yes" if given number is prime. 
    Otherwise answer "no"`;
const getQuestionAndCorrectAnswer = () => {
  const question = getRundomNum(1, 300);
  const correctAnswer = () => (isPrime(question) ? 'yes' : 'no');
  const newCorrectAnswer = correctAnswer();
  const infoGamePrime = [question, newCorrectAnswer];
  return infoGamePrime;
};
const gamePrime = () => {
  engine(description, getQuestionAndCorrectAnswer);
};

export default gamePrime;
