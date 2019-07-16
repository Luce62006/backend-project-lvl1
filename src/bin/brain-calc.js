import readlineSync from 'readline-sync';


const calcGame = (name) => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i++) {
    const min = 1;
    const max = 20;
    const item1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const item2 = Math.floor(Math.random() * (max - min + 1)) + min;
    const example1 = item1 + item2;
    console.log(`Question: ${item1} + ${item2}`);
    const answer1 = readlineSync.question('Your answer: ');
    
    if (example1 == answer1) {
      console.log('Correct!');
    } else {
      console.log(`${answer1} is wrong answer ;(. Correct answer was ${example1}.
    Let's try again!`);
    }
    
  }
};
export default calcGame;
