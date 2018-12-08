# TriviaGame

### Overview
This is a simple trivia game running on timers and works on mobile. When starting a game, the user presses the start button and is greeted to the Disney logo video playing. At the end of the video, the game starts where a user is presented with a question and four possible answers. The user must select an answer to the question within 15 seconds. If the user is wrong or if time runs out, the user is informed of the correct answer. At the end of 10 questions, which are chosen randomly from a pool of 40 questions, the user is told how many correct, wrong, and unanswered questions they had. The option to play again is presented if the user wishes to play the game again.  
### Notes

There is very little starting HTML as it is dynamically generated with jquery as the game is played. The game advances on timers without any interaction from the user (with the exception of them choosing a right/wrong answer and starting/restarting the game). All of this is done without page refreshing, and passes the HTML validator. I've included a custom font, and I researched how to have a video call a method at the ending of playing which is how the game is able to start properly after playing the video. I also disabled the mouse hovering for smaller devices like phones, and the game is responsive enough to work on an iPhone. 

