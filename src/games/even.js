import engine from '../engine';

import getRundomNum from '../utils';


const isEven = num => num % 2 === 0;


const description = 'Answer "yes" if number even otherwise answer "no".';

const getQuestionAndCorrectAnswer = () => {
  const question = getRundomNum(1, 30);
  const getCorrectAnswer = () => (isEven(question) ? 'yes' : 'no');
  const corrAnswer = getCorrectAnswer();
  const info = [question, corrAnswer];

  return info;
};

const evenGame = () => {
  engine(description, getQuestionAndCorrectAnswer);
};

export default evenGame;
