import engine from '../engine';
import getRandomNum from '../utils';

const lengthOfProgression = 10;

const getfirstMember = () => getRandomNum(1, 5);
const getprogressionDifference = () => getRandomNum(2, 4);

const gethiddenElementPosition = () => getRandomNum(lengthOfProgression - 1, 0);

const getQuestion = (firstMember, progressionDifference, answer) => {
  let result = '';
  for (let n = 0; n <= lengthOfProgression; n += 1) {
    let currChar = firstMember + progressionDifference * n;
    if (currChar === answer) {
      currChar = '..';
    }
    result = `${result} ${currChar}`;
  }
  return result.trim();
};

const description = ' What number is missing in the progression?';

const getQuestionAndCorrectAnswer = () => {
  const firstMember = getfirstMember();
  const progressionDifference = getprogressionDifference();
  const hiddenElementPosition = gethiddenElementPosition();
  const answer = firstMember + progressionDifference * hiddenElementPosition;
  const question = getQuestion(lengthOfProgression, firstMember, progressionDifference, answer);
  const answerAsString = String(answer);
  const GameProgressioninfo = [question, answerAsString];
  return GameProgressioninfo;
};

export default () => engine(description, getQuestionAndCorrectAnswer);
