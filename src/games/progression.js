import engine from '../engine';
import getRandomNum from '../utils';

const lengthOfProgression = 10;

const getfirstMember = () => getRandomNum(1, 5);
const getprogressionDifference = () => getRandomNum(2, 4);

const gethiddenElementPosition = () => getRandomNum(lengthOfProgression - 1, 0);

const getQuestion = (length, firstMember, progressionDifference, answer) => {
  let result = '';
  for (let n = 0; n <= length; n += 1) {
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
  const length = lengthOfProgression;
  const firstMember = getfirstMember();
  const progressionDifference = getprogressionDifference();
  const hiddenElementPosition = gethiddenElementPosition();
  const answer = firstMember + progressionDifference * hiddenElementPosition;
  const newQuestion = getQuestion(length, firstMember, progressionDifference, answer);
  const answerAsString = String(answer);
  const GameProgressioninfo = [newQuestion, answerAsString];
  return GameProgressioninfo;
};

export default () => engine(description, getQuestionAndCorrectAnswer);
