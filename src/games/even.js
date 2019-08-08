import engine from '../engine';

const isEven = num => num % 2 === 0;

const min = 1;
const max = 10;

const evenGame = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  const getQuestion = () => Math.floor(Math.random() * (max - min + 1)) + min;
  const getCorrectAnswer = s => (isEven(s) ? 'yes' : 'no');
  engine(description, getQuestion, getCorrectAnswer);
};

export default evenGame;
