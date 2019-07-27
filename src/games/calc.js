import readlineSync from 'readline-sync';
import getName from '..';


const makeid = (length) => {
  let result = '';
  const characters = '+-*';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const roundsNumber = 3;

const min = 1;
const max = 20;

const calcGame = () => {
  // 1-й этап приветствие
  console.log('Welcome to the Brain Games!');
  console.log();
  // 2-й этап - вывод описания игры
  console.log('What is the result of the expression?');
  console.log();
  // 3-й этап - запрос имени у пользователя
  const name = getName();
  // 4-й этап - приветствие пользователя
  console.log(`Hello, ${name}!`);
  console.log();
  // 5-й этап - играем раунды
  
  for (let i = 1; i <= roundsNumber; i++) {
    
    const number1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const number2 = Math.floor(Math.random() * (max - min + 1)) + min;
    const signofMathOperation = makeid(1);
    const example1 = eval(`number1 ${signofMathOperation} number2`);
    console.log(`Question: ${number1} ${signofMathOperation} ${number2}`);
    const answer1 = readlineSync.question('Your answer: ');

    
    }  if (example1 === answer1) {
      console.log('Correct!');
    } else {
      console.log(`${answer1} is wrong answer! Correct answer was ${example1}.
        Let's try again!${name}`);
      return;
    }
  }
    console.log(`Congratulation, ${name}!`);
};
export default calcGame;
