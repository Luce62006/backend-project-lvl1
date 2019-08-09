import readlineSync from 'readline-sync';
import getName from '.';

const roundsNumber = 3;

const engine = (description, getDate) => {
  // 1-й этап - вывод общеигрового приветствия
  console.log('Welcome to the Brain Games!');
  console.log();

  // 2-й этап - вывод описания игры
  console.log(description);
  console.log();

  // 3-й этап - запрос имени у пользователя
  const name = getName();

  // 4-й этап - приветствие пользователя
  console.log(`Hello, ${name}!`);
  console.log();

  // 5-й этап - играем раунды
  for (let i = 1; i <= roundsNumber; i += 1) {
    const question = getQuestion();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(question);
    if (answer === correctAnswer) {
      console.log('Correct!');
      console.log();
    } else {
      console.log(`"${answer}" is wrong answer! Correct answer is "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default engine;
