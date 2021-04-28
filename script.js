var myTimer;
var questionCounter = 0;
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

  timeInterval();
  //populate questions
  displayQuestion();
  //Get the usersInput do work depending on the input
  buttonListen();
}

function timeInterval() {
  myTimer = setInterval(timer, 1000);
  var counter = 15; // Set the originial clock to 15 seconds

  function timer() {
    // if the wrong answer is clicked, take 2 seconds away from the count
    if (wrongAnswer === 1) {
      counter -= 2;
      wrongAnswer--;
    }

    if (counter < 0) {
      counter = 0;
    } else if (counter > 0) {
      document.getElementById("timer-text").innerHTML = counter + " sec";
      document.getElementById("score").innerHTML = "Score: " + score;
      counter--;
    } else {
      clearInterval(myTimer);

      //COUNTER REACHES ZER00000000
      document.getElementById("timer-text").innerHTML = "Time Remaining: 0 sec";
      document.getElementById("final-score").innerHTML = "Score: " + score;
      // window.location.href = "highscores.html";
      endPage.style.display = "block";

      // HIDE QUESTION PAGE
      questionWindow.style.display = "none";

      // SEND USER TO END PAGE
      endPage.style.display = "block";
      console.log(localStorage);
    }
  }
}
