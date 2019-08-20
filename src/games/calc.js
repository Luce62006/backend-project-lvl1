import engine from '../engine';
import getRundomNum from '../utils';

const randomChoiceOfMathSign = (length) => {
  let result = '';
  const characters = '+-*';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const getSign = (number1, sign, number2) => {
  let result;
  switch (sign) {
    case '+':
      result = number1 + number2;
      break;
    case ('-'):
      result = number1 - number2;
      break;
    case ('*'):
      result = number1 * number2;
      break;
    default:
  }
  return result;
};

const description = 'What is the result of the expression?';
const getQuestionAndCorrectAnswer = () => {
  const number1 = getRundomNum(1, 30);
  const number2 = getRundomNum(1, 30);
  const signofMathOperation = randomChoiceOfMathSign(1);
  const correctAnswer = getSign(number1, signofMathOperation, number2);
  const question = `${number1} ${signofMathOperation} ${number2}`;
  const newCorrectAnswer = String(correctAnswer);
  const infoCalcGame = [question, newCorrectAnswer];

  return infoCalcGame;
};

const calcGame = () => {
  engine(description, getQuestionAndCorrectAnswer);
};

export default calcGame;
