import engine from '../engine';
import { cons, car, cdr, toString } from '@hexlet/pairs';

const pair = cons(3, 5);
car(pair); // 3
cdr(pair); // 5
toString(pair); // (3, 5)

const isEven = num => num % 2 === 0;

const min = 1;
const max = 10;

const evenGame = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  const getDate = arr[] => {
    const getQuestion = () => Math.floor(Math.random() * (max - min + 1)) + min;
    const getCorrectAnswer = s => (isEven(s) ? 'yes' : 'no');
    arr[0]= getQuestion;
    arr[1]= getCorrectAnswer;
    return arr[];
  };

  engine(description, getDate);
};

export default evenGame;
