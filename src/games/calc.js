import engine from '../engine';
import getRandomNum from '../utils';

const getSignOfMathOperation = mathSign => (
  mathSign.charAt(getRandomNum(0, String(mathSign).length - 1)));

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
  const mathSign = '-+*';
  const number1 = getRandomNum(1, 30);
  const number2 = getRandomNum(1, 30);
  const signOfMathOperation = getSignOfMathOperation(mathSign);
  const correctAnswer = getSign(number1, signOfMathOperation, number2);
  const question = `${number1} ${signOfMathOperation} ${number2}`;
  const newCorrectAnswer = String(correctAnswer);
  const calcGameInfo = [question, newCorrectAnswer];

  return calcGameInfo;
};

export default () => engine(description, getQuestionAndCorrectAnswer);
