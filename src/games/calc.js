import engine from '../engine';


const makeid = (length) => {
  let result = '';
  const characters = '+-*';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};


const min = 1;
const max = 20;


// eslint-disable-next-line consistent-return
const getSign = (number1, sign, number2) => {
  if (sign === '+') {
    return number1 + number2;
  }
  if (sign === '-') {
    return number1 - number2;
  }
  if (sign === '*') {
    return number1 * number2;
  }
};

const calcGame = () => {
  const description = 'What is the result of the expression?';
  console.log();
  const getQuestionAndCorrectAnswer = () => {
    const number1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const number2 = Math.floor(Math.random() * (max - min + 1)) + min;
    const signofMathOperation = makeid(1);

    const correctanswer = getSign(number1, signofMathOperation, number2);

    const question = `${number1} ${signofMathOperation} ${number2}`;

    const a = question;
    const b = String(correctanswer);
    const date = [a, b];

    return date;
  };
  engine(description, getQuestionAndCorrectAnswer);
};

export default calcGame;
