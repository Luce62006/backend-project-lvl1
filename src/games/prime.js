import readlineSync from 'readline-sync';
import getName from '..';


const isPrime = (num) => {
  if (num < 1) {
    console.log('no');
    return;
  }
  if (num === 1) {
    console.log('yes');
    return;
  }
  if (num === 2) {
    console.log('yes');
    return;
  }
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'yes';
    }
    return 'no';
  }
};


const gamePrime = () => {
  // 1-й этап - вывод общеигрового приветствия
  console.log('Welcome to the Brain Games!');
  console.log();
  // 2-й этап - вывод описания игры
  console.log(`Answer "yes" if given number is prime. 
    Otherwise answer "no"`);
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
    const max = 300;
    const question = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Question: ${question}`);
    const correctanswer = isPrime(question);
    const answer = readlineSync.question('Your answer:');
    if (answer === correctanswer && i === num) {
      console.log(`Congratiulations, ${name}!`);
    } else if (answer === correctanswer) {
      console.log('Correct!');
    } else {
      console.log(`Is wrong answer! Let's try again!${name}`);
      return;
    }
  }
};
export default gamePrime;
