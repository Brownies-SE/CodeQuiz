/* Create an object with arrays that will act as the questions and answers for my program.
Create a function to add a container that will display the questions to it.
Create a function to actually display the questions to the container
Create a function to check if the answer is correct when an option is clicked
Create a function to get the user to the next question or if there are no questions left, 
end the game and display the highscore  */

var startButton = document.querySelector("#start");
var startPage = document.querySelector("#start-page");
var ScorePage = document.querySelector("#end-page");
var container = document.getElementById("question-window");
var answer1 = document.querySelector("#ans1");
var answer2 = document.querySelector("#ans2");
var answer3 = document.querySelector("#ans3");
var answer4 = document.querySelector("#ans4");

var time;
var qCount = 0;
var score = 0;
var incorrect = 0;

startButton.addEventListener("click", startQuiz);
// Putting the questions into an array
var questions = [
  {
    questionText: "What does HTML stand for?",
    options: [
      "Home Tool Markup Language",
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Something else",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    questionText: "What element creates the largest heading?",
    options: ["<heading>", "<head>", "<h1>", "<h2>"],
    answer: "<h1>",
  },
  {
    questionText: "Which character respresents an end tag?",
    options: ["<", "/", "^", "*"],
    answer: "/",
  },
  {
    questionText: "Which element represents an ordered list?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    answer: "<ol>",
  },
  {
    questionText:
      "What attribute shows text for an image if it cant be displayed?",
    options: ["Title", "longdesc", "src", "alt"],
    answer: "alt",
  },
];

function startQuiz() {
  //stop displaying the welcome screen
  startPage.style.display = "none";
  // display the questions
  container.style.display = "block";
  //Set the time and condition if its correct or not
  timeInterval();
  //populate questions
  displayPrompts();
  //Get the usersInput, do work depending on the input
  getUserInput();
}

function timeInterval() {
  time = setInterval(timer, 1000);
  var timeLeft = 15; // Set the originial clock to 15 seconds

  function timer() {
    // if the wrong answer is clicked, take 2 seconds away from the count
    if (incorrect === 1) {
      timeLeft -= 2;
      incorrect--;
    }

    if (timeLeft < 0) {
      timeLeft = 0;
    } else if (timeLeft > 0) {
      document.getElementById("timer-text").innerHTML = timeLeft + " sec";
      document.getElementById("score").innerHTML = "Score: " + score;
      timeLeft--;
    } else {
      clearInterval(time);

      //time is 0, display the score
      document.getElementById("timer-text").innerHTML = "Time Remaining: 0 sec";
      document.getElementById("final-score").innerHTML = "Score: " + score;
      // set display to none so the questions page is now gone
      container.style.display = "none";
      // display the ScorePage now that questions are over
      ScorePage.style.display = "block";
    }
  }
}
//Get the question to display properly as well as the options on the buttons
function displayPrompts() {
  //update hese elements on the user Interface
  var title = document.querySelector("#question-title");
  var text = document.querySelector("#question-text");

  //update questions and text
  title.textContent = "question: " + (qCount + 1);
  text.textContent = questions[qCount].questionText;

  //loop to update answer buttons
  for (i = 0; i < 4; i++) {
    //target the button
    var button = document.querySelector("#ans" + (i + 1));
    //update the text on the button
    button.textContent = questions[qCount].options[i];
  }

  qCount++;
}

function getUserInput() {
  // event listener for answer-btn
  answer1.addEventListener("click", function () {
    var userInput = this.innerHTML;
    var actualAnswer = questions[qCount - 1].answer;
    console.log(actualAnswer);
    //check if answer value matches correct value
    if (userInput === actualAnswer) {
      score++;
      displayPrompts();
    } else {
      incorrect++;
      displayPrompts();
    }
  });

  answer2.addEventListener("click", function () {
    var userInput = this.innerHTML;
    var actualAnswer = questions[qCount - 1].answer;
    //check if answer value matches correct value
    if (userInput === actualAnswer) {
      score++;
      displayPrompts();
    } else {
      incorrect++;
      displayPrompts();
    }
  });
  answer3.addEventListener("click", function () {
    var userInput = this.innerHTML;
    var actualAnswer = questions[qCount - 1].answer;
    //check if answer value matches correct value
    if (userInput === actualAnswer) {
      score++;
      displayPrompts();
    } else {
      incorrect++;
      displayPrompts();
    }
  });
  answer4.addEventListener("click", function () {
    var userInput = this.innerHTML;
    var actualAnswer = questions[qCount - 1].answer;
    //check if answer value matches correct value
    if (userInput === actualAnswer) {
      score++;
      displayPrompts();
    } else {
      incorrect++;
      displayPrompts();
    }
  });
}
