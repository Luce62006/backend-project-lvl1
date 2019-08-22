import engine from '../engine';
import getRundomNum from '../utils';

const isEven = num => num % 2 === 0;

const getCorrectAnswer = question => (isEven(question)) ? 'yes' : 'no';
const description = 'Answer "yes" if number even otherwise answer "no".';

const getQuestionAndCorrectAnswer = () => {
  const question = getRundomNum(1, 30);
  const corrAnswer = getCorrectAnswer();
  const infoEvenGame = [question, corrAnswer];
  return infoEvenGame;
};

const evenGame = () => {
  engine(description, getQuestionAndCorrectAnswer);
};

export default evenGame;
