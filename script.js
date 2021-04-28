/* Create an object with arrays that will act as the questions and answers for my program.
Create a function to add a container that will display the questions to it.
Create a function to actually display the questions to the container
Create a function to check if the answer is correct when an option is clicked
Create a function to get the user to the next question or if there are no questions left, 
end the game and display the highscore  */

var myTimer;
var questiontimeLeft = 0;
var score = 0;
var wrongAnswer = 0;

var startBtn = document.querySelector("#start");
var startPage = document.querySelector("#start-page");
var endPage = document.querySelector("#end-page");
var questionWindow = document.getElementById("question-window");
var button1 = document.querySelector("#ans1");
var button2 = document.querySelector("#ans2");
var button3 = document.querySelector("#ans3");
var button4 = document.querySelector("#ans4");

startBtn.addEventListener("click", startQuiz);
// Putting the questions into an array
var questions = [
  {
    questionText: "WHat does HTML stand for?",
    answerOptions: [
      "Home Tool Markup Language",
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Seomthing else",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    questionText: "What element creates the largest heading?",
    answerOptions: ["<heading>", "<head>", "<h1>", "<h2>"],
    answer: "<h1>",
  },
  {
    questionText: "Which character respresents an end tag?",
    answerOptions: ["<", "/", "^", "*"],
    answer: "/",
  },
  {
    questionText: "Which element represents an ordered list?",
    answerOptions: ["<ol>", "<ul>", "<li>", "<list>"],
    answer: "<ol>",
  },
  {
    questionText:
      "What attribute shows text for an image if it cant be displayed?",
    answerOptions: ["Title", "longdesc", "src", "alt"],
    answer: "alt",
  },
];

function startQuiz() {
  //stop displaying the welcome screen
  startPage.style.display = "none";
  // display the questions
  questionWindow.style.display = "block";
  //Set the time and condition if its correct or not
  timeInterval();
  //populate questions
  displayQuestion();
  //Get the usersInput, do work depending on the input
  getUserInput();
}

function timeInterval() {
  myTimer = setInterval(timer, 1000);
  var timeLeft = 15; // Set the originial clock to 15 seconds

  function timer() {
    // if the wrong answer is clicked, take 2 seconds away from the count
    if (wrongAnswer === 1) {
      timeLeft -= 2;
      wrongAnswer--;
    }
  }
}
