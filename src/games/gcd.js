import readlineSync from 'readline-sync';
import getName from '..';


const gcd = (item1, item2) => {
  if (item2 > 0) {
    const k = item1 % item2;
    return gcd(item2, k);
  }

  return Math.abs(item1);
};

const gcdGame = () => {
  // 1-й этап - вывод общеигрового приветствия
  console.log('Welcome to the Brain Games!');
  // 2-й этап - вывод описания игры
  console.log('Find the greatest common divisor of given numbers.');
  console.log();
  // 3-й этап - запрос имени у пользователя
  const name = getName();
  // 4-й этап - приветствие пользователя
  console.log(`Hello, ${name}!`);
  console.log();
  // 5-й этап - играем раунды
  const num = 3;
  for (let i = 1; i <= num; i += 1) {
    const min = 1;
    const max = 100;
    const item1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const item2 = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Question ${item1} ${item2}`);
    // eslint-disable-next-line no-loop-func
    const result = gcd(item1, item2);
    const answer = readlineSync.question('Your answer: ');
    if (result === eval(answer)) {
      console.log('Correct!');
    } else if (answer !== result) {
      console.log(`${answer} is wrong answer! Correct answer was ${result}.
      Let's try again! ${name}`);
      return;
    }
  }
  console.log(`Congratulation, ${name}!`);
};
export default gcdGame;
