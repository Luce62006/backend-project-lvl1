import engine from '../engine';
import getRundomNum from '../utils';

const description = ' What number is missing in the progression?';

const getQuestionAndCorrectAnswer = () => {
  const firstMemberProgression = getRundomNum(1, 5);
  const progressionDifference = getRundomNum(2, 4);
  const progressionMemberNumber = getRundomNum(10, 1);
  const answer = firstMemberProgression + progressionDifference * (progressionMemberNumber - 1);
  const question = () => {
    const numberOfDigits = 10;
    let result = ' ';
    let currChar = ' ';
    for (let n = 1; n <= numberOfDigits; n += 1) {
      currChar = firstMemberProgression + progressionDifference * (n - 1);
      if (currChar === answer) {
        currChar = '..';
      }
      result = `${result} ${currChar}`;
    }
    return result;
  };
  const newQuestion = question();
  const answerAsString = String(answer);
  const infoGameProgression = [newQuestion, answerAsString];
  return infoGameProgression;
};

const gameProgression = () => {
  engine(description, getQuestionAndCorrectAnswer);
};
export default gameProgression;
