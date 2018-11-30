var wins=0;
var losses=0;
var unanswered=0;
var rightAnswer;

function genericQuestion(question, answer1, answer2, answer3, answer4, correct, image){
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;
    this.correct = correct;
    this.image = "assets/images/"+image;
};

var question1 = new genericQuestion("How many dwarves are there in Snow White?","7","9","0","10","1","question1.jpg");
var question2 = new genericQuestion("What was the name of the first Mickey Mouse cartoon?","Make Mine Melody","Plane Crazy","Steamboat Willie","Mickey Mousecapade","2","question2.jpg");
var question3 = new genericQuestion("Which Winnie the Pooh Character was once named Edward?","Pooh","Piglet","Tigger","Owl","1","question3.jpg");
var question4 = new genericQuestion("What is the name of Mickey's Dog?","Bluto","Goofy","Rover","Pluto","4","question4.jpg");
var question5 = new genericQuestion("Mickey Mouse was a replacement character for whom?","Oswald the Unlucky Rabbit","Oswald the Little Rabbit","Oswald the Lucky Rabbit","Mortimer Mouse","3","question5.jpg");
var question6 = new genericQuestion("In Beauty and the Beast, how many eggs does Gaston eat for breakfast?","2 Dozen","1 Dozen","5 Dozen","9 Dozen","3","question6.jpg");
var question7 = new genericQuestion("Which Disney Full Length Animated Feature was the last one to use a storybook as an introduction in the beginning of the movie?","Robin Hood","The Jungle Book","Beauty and the Beast","Sleeping Beauty","1","question7.jpg");
var question8 = new genericQuestion("During the ballroom scene of Beauty & the Beast, what color is Belle’s Gown?","Blue","Yellow","Green","Red","2","question8.jpg");
var question9 = new genericQuestion("What was the first Mickey Mouse cartoon made in color?","Steamboat Willie","Make Mine Melody","The Band Concert","Mickey's Big Day","3","question9.jpg");
var question10 = new genericQuestion("What was the last Disney movie officially overseen by Walt Disney?","Robin Hood","Sleeping Beauty","Cinderella","The Jungle Book","4","question10.jpg");
var question11 = new genericQuestion("What country is Belle from in Beauty and the Beast?","England","France","Germany","The United States","2","question11.jpg");
var question12 = new genericQuestion("Which Disney princess is the only one to have a child?","Ariel","Belle","Jasmine","Merida","1","question12.jpg");
var question13 = new genericQuestion("Which is the fastest ride at Disney World?","Soarin' over USA","Mission to Mars","Test Track","Astro Orbiter","3","question13.jpg");
var question14 = new genericQuestion("How many languages are featured at the end of It’s a Small World?","12","22","31","19","2","question14.jpg");
var question15 = new genericQuestion("What is the peak capacity for Magic Kingdom?","100,000 people","80,000 people","150,000 people","200,000 people","1","question15.jpg");
var question16 = new genericQuestion("How many branches are in the Swiss Family Tree House tree?","500","600","800","1000","2","question16.jpg");
var question17 = new genericQuestion("In The Little Mermaid, who is NOT one of Triton’s daughter?","Andrina","Adora","Attina","Alana","2","question17.jpg");
var question18 = new genericQuestion("What does Aladdin give to the poor children to eat?","Bread","Dates","Cheese","Apples","1","question18.jpg");
var question19 = new genericQuestion("What hand did Captain Hook lose to the crocodile?","Both","None","Right","Left","4","question19.jpg");
var question20 = new genericQuestion("Lady in Lady and the Tramp was a gift for which holiday?","Christmas","Valentine's Day","Birthday","Anniversary","1","question20.jpg");
var question21 = new genericQuestion("What name does Ursula use when she becomes human?","Vikki","Valerie","Valentina","Vanessa","4","question21.jpg");
var question22 = new genericQuestion("How many puppies does Perdita give birth to in 101 Dalmatians?","12","15","100","101","2","question22.jpg");
var question23 = new genericQuestion("Which prince wakes up Princess Aurora in Sleeping Beauty?","Prince Eric","Prince Naveen","Prince Phillip","Prince Charming","3","question23.jpg");
var question24 = new genericQuestion("Which is not a hyena from The Lion King?","Shenzi","Frenzi","Banzai","Ed","2","question24.jpg");
var question25 = new genericQuestion("What brings Tinkerbell back to life?","Clapping","Singing","Laughing","Crying","1","question25.jpg");
var question26 = new genericQuestion("What was the first Pixar original short?","Luxo","Tin Toy","Luxo, Jr","The Adventures of Andre and Wally B.","4","question26.jpg");
var question27 = new genericQuestion("What animal is Timon in The Lion King?","Groundhog","Lemur","Meekrat","Warthog","3","question27.jpg");
var question28 = new genericQuestion("What were the first words Mickey Mouse ever spoke?","Yippie!","Oh, boy!","My goodness!","Hot Dog!","4","question28.jpg");
var question29 = new genericQuestion("What is the name of the pet fish in Pinocchio?","Gepetto","Cleo","Figaro","Fish","2","question29.jpg");
var question30 = new genericQuestion("Who was the first Disney princess?","Snow White","Aurora","Cinderella","Ariel","1","question30.jpg");
var question31 = new genericQuestion("Which classic Disney movie did not get a sequel?","Bambi","Cinderella","The Jungle Book","Sleeping Beauty","4","question31.jpg");

var questionArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15, question16, question17, question18, question19, question20, question21, question22, question23, question24, question25, question26, question27, question28, question29, question30, question31];

var intervalId;
var clockRunning = false;
var time = 15;

var randomNumber;

var randomNumberArray=[];

var vid;

function newGame(){
	$("#myVideo").hide();
	$("#divVideo").hide();
	$("#theImage").hide();
	$("#gameTitle").hide();
	$("#startButton").text("Start!");
	$("#startButton").hide();
	$(".timeLeft").text("Time Remaining: 15 seconds");
    $(".question").text("");
    $(".answer1").text("");
    $(".answer2").text("");
    $(".answer3").text("");
    $(".answer4").text("");
    $(".wins").text("");
    $(".losses").text("");
    $(".unanswered").text("");

    time=15;
    clockRunning = false;
    if(wins+losses+unanswered<10){
   		newQuestion();
	}
	else{
		$(".timeLeft").text("Game over!");
		$("#startButton").text("Play again?");
		$("#startButton").show();
		$(".question").text("All done, here's how you did!");
		$(".wins").text("Correct Answers: "+wins);
		$(".losses").text("Wrong Answers: "+losses);
		$(".unanswered").text("Unanswered Answers: "+unanswered);

	}
};

function resetGame(){
	clockRunning = false;
	time = 15;
	wins=0;
	losses=0;
	unanswered=0;
	randomNumberArray=[];
};

function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
};

function decrement() {

	time--;
	var plurals;
	if(time===1){
		plurals = "second"
	}
	else{
		plurals = "seconds"
	}
	$(".timeLeft").text("Time Remaining: " +time+" "+plurals);

	if (time === 0) {

		clearInterval(intervalId);
		time=5;
		$(".question").text("Time's Up. The correct answer was "+rightAnswer);
		$("#theImage").attr("src",questionArray[randomNumber].image);
		$("#theImage").fadeIn("slow");
		clearAnswers();
		intervalId = setInterval(nextQWait, 1000);
		unanswered++;
    }
};

function smallWait(){
		clearInterval(intervalId);
		time=5;
		intervalId = setInterval(nextQWait, 1000);
};

function nextQWait(){
	time--;
	clearAnswers();
	if(time===1){
		$("#theImage").fadeOut("slow");
	}

	if (time === 0) {
		stop();
    }
};

function stop() {

	clearInterval(intervalId);
	time=15;
	newGame();
};

function newQuestion(){
	run();
    randomNumber = Math.floor(Math.random() * questionArray.length);
    var shouldPush = true;
    while(shouldPush){
		if(randomNumberArray.includes(randomNumber)){
		    randomNumber = Math.floor(Math.random() * questionArray.length);
		}
		else{
			randomNumberArray.push(randomNumber);
			randomNumberArray.sort();
			shouldPush = false;
		}
    }
    $(".question").text(questionArray[randomNumber].question);
    $(".answer1").text(questionArray[randomNumber].answer1);
    $(".answer2").text(questionArray[randomNumber].answer2);
    $(".answer3").text(questionArray[randomNumber].answer3);
    $(".answer4").text(questionArray[randomNumber].answer4); 
    rightAnswer = questionArray[randomNumber]["answer"+parseInt(questionArray[randomNumber].correct)];
	console.log(rightAnswer);
};

function clearAnswers(){
	$(".answer1").text("");
    $(".answer2").text("");
    $(".answer3").text("");
    $(".answer4").text("");
};

$("#startButton").on("click", function() {
	console.log("button pressed");
	$("#startButton").text()
	if($("#startButton").text()==="Start!"){
		$("#myVideo").show();
		vid.play();
	}
	else{
		resetGame();
		newGame();
	}
});

$(".answer1").on("click", function() {
        if(questionArray[randomNumber].correct==="1"){
			$(".question").text("Correct!");
            wins++;
        }
        else{
			$(".question").text("Wrong! The answer was "+rightAnswer);
            losses++;
        }
		clearAnswers();
		$("#theImage").attr("src",questionArray[randomNumber].image);
		$("#theImage").fadeIn("slow");
        smallWait();
});

$(".answer2").on("click", function() {
        if(questionArray[randomNumber].correct==="2"){
			$(".question").text("Correct!");
            wins++;
        }
        else{
			$(".question").text("Wrong! The answer was "+rightAnswer);
            losses++;
        }
		clearAnswers();
		$("#theImage").attr("src",questionArray[randomNumber].image);
		$("#theImage").fadeIn("slow");
	    smallWait();
});

$(".answer3").on("click", function() {
        if(questionArray[randomNumber].correct==="3"){
			$(".question").text("Correct!");
            wins++;
        }
        else{
			$(".question").text("Wrong! The answer was "+rightAnswer);
            losses++;
        }
		clearAnswers();
		$("#theImage").attr("src",questionArray[randomNumber].image);
		$("#theImage").fadeIn("slow");
	    smallWait();
});

$(".answer4").on("click", function() {
        if(questionArray[randomNumber].correct==="4"){
			$(".question").text("Correct!");
            wins++;
        }
        else{
			$(".question").text("Wrong! The answer was "+rightAnswer);
            losses++;
        }
		clearAnswers();
		$("#theImage").attr("src",questionArray[randomNumber].image);
		$("#theImage").fadeIn("slow");
	    smallWait();
});

$(document).ready(function() {
	vid = document.getElementById("myVideo");
	console.log(vid);
	$("#myVideo").hide();
	$("#theImage").hide();
	console.log("start");
});