import engine from '../engine';

const gcd = (item1, item2) => {
  if (item2 > 0) {
    const k = item1 % item2;
    return gcd(item2, k);
  }

  return Math.abs(item1);
};

const gcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  console.log();


  const min = 1;
  const max = 100;
  const getQuestionAndCorrectAnswer = () => {
    const item1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const item2 = Math.floor(Math.random() * (max - min + 1)) + min;
    const question = (`${item1} ${item2}`);
    console.log(question);
    const a = question;
    const result = gcd(item1, item2);
    console.log(result);
    const b = String(result);
    const date = [a, b];
    return date;
  };
  engine(description, getQuestionAndCorrectAnswer);
};

export default gcdGame;
