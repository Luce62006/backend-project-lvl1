import readlineSync from 'readline-sync';


function GetName() {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  return name;
}
export default GetName