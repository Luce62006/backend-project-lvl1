import readlineSync from 'readline-sync';


function GetName() {
  const name = readlineSync.question('May I have your name?');
  return name;
}
export default GetName;
