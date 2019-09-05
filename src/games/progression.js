import engine from '../engine';
import getRandomNum from '../utils';

const lengthOfProgression = 10;

const getfirstMember = () => getRandomNum(1, 5);
const getprogressionDifference = () => getRandomNum(2, 4);

const gethiddenElementPosition = () => getRandomNum(lengthOfProgression - 1, 0);
const getanswer = () => getfirstMember() + getprogressionDifference()* gethiddenElementPosition();

const getQuestion = (lengthOfProgression, getfirstMember, getprogressionDifference, getanswer  ) => {

  let result = '';
  for (let n = 0; n <= lengthOfProgression; n += 1) {
    let currChar = getfirstMember + getprogressionDifference * n;
    if (currChar === getanswer) {
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
  const newQuestion = getQuestion(10, firstMember, progressionDifference, answer);
  const answerAsString = String(answer);
  const GameProgressioninfo = [newQuestion, answerAsString];
  return GameProgressioninfo;
};

const gameProgression = () => {
  engine(description, getQuestionAndCorrectAnswer);
};
export default gameProgression;
