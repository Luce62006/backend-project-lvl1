import readlineSync from 'readline-sync';
import getName from '..';


const min = 1;
const max = 5;


const minD = 2;
const maxD = 4;


const minN = 1;
const maxN = 10;

const gameProgression = () => {
  // 1-й этап - вывод общеигрового приветствия
  console.log('Welcome to the Brain Games!');
  console.log();
  // 2-й этап - вывод описания игры
  console.log(' What number is missing in the progression?');
  console.log();
  // 3-й этап - запрос имени у пользователя
  const name = getName();
  // 4-й этап - приветствие пользователя
  console.log(`Hello, ${name}!`);
  console.log();

  // 5-й этап - играем раунды
  const num = 3;
  for (let i = 1; i <= num; i += 1) {
    const signA1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const difD = Math.floor(Math.random() * (maxD - minD + 1)) + minD;
    const nSign = Math.floor(Math.random() * (maxN - minN + 1)) + minN;
    const answer = signA1 + difD * (nSign - 1);
    const question = (a, b) => {
      let a = signA1;
      let b = difD;
      let result = ' ';
      let currChar = ' ';
      for (let n = 1; n <= 10; n += 1) {
        currChar = a + b * (n - 1);
        if (currChar === answer) {
          currChar = '..';
        }
        result = `${result} ${currChar}`;
      }
      return result;
    };
    console.log(`Question: ${question(signA1, difD)}`);
    const youranswer = readlineSync.question('Your answer:');
    if (answer === youranswer && i === num) {
      console.log(`Congratiulations, ${name}!`);
    } else if (answer === youranswer) {
      console.log('Correct!');
    } else {
      console.log(`${youranswer} Is wrong answer! Correct answer is ${answer}. Let's try again ${name}!`);
      return;
    }
  }
};
export default gameProgression;
