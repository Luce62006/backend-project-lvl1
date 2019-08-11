import engine from '../engine';


const isEven = num => num % 2 === 0;

const min = 1;
const max = 10;

const evenGame = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  const getQuestionAndCorrectAnswer = () => {
    const getQuestion = () => Math.floor(Math.random() * (max - min + 1)) + min;
    const s = getQuestion();
    const getCorrectAnswer = () => (isEven(s) ? 'yes' : 'no');
    const d = getCorrectAnswer();
    const date = [s, d];

    return date;
  };

  engine(description, getQuestionAndCorrectAnswer);
};

export default evenGame;
