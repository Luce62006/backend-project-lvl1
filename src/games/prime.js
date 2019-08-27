import engine from '../engine';
import getRandomNum from '../utils';

const isPrime = (num) => {
  for (let i = 2; i < Math.sqrt(num); i += 1) { if (num % i === 0) return false; }
  return num > 1;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const getcorrectAnswer = question => (isPrime(question) ? 'yes' : 'no');
const getQuestionAndCorrectAnswer = () => {
  const question = getRandomNum(1, 300);
  const correctAnswer = getcorrectAnswer();
  const infoGamePrime = [question, correctAnswer];
  return infoGamePrime;
};
const gamePrime = () => {
  engine(description, getQuestionAndCorrectAnswer);
};

export default gamePrime;
