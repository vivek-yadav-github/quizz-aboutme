var readlinesync = require("readline-sync");
var username = readlinesync.question("Hey,whats your name :"); 
console.log("Welcome " + username + " ,How well do you know VIVEK!");
console.log("To answer use only small letters!");
 var score=0;
function play(question,answer){
  var username = readlinesync.question(question);

  if(username === answer){
    console.log("Right");
    score = score + 1;
    console.log("Your score is :" ,score);
    console.log("------------");
  }else{
    console.log("OOps");
    console.log("------------");
  }
}

play("Where do i live :","gujarat");
play("what do i do :","student");
play("Which Game do i play most :","pubg");
play("whats my favorite color :","blue");
play("which car do i love most :","lamborgini")
console.log("Thank you! hope you liked it !");
console.log("YAY your total score is :" ,score);
