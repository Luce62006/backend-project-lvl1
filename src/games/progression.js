import engine from '../engine';
import getRundomNum from '../utils';


const gameProgression = () => {
  const description = ' What number is missing in the progression?';
  console.log();
  // 3-й этап - запрос имени у пользователя

  const getQuestionAndCorrectAnswer = () => {
    const firstMemberProgression = getRundomNum(1, 5);
    const progressionDifference = getRundomNum(2, 4);
    const progressionMemberNumber = getRundomNum(10, 1);
    const answer = firstMemberProgression + progressionDifference * (progressionMemberNumber - 1);
    const question = () => {
      const y = 10;
      let result = ' ';
      let currChar = ' ';
      for (let n = 1; n <= y; n += 1) {
        currChar = firstMemberProgression + progressionDifference * (n - 1);
        if (currChar === answer) {
          currChar = '..';
        }
        result = `${result} ${currChar}`;
      }
      return result;
    };
    const a = question();
    const b = String(answer);
    const info = [a, b];
    return info;
  };
  engine(description, getQuestionAndCorrectAnswer);
};
export default gameProgression;
