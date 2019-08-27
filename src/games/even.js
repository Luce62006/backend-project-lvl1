import engine from '../engine';
import getRandomNum from '../utils';

const isEven = num => num % 2 === 0;

const getCorrectAnswer = question => (isEven(question) ? 'yes' : 'no');

const description = 'Answer "yes" if number even otherwise answer "no".';

const getQuestionAndCorrectAnswer = () => {
  const question = getRandomNum(1, 30);
  const correctAnswer = getCorrectAnswer(question);
  const evenGameInfo = [question, correctAnswer];
  return evenGameInfo;
};

export default () => engine(description, getQuestionAndCorrectAnswer);
