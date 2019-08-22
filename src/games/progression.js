import engine from '../engine';
import getRundomNum from '../utils';

const description = ' What number is missing in the progression?';
const lengthOfProgression = 10;
const getQuestionAndCorrectAnswer = () => {
  const firstMember = getRundomNum(1, 5);
  const progressionDifference = getRundomNum(2, 4);
  const hiddenElementPosition = getRundomNum(lengthOfProgression, 1);
  const answer = firstMember + progressionDifference * hiddenElementPosition;
   const question = () => {
    let result = ' ';
    let currChar = ' ';
    for (let n = 0; n <= lengthOfProgression; n += 1) {
      currChar = firstMember + progressionDifference * n ;
      if (currChar === answer) {
      currChar = '..';
      }
      result = `${result} ${currChar}`;
    }
    return result.trim();
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
