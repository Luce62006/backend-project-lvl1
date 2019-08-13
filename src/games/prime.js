import engine from '../engine';


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
      // eslint-disable-next-line consistent-return
      return ('no');
    }

    // eslint-disable-next-line consistent-return
    return ('yes');
  }
};


const gamePrime = () => {
  const description = `Answer "yes" if given number is prime. 
    Otherwise answer "no"`;
  const getQuestionAndCorrectAnswer = () => {
    const min = 1;
    const max = 300;
    const question = Math.floor(Math.random() * (max - min + 1)) + min;

    const correctanswer = isPrime(question);
    const a = question;
    const b = correctanswer;
    const date = [a, b];
    return date;
  };
  engine(description, getQuestionAndCorrectAnswer);
};

export default gamePrime;
