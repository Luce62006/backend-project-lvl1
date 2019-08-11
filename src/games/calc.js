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

const calcGame = () => {
  const description = 'What is the result of the expression?';
  console.log();
   const number1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const number2 = Math.floor(Math.random() * (max - min + 1)) + min;
    const signofMathOperation = makeid(1);
    const example1 = Number(`number1 ${signofMathOperation} number2`);
    console.log(`Question: ${number1} ${signofMathOperation} ${number2}`);
    const answer1 = readlineSync.question('Your answer: ');
    if (example1 === Number(answer1)) {
      console.log('Correct!');
    } else {
      console.log(`${answer1} is wrong answer! Correct answer was ${example1}.
        Let's try again!${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default calcGame;
