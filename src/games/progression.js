import engine from '../engine';


const min = 1;
const max = 5;


const minD = 2;
const maxD = 4;


const minN = 1;
const maxN = 10;

const gameProgression = () => {
  const description = ' What number is missing in the progression?';
  console.log();
  // 3-й этап - запрос имени у пользователя

  const getQuestionAndCorrectAnswer = () => {
    const signA1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const difD = Math.floor(Math.random() * (maxD - minD + 1)) + minD;
    const nSign = Math.floor(Math.random() * (maxN - minN + 1)) + minN;
    const answer = signA1 + difD * (nSign - 1);
    const question = () => {
      let result = ' ';
      let currChar = ' ';
      for (let n = 1; n <= 10; n += 1) {
        currChar = signA1 + difD * (n - 1);
        if (currChar === answer) {
          currChar = '..';
        }
        result = `${result} ${currChar}`;
      }
      return result;
    };
    const a = question();
    const b = String(answer);
    const date = [a, b];
    return date;
  };
  engine(description, getQuestionAndCorrectAnswer);
};
export default gameProgression;
