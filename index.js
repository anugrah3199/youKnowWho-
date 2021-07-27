var ask = require('readline-sync');
var chalk = require("chalk");
var questions = [
   {question : "Where do i live ?(easiest guess) ",
   ans : "india"},
   {question : "What's my favorite color?",
   ans : "black"},
   {question : "what's my favorite movie? ",
   ans : "inception"}];
var highScore = [{name : "Anugrah" , score : 3}] 
var score = 0;
var name = ask.question("Hey ! what's your name ? ")
console.log(chalk.keyword("green").bold("Hi " + name + " ! my name is Anugrah"));
console.log("let's try to make guess of below questions")
console.log(chalk.hex("#12BBFF").bold("<===========================>"))
for(var i in questions){
  var userans = ask.question(questions[i]['question']);
  if( userans.toUpperCase() === questions[i]['ans'].toUpperCase()){ 
    score++;
    console.log("You gussed it right");
  }
  else {console.log("its " + questions[i]['ans']);}
  console.log(chalk.hex("#12BBFF").bold("<===========================>"))
}

console.log("Your score :" + score);
