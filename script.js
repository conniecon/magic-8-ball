$(document).ready(function(){
    
var Magic8Ball = {}; 
Magic8Ball.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
  
$("#answer").hide();
  
// Answering function
Magic8Ball.askQuestion = function(question) {
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
    
    $("#answer").fadeIn(4000);
    
    var randomNumber = Math.random();
    var randomNumberArray = randomNumber * this.listOfAnswers.length;
    var randomInderArray = Math.floor (randomNumberArray);
    var answer = this.listOfAnswers[randomInderArray];
    
     $("#answer").text(answer);
    
    console.log (question);
    console.log (answer);
};

//Function for button
var onClick = function() {
    $("#answer").hide();
    
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
    
    setTimeout ( function() {    
    var question = prompt("ASK A YES/NO QUESTION!");
    Magic8Ball.askQuestion(question);
    $("#8ball").effect( "shake" );
    }, 500);
};
  
 $("#questionButton").click(onClick);

  
});

